import Form1 from "@/components/forms/Form1";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface ImageBannerProps {
  images: string[];
  bookingBenefits: string;
}

const Hero: React.FC<ImageBannerProps> = ({ images, bookingBenefits }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-[16/7.7] aspect-4/4.5"
    >
      <Image
        src={images[0]}
        alt={"banner"}
        fill
        className="object-cover max-lg:object-left"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-x-4 top-4 h-full max-lg:h-[96%] border-x border-t border-white z-10"></div>
      <div className="absolute inset-x-0  -bottom-30 z-20 flex items-end pb-10 justify-center">
        <div
          className="bg-background max-lg:hidden py-5 px-1.5 border-10 border-dark rounded-[20px] mt-8 flex flex-col gap-5 max-w-6xl w-full mx-auto"
          id="form"
        >
          <Form1 />
          <p
            className="text-sm text-light max-w-3xl text-center mx-auto"
            dangerouslySetInnerHTML={{ __html: bookingBenefits }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
