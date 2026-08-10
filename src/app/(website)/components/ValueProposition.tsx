import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import Image from "next/image";

interface ValuePropositionProps {
  tag: string;
  title: string;
  description: string[];
  image: string;
  paragraph: string;
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
  actions,
  paragraph,
}) => {
  return (
    <>
      <SectionWithContainer sectionClassName="bg-[#FFF9F1]">
        <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 items-center">
          <div className="w-full relative aspect-[4/4.8] lg:block hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="space-y-1.5">
              <p className="uppercase text-primary tracking-widest text-sm flex items-center gap-2">
                {" "}
                <span>
                  <Foo />
                </span>
                {tag}
              </p>
              <SectionHeading title={title} />
            </div>
            <div className="w-full relative aspect-[4/3.84] lg:hidden block">
              <Image
                src={image}
                alt={title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="space-y-3.5">
              {description.map((item, i) => (
                <p key={i} className=" text-light">
                  {item}
                </p>
              ))}
            </div>
            <ul className="flex flex-wrap lg:gap-4 gap-2 w-full items-center">
              {actions.map((button, i) => (
                <li key={i} className="max-md:w-full">
                  <LinkButton
                    href={button.href}
                    label={button.label}
                    rel="noopener noreferrer"
                    className="text-primary max-md:w-full justify-center rounded-lg py-3 px-4"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="text-center background-color-1">
        <div className="w-72 h-px bg-secondary mx-auto mb-8"></div>

        <p className="font-primary font-italic text-4xl/tight lg:text-[2.875rem] text-secondary">
          {paragraph}
        </p>

        <div className="w-72 h-px bg-secondary mx-auto mt-8"></div>
      </SectionWithContainer>
    </>
  );
};

export default ValueProposition;
