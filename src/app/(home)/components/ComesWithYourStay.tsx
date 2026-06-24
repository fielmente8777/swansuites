import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import Image from "next/image";

interface ComesWithYourStayProps {
  title: string;
  description: string;
  image: string;
  images: {
    name: string;
    src: string;
  }[];
  actions: {
    label: string;
    href: string;
  }[];
}

const ComesWithYourStay: React.FC<ComesWithYourStayProps> = ({
  title,
  description,
  image,
  images,
  actions,
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
      <ul className="flex flex-wrap items-center justify-center lg:gap-4 gap-3">
        {actions.map((button, i) => (
          <li key={i} className="w-full md:w-auto">
            <LinkButton
              {...button}
              target={i !== 2 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-primary text-white border-none max-md:w-full justify-center rounded-lg py-3 px-4"
              whatsAppIcon={i === 1}
              callIcon={i === 0}
              calendarIcon={i === 2}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default ComesWithYourStay;
