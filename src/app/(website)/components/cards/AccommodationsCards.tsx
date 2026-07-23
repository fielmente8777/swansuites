"use client";

import { AccommodationsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { BtnNextIcon, BtnPrevIcon, LocationIcon } from "@/utils/icons";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const AccommodationsCards: React.FC<AccommodationsProps["rooms"][0]> = ({
  actions,
  amenities,
  images,
  title,
  location,
}) => {
  return (
    <div className="">
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
        renderSlide={(image) => (
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/30 backdrop-blur-xs border border-secondary rounded-lg px-2 py-1">
              <LocationIcon />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        )}
      />
      {/* <div className="py-5 px-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-2xl font-semibold font-primary">
            {title}
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-secondary" />
            <div className="flex items-center gap-3">
              {amenities?.map((amenity, i) => (
                <span key={i}>{amenity.icon}</span>
              ))}
            </div>
          </div>
        </div> */}

        {/* <ul className="grid grid-cols-1">
          {actions?.map((button, i) => (
            <li key={i}>
              <LinkButton
                {...button}
                rel="noopener noreferrer"
                className=" border-primary text-nowrap capitalize! text-primary rounded-lg py-3 justify-center w-full px-4"
                
              />
            </li>
          ))}
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default AccommodationsCards;
