"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import { Foo } from "@/utils/icons";
import Image from "next/image";

interface GalleryProps {
  title: string;
  subtitle: string;
  description: string;
  list: string[];
  images: string[];
  actions: {
    label: string;
    href: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({
  title,
  subtitle,
  description,
  images,
  actions,

  list,
}) => {
  const { openGallery } = useWebContext();

  return (
    <Section defaultPadding={false} className="">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        {images?.map((src, index) => (
          <div
            key={index}
            className={` overflow-hidden w-full aspect-4/3 relative cursor-pointer`}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover duration-1000 transition ease-in-out hover:scale-105"
              onClick={() => openGallery({ images, index })}
            />
          </div>
        ))}
      </div>
      <SectionWithContainer sectionClassName="bg-[#FFF5E6]">
        <div className="max_screen_width grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 text-primary">
              <Foo />
              <p className="uppercase">{subtitle}</p>
            </div>

            <SectionHeading title={title} />
            <p>{description}</p>

            {actions.map((button, i) => (
              <LinkButton
                key={i}
                href={button.href}
                label={button.label}
                className=" border border-primary capitalize text-primary max-md:w-full justify-center rounded-lg py-2 px-4"
              />
            ))}
          </div>

          <div className="lg:col-span-1 w-full space-y-4 text-black">
            <ul className="flex flex-col gap-4 lg:text-[1.1rem]">
              {list.map((item, index) => (
                <li key={index} className="flex  gap-2">
                  <span>
                    <Tick />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default Gallery;

export const Tick = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3749 13.125C20.6249 16.875 17.7975 20.4055 13.8289 21.1949C9.86018 21.9843 5.83286 20.1383 3.84031 16.6164C1.84775 13.0947 2.33966 8.69184 5.06035 5.69661C7.78103 2.70136 12.3749 1.87504 16.1249 3.37504"
      stroke="#E8AA4E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.625 11.625L12.375 15.375L21.375 5.625"
      stroke="#E8AA4E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
