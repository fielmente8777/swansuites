import { AccommodationsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AccommodationsCards from "./cards/AccommodationsCards";
import { Foo } from "@/utils/icons";

const Accommodations: React.FC<AccommodationsProps> = ({
  title,
  rooms,
  subtitle,
  description,
}) => {
  console.log(rooms);
  if (!rooms) {
    return null;
  }
  return (
    <SectionWithContainer containerClassName="md:space-y-10 space-y-5">
      <div className="grid grid-cols-3">
        <div className="">
          <p className="text-sm text-center tracking-widest text-primary uppercase flex items-center justify-center gap-2">
            <span>
              <Foo />
            </span>
            {title}
          </p>
          <SectionHeading title={subtitle} textCenter />
          <p className="text-lg text-center max-w-2xl text-light mx-auto">
            {description}
          </p>
        </div>
        <div className="">
          <AccommodationsCards {...rooms[0]} />
        </div>
        <div className="">
          <AccommodationsCards {...rooms[1]} />
        </div>
        {/* <p className="text-sm text-center tracking-widest text-primary uppercase flex items-center justify-center gap-2">
          <span>
            <Foo />
          </span>
          {title}
        </p>
        <SectionHeading title={subtitle} textCenter />
        <p className="text-lg text-center max-w-2xl text-light mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {rooms.map((room, i) => (
          <AccommodationsCards key={i} {...room} />
        ))}
      </div> */}
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
