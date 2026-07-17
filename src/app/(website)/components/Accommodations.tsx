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
  return (
    <SectionWithContainer sectionClassName="bg-[#FFF5E6] border-y border-secondary">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center max-w-4xl mx-auto w-full gap-6">
        <div className="lg:col-span-1 md:col-span-2 col-span-1">
          <p className="text-sm tracking-widest text-primary uppercase gap-2 flex items-center">
            <span>
              <Foo />
            </span>
            {title}
          </p>
          <SectionHeading title={subtitle} />
          <p className="text-lg text-light">{description}</p>
        </div>
        <div className="col-span-1">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:col-span-2 col-span-1"> */}
          {rooms.map((room, i) => (
            <AccommodationsCards key={i} {...room} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Accommodations;
