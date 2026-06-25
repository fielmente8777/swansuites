"use client";

import { AccommodationsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import Amenities from "@/components/sliders/Amenities";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const AccommodationsCards: React.FC<AccommodationsProps["rooms"][0]> = ({
  // actions,
  amenities,
  description,
  images,
  title,
  popUpAmenities,
}) => {
  return (
    <div className="group rounded-2xl overflow-hidden">
      <div className="w-full relative md:aspect-4/2 aspect-3/2.25">
        <div className="w-full relative">
          <SwiperCarousel
            data={images}
            autoplay={{
              delay: 3000,
            }}
            speed={800}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            swiperSlideClassName="relative w-full aspect-[4/2.62]"
            renderSlide={(image) => (
              <Image src={image} alt={title} fill className="object-cover" />
            )}
          />
          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-between w-[95%] gap-4">
            <button className="button-prev w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
              <BtnPrevIcon />
            </button>
            <button className="button-next w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
              <BtnNextIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 group-hover:bg-background shadow-2xl bg-white transition-all duration-300 ease-in-out flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-3xl font-semibold font-primary">
            {title}
          </h3>
          <AmenityPopUpButton amenities={popUpAmenities} label="Amenities" />
        </div>
        <ul className="lg:flex hidden flex-wrap  gap-8 mt-2 lg:justify-between border-[0.1px] border-primary py-2 px-4 rounded-2xl">
          {amenities.map((amenity, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="">{amenity.icon}</span>
              <span className="text-sm text-light">{amenity.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex lg:hidden flex-wrap  gap-8 mt-2 lg:justify-between border-[0.1px] border-primary py-2 px-4 rounded-2xl">
          <Amenities items={amenities} />
        </div>
        <p className="lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AccommodationsCards;
