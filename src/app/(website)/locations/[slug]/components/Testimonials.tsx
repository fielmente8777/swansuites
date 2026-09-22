"use client";
import { TestimonialsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import ReviewsSlider from "@/app/landing-page/components/slider/ReviewsSlider";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  const { current, total } = useWebContext();
  return (
    <SectionWithContainer
      sectionClassName="bg-[#121212] border-t border-light"
      containerClassName="md:space-y-10 space-y-5 "
    >
      <div>
        <p className="uppercase text-secondary tracking-widest text-sm text-center">{title}</p>
        <SectionHeading title={subtitle} textCenter titleColor="white" />
      </div>
      <div className="flex flex-col gap-10">
        <ReviewsSlider cards={testimonials} />
        <div className="flex items-center justify-center gap-6">
          <button className="text-white text-2xl border-white border flex items-center justify-center gap-2 testimonials-prev w-10 aspect-square active:scale-95 pointer-events-auto">
            <span className="sr-only">Previous</span>
            <MdNavigateBefore />
          </button>
          <span className="text-white">
            0{current} - 0{total}
          </span>
          <button className="text-white text-2xl border-white border flex items-center justify-center gap-2 testimonials-next w-10 aspect-square active:scale-95 pointer-events-auto">
            <span className="sr-only">Next</span>
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
