import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface ComesWithYourStayProps {
  title: string;
  description: string;
  image: string;
  images: {
    name: string;
    src: string;
  }[];
}

const ComesWithYourStay: React.FC<ComesWithYourStayProps> = ({
  title,
  description,
  image,
  images,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8 ">
      <div className="space-y-3">
        <SectionHeading title={title} textCenter />
        <p className="text-lg text-center max-w-2xl text-light mx-auto">
          {description}
        </p>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="relative w-full aspect-4/4.5 lg:col-span-2 col-span-1">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:col-span-4 col-span-1">
          {images.map((image, i) => (
            <div key={i} className="relative w-full aspect-4/2.25 rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.name}
                fill
                sizes="100vw"
                className="object-cover  hover:scale-105 duration-1000 transition ease-in-out"
              />
              <div className="absolute left-4 bottom-4 z-10 bg-white px-3 py-1 rounded-full">
                <p className="text-primary text-sm capitalize">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ComesWithYourStay;
