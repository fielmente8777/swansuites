"use client";

import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import { CalendarIcon } from "@/utils/formIcons";
import { addDays, nightsBetween, toDisplayDate } from "@/utils/date";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const BOOKING_ACTION = "https://live.ipms247.com/booking/book-rooms-57";
const HOTEL_ID = "57"; // Gachibowli

interface Props {
  /** stack the fields instead of the horizontal bar */
  gridView?: boolean;
}

const BookingBar = ({ gridView }: Props) => {
  const { min, max } = getDateInputLimits({ showPast: false, showFuture: true });
  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [error, setError] = useState("");

  const handleCheckIn = (date: Date | null) => {
    setCheckIn(date);
    setError("");
    if (date && checkOut && checkOut <= date) setCheckOut(addDays(date, 1));
  };

  const handleCheckOut = (date: Date | null) => {
    setCheckOut(date);
    setError("");
  };

 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!checkIn || !checkOut) {
      e.preventDefault();
      setError("Select both dates to check availability.");
      return;
    }
    if (checkOut <= checkIn) {
      e.preventDefault();
      setError("Check-out has to be after check-in.");
      return;
    }
  };

  const fieldWrap = `flex items-center gap-2.5 bg-white lg:border-[0.5px] lg:shadow border-light/30 rounded-lg ${
    gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 px-3 lg:px-2"
  }`;
  const labelClass = "text-white max-md:text-secondary text-base font-medium";

  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 1;

  return (
    <form
      action={BOOKING_ACTION}
      method="post"
      target="_blank"
      onSubmit={handleSubmit}
      className={`${
        gridView ? "flex flex-col gap-3" : "grid md:grid-cols-3 items-end justify-center gap-3.5"
      } w-full font-body px-4 bg-transparent text-center`}
    >
      {/* eZee's expected payload — names are theirs, don't rename */}
      <input type="hidden" name="select_hotel" value={HOTEL_ID} />
      <input
        type="hidden"
        name="eZ_chkin"
        value={checkIn ? toDisplayDate(checkIn) : ""}
      />
      <input
        type="hidden"
        name="eZ_chkout"
        value={checkOut ? toDisplayDate(checkOut) : ""}
      />
      <input type="hidden" name="eZ_Nights" value={nights || 1} />
      <input type="hidden" name="eZ_adult" value="1" />
      <input type="hidden" name="eZ_child" value="0" />
      <input type="hidden" name="eZ_room" value="1" />
      <input type="hidden" name="calformat" value="dd-mm-yy" />

      <div className="flex flex-col items-center gap-1.5 w-full">
        <label htmlFor="checkIn" className={labelClass}>
          Check In
        </label>
        <div className={`${fieldWrap} justify-center w-full`}>
          <span className="text-secondary shrink-0">
            <CalendarIcon />
          </span>
          <DatePicker
            id="checkIn"
            selected={checkIn}
            onChange={handleCheckIn}
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="dd-MM-yyyy"
            placeholderText="DD-MM-YYYY"
            calendarClassName="!z-[99999]"
            popperClassName="!z-[99999]"
            className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya text-center"
            wrapperClassName="w-full h-full !flex items-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 w-full">
        <label htmlFor="checkOut" className={labelClass}>
          Check Out
        </label>
        <div className={`${fieldWrap} justify-center w-full`}>
          <span className="text-secondary shrink-0">
            <CalendarIcon />
          </span>
          <DatePicker
            id="checkOut"
            selected={checkOut}
            onChange={handleCheckOut}
            minDate={checkIn ? addDays(checkIn, 1) : minDate}
            maxDate={maxDate}
            dateFormat="dd-MM-yyyy"
            placeholderText="DD-MM-YYYY"
            calendarClassName="!z-[99999]"
            popperClassName="!z-[99999]"
            className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya text-center"
            wrapperClassName="w-full h-full !flex items-center"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary w-full rounded-lg text-white text-lg py-3 hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Check Availability
      </button>

      {error && (
        <p className="text-red-500 text-sm md:col-span-3" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};

export default BookingBar;