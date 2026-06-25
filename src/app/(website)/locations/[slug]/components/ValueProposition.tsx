import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import Image from "next/image";

interface ValuePropositionProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  paragraph?: string;
  actions: {
    label: string;
    href: string;
  }[];
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  tag,
  title,
  description,
  image,
  paragraph,
  actions,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 items-center">
        <div className="w-full relative aspect-[4/2.84]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="space-y-2">
            <p className="uppercase text-primary tracking-widest text-sm flex items-center gap-2">
              {" "}
              <span>
                <Foo />
              </span>
              {tag}
            </p>
            <SectionHeading title={title} />
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
                  className="bg-primary border-none max-md:w-full justify-center rounded-lg py-3 px-4"
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                  calendarIcon={i === 2}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center">
        <div className="w-72 h-px bg-secondary mx-auto mb-8"></div>

        <p className="font-primary font-italic text-[46px] text-secondary">
          {paragraph}
        </p>

        <div className="w-72 h-px bg-secondary mx-auto mt-8"></div>
      </div>
    </SectionWithContainer>
  );
};

export default ValueProposition;
