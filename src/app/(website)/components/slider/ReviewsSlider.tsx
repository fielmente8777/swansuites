"use client";
import { TestimonialsProps } from "@/@types/type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { useWebContext } from "@/context-api/WebContext";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
interface TestimonialsSliderProps {
  cards: TestimonialsProps["testimonials"];
}
const ReviewsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  const { setCurrent, setTotal } = useWebContext();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
        onSwiper={(swiper) => setTotal(swiper.slides.length)}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => (
          <div className=" text-white space-y-4 text-center">
            <p className="md:text-lg">{card.review}</p>
            <p className="capitalize text-xl ">{card.author}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
