import { FeaturesProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import FeaturesCards from "./cards/FeaturesCards";
import FeaturesSlider from "./slider/FeaturesSlider";

const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  description,
  items,
  actions,
}) => {
  return (
    <SectionWithContainer
      containerClassName=""
      sectionClassName="background-color-1"
    >
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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {items.map((item, i) => (
          <FeaturesCards key={i} {...item} />
        ))}
      </div> */}
      <FeaturesSlider items={items} />
      <ul className="flex flex-wrap items-center justify-center lg:gap-4 gap-3">
        {actions.map((button, i) => (
          <li key={i} className="w-full md:w-auto">
            <LinkButton
              {...button}
              target={i !== 2 ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className=" border-primary text-primary max-md:w-full justify-center rounded-lg py-3 px-4"
              whatsAppIcon={i === 0}
            />
          </li>
        ))}
      </ul>
    </SectionWithContainer>
  );
};

export default Features;
