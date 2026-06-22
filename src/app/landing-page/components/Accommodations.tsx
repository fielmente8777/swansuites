import { AccommodationsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AccommodationsCards from "./cards/AccommodationsCards";

const Accommodations: React.FC<AccommodationsProps> = ({ title, rooms }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-10 space-y-5">
      <SectionHeading title={title} textCenter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {rooms.map((room, i) => (
          <AccommodationsCards key={i} {...room} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
