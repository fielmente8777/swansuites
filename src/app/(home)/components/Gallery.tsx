"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface GalleryProps {
  title: string;
  subtitle: string;
  images: string[];
  actions: {
    label: string;
    href: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({
  title,
  subtitle,
  images,
  actions,
}) => {
  const { openGallery } = useWebContext();

  const gridPattern = [
    "lg:col-span-2 col-span-2 lg:row-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
  ];
  
  return (
    <SectionWithContainer containerClassName="md:space-y-10 space-y-5">
      <div className="space-y-3">
        <p className="text-sm text-primary uppercase">{title}</p>
        <SectionHeading title={subtitle} />
      </div>
      <div className="md:space-y-12 space-y-6">
        <div className="grid relative lg:grid-cols-6 grid-cols-2 md:auto-rows-[18rem] auto-rows-[12rem] grid-flow-row gap-[.55rem]">
          {images.slice(0, 5).map((src, index) => (
            <button
              key={index}
              onClick={() =>
                openGallery({
                  images,
                  index,
                })
              }
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden hover:border-4 border-white w-full h-full rounded-xl hover:shadow-3xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((button, i) => (
            <li key={i} className="">
              <LinkButton
                {...button}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-none rounded-lg py-3 w-full justify-center gap-2"
                whatsAppIcon={i === 1}
                callIcon={i === 0}
                calendarIcon={i === 2}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
