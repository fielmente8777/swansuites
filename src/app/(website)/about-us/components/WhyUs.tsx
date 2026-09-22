import { WhyUsProps } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { CallIcon } from "@/utils/formIcons";
import { PhoneIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: WhyUsProps;
}

export default function WhyUs({ data }: Props) {
  return (
    <>
      <SectionWithContainer sectionClassName="bg-background">
        <div className="text-center">
          <div className="w-72 h-px bg-secondary mx-auto mb-8"></div>

          <p className="font-primary font-italic text-4xl/tight lg:text-[2.875rem] text-secondary">
            {data.topText}
          </p>

          <div className="w-72 h-px bg-secondary mx-auto mt-8"></div>
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-background">
        {/* Content */}
        <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-10 items-center">
          <div className="relative w-full aspect-[3/2.5] overflow-hidden lg:block hidden rounded-2xl">
            <Image
              src={data.image}
              alt="Why Swan Suites"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col lg:gap-4 gap-4">
            <div className="">
              <div className="flex items-center gap-2">
                {data.icon}
                <p className="uppercase tracking-[4px] text-primary text-sm font-medium">
                  {data.tag}
                </p>
              </div>

              <SectionHeading title={data.title} />
            </div>
            <div className="relative w-full aspect-[3/2.5] overflow-hidden lg:hidden rounded-2xl">
              <Image
                src={data.image}
                alt="Why Swan Suites"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-5">
              {data.description.map((item, index) => (
                <p key={index} className="font-body text-dark text-sm ">
                  {item}
                </p>
              ))}
            </div>

            <LinkButton
              href={data.action.href}
              label={data.action.label}
              whatsAppIcon
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-white"
            />
          </div>
        </div>
      </SectionWithContainer>
    </>
  );
}
