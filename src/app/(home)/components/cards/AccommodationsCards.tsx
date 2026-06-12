import { AccommodationsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import AmenityPopUpButton from "@/components/pop-up/AmenityPopUpButton";
import Amenities from "@/components/sliders/Amenities";
import Image from "next/image";

const AccommodationsCards: React.FC<AccommodationsProps["rooms"][0]> = ({
  actions,
  amenities,
  description,
  images,
  title,
  popUpAmenities,
}) => {
  return (
    <div className="group rounded-2xl overflow-hidden">
      <div className="w-full relative md:aspect-4/2 aspect-3/2.25">
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="py-5 px-4 group-hover:bg-background shadow-2xl bg-white transition-all duration-300 ease-in-out flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl lg:text-3xl font-semibold font-primary">
            {title}
          </h3>
          <AmenityPopUpButton amenities={popUpAmenities} label="Amenities" />
        </div>
        <ul className="lg:flex hidden flex-wrap  gap-8 mt-2 lg:justify-between border-[0.1px] border-primary py-2 px-4 rounded-2xl">
          {amenities.map((amenity, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="">{amenity.icon}</span>
              <span className="text-sm text-light">{amenity.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex lg:hidden flex-wrap  gap-8 mt-2 lg:justify-between border-[0.1px] border-primary py-2 px-4 rounded-2xl">
          <Amenities items={amenities} />
        </div>
        <p className="lg:text-lg">{description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((button, i) => (
            <li key={i}>
              <LinkButton
                {...button}
                {...button}
                target={i !== 2 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-primary border-none rounded-lg py-3 justify-center w-full px-4"
                whatsAppIcon={i === 1}
                callIcon={i === 0}
                calendarIcon={i === 2}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccommodationsCards;
