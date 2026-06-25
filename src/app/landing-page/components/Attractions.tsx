import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";

interface AttractionsProps {
  title: string;
  subtitle: string;
  description: string;
  list: string[];
  actions: {
    label: string;
    href: string;
  }[];
}
const Attractions: React.FC<AttractionsProps> = ({
  title,
  subtitle,
  description,
  list,
  actions,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center lg:gap-20">
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="space-y-2">
            <p className="uppercase text-primary tracking-widest text-sm flex items-center gap-2">
              {" "}
              <span>
                <Foo />
              </span>
              {title}
            </p>
            <SectionHeading title={subtitle} />
          </div>
          <p className="">{description}</p>
          <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
            {actions.map((button, i) => (
              <li key={i} className="max-md:w-full">
                <LinkButton
                  href={button.href}
                  label={button.label}
                  target={i !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-primary text-white border-none max-md:w-full justify-center rounded-lg py-3 px-4"
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                  calendarIcon={i === 2}
                />
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-4 lg:text-[1.1rem]">
          {list.map((item, index) => (
            <li key={index} className="flex  gap-2 text-dark">
              <span>
                <TickIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Attractions;

export const TickIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3749 13.1248C20.6249 16.8748 17.7975 20.4052 13.8289 21.1947C9.86018 21.9841 5.83286 20.1381 3.84031 16.6162C1.84775 13.0944 2.33966 8.69159 5.06035 5.69636C7.78103 2.70112 12.3749 1.8748 16.1249 3.3748"
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
