"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface GalleryProps {
  title: string;
  subtitle: string;
  listTitle: string;
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
  images,
  actions,
  listTitle,
  list,
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
      {/* <div className="space-y-3">
        <p className="text-sm text-primary uppercase">{title}</p>
        <SectionHeading title={subtitle} />
      </div> */}
      <div className="md:space-y-12 space-y-6 py-8">
        <div className="grid relative lg:grid-cols-6 grid-cols-1  gap-[.55rem]">
          <div className="grid lg:col-span-4 relative lg:grid-cols-4 grid-cols-2 md:auto-rows-[18rem] auto-rows-[12rem] grid-flow-row gap-[.55rem]">
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

          <div className="lg:col-span-2 w-full space-y-4 bg-[#121212] p-6 rounded-2xl text-white">
            <h2
              className="text-3xl lg:text-4xl font-primary"
              dangerouslySetInnerHTML={{ __html: listTitle }}
            />
            <ul className="flex flex-col gap-4 lg:text-[1.1rem]">
              {list.map((item, index) => (
                <li key={index} className="flex  gap-2">
                  <span>
                    <Foo />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((button, i) => (
            <li key={i} className="">
              <LinkButton
                href={button.href}
                label={button.label}
                target={i !== 2 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-primary text-white border-none rounded-lg py-3 w-full justify-center gap-2"
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

export const Foo = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 20.7084L6.79932 24.4942L8.17482 16.4757L2.34149 10.7975L10.3915 9.63086L13.9918 2.33569L17.5922 9.63086L25.6422 10.7975L19.8088 16.4757L21.1843 24.4942L14 20.7084Z"
      stroke="#E8AA4E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
