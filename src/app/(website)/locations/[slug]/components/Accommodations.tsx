import { AccommodationsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AccommodationsCards from "./cards/AccommodationsCards";
import { BookingCalenderIcon, Foo } from "@/utils/icons";
import Link from "next/link";
import { contact } from "@/utils/constent";

const Accommodations: React.FC<AccommodationsProps> = ({
  title,
  rooms,
  subtitle,
  description,
}) => {
  return (
    <SectionWithContainer
      containerClassName="md:space-y-10 space-y-5"
      sectionClassName="bg-background border-t border-secondary "
    >
      <div className="space-y-3">
        <p className="text-sm text-center tracking-widest text-primary uppercase flex  items-center justify-center gap-2">
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
      </div>
      <Link
        href={contact.WhatsappCta}
        className="lg:flex items-center gap-2 rounded-lg bg-transparent w-fit mx-auto border px-4 md:px-6 py-2 md:py-3  text-primary transition-all hover:scale-x-105  xl hidden "
      >
        <span>
          <BookingCalenderIcon />
        </span>
        Book Now
      </Link>
    </SectionWithContainer>
  );
};

export default Accommodations;
