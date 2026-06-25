"use client";
import { TestimonialsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import ReviewsSlider from "./slider/ReviewsSlider";
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
        <p className="uppercase text-secondary tracking-widest text-sm text-center">
          {title}
        </p>
        <SectionHeading
          title={subtitle}
          textCenter
          titleColor="white"
          wrapperClassName="max-w-5xl mx-auto"
        />
        {/* start icon */}
        <div className="flex items-center justify-center mt-2">
          {Array(5)
            .fill(0)
            .map((_, i) => <StartIcon key={i} />) || <StartIcon />}
        </div>
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

export const StartIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6598 4.17857C16.86 4.29582 17.0252 4.46428 17.1387 4.66662C18.2545 6.68971 19.1729 8.81685 19.8813 11.016C19.9792 11.3013 20.1627 11.5496 20.4068 11.7268C20.6509 11.9041 20.9437 12.0018 21.2453 12.0066C23.1532 12.0548 25.0548 12.2443 26.9347 12.5733C27.968 12.7546 28.3547 13.9306 27.6213 14.648C26.199 16.0394 24.6796 17.3279 23.0747 18.504C22.584 18.8626 22.384 19.4773 22.5707 20.04C23.1617 21.8163 23.6133 23.636 23.9213 25.4826C23.9827 25.856 24.0391 26.2315 24.0907 26.6093C24.224 27.616 23.1453 28.3266 22.2107 27.8466C20.3543 26.8955 18.5794 25.7931 16.904 24.5506C16.6415 24.359 16.325 24.2558 16 24.2558C15.675 24.2558 15.3585 24.359 15.096 24.5506C13.4202 25.7926 11.6454 26.8949 9.78932 27.8466C8.85332 28.3266 7.77599 27.616 7.90932 26.6093C8.20935 24.3768 8.71825 22.1774 9.42932 20.04C9.61599 19.4773 9.41466 18.8626 8.92532 18.504C7.51064 17.465 6.16141 16.3398 4.88532 15.1346C4.71466 14.9746 4.54577 14.8124 4.37866 14.648C3.64532 13.9306 4.03332 12.7546 5.06532 12.5733C6.94545 12.2462 8.84695 12.0568 10.7547 12.0066C11.384 11.9893 11.9333 11.5906 12.1187 11.016C12.6567 9.34513 13.3163 7.71589 14.092 6.14128C14.3382 5.64351 14.5947 5.15195 14.8613 4.66662C14.9747 4.46428 15.14 4.29582 15.3401 4.17857C15.5403 4.06132 15.768 3.99951 16 3.99951C16.2319 3.99951 16.4597 4.06132 16.6598 4.17857Z"
      stroke="#E8AA4E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
