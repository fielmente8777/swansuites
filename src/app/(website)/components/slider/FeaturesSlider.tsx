"use client";
import { FeaturesProps } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import FeaturesCards from "../cards/FeaturesCards";
import { Autoplay } from "swiper/modules";

const FeaturesSlider: React.FC<{ items: FeaturesProps["items"] }> = ({
  items,
}) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        spaceBetween={26}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1000}
        className="w-full lg:py-10! py-8! px-1!"
        renderSlide={(item) => <FeaturesCards {...item} />}
      />
    </div>
  );
};

export default FeaturesSlider;
