"use client";

import { GalleryProps } from "@/@types/type";
import { Section } from "@/components/sectionComponants";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { useMemo, useState } from "react";

interface Props {
  data: GalleryProps;
}

export default function Gallery({ data }: Props) {
  const { openGallery } = useWebContext();
  const [selected, setSelected] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(data.images.map((img) => img.alt))],
    [data.images],
  );

  const filteredImages =
    selected === "All"
      ? data.images
      : data.images.filter((img) => img.alt === selected);

  return (
    <Section className="bg-background">
      <div className="max_width">
        {/* <div className="lg:mb-12 mb-6 flex lg:justify-center lg:gap-8 gap-4 overflow-x-auto hide-scroll">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelected(category)}
              className={`px-6 py-4 rounded-xl border transition-all duration-300 text-nowrap font-body ${
                selected === category
                  ? "bg-primary border-primary text-white"
                  : "bg-background border-primary text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              className="relative w-full aspect-[7/6] overflow-hidden"
              onClick={() =>
                openGallery({
                  images: [...filteredImages.map((img) => img.src)],
                  index,
                })
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
