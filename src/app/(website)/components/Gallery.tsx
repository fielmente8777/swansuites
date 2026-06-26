"use client";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const { openGallery } = useWebContext();

  return (
    <section className="md:space-y-10 space-y-5 max_screen_width">
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
    </section>
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
