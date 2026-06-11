import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import { JSX } from "react/jsx-runtime";

interface FeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  items: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  actions: {
    label: string;
    href: string;
  }[];
}
const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  description,
  items,
  actions,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-10 space-y-5">
      <div className="space-y-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 bg-white rounded-2xl p-5 box-shadow border-[0.2px] border-light"
          >
            <div className="w-10 aspect-square rounded-lg bg-primary flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-xl font-semibold text-dark font-primary lg:text-3xl">
              {item.title}
            </p>
            <p className="text-light">{item.description}</p>
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap items-center justify-center lg:gap-4 gap-3">
        {actions.map((button, i) => (
          <li key={i} className="w-full md:w-auto">
            <LinkButton
              {...button}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border-none max-md:w-full justify-center rounded-lg py-3 px-4"
              whatsAppIcon={i === 1}
              callIcon={i === 0}
              calendarIcon={i === 2}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default Features;
