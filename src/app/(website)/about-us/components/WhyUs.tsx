import { WhyUsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { CallIcon } from "@/utils/formIcons";
import { PhoneIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: WhyUsProps;
}

export default function WhyUs({ data }: Props) {
  return (
    <section className="bg-background py-20">
      <div className="max_width">
        {/* Top Heading */}
        <div className="text-center ">
          <div className="w-72 h-px bg-secondary mx-auto "></div>

          <p className="font-primary font-italic text-[46px] text-secondary md: py-16">
            {data.topText}
          </p>

          <div className="w-72 h-px bg-secondary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-center mt-12">
          <div className="relative w-full aspect-[3/2.5] overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              alt="Why Swan Suites"
              fill
              className="object-cover"
            />
          </div>

          <SectionWithContainer>
            <div>
              <div className="flex items-center gap-2">
                {data.icon}
                <p className="uppercase tracking-[4px] text-primary text-sm font-medium">
                  {data.tag}
                </p>
              </div>

              <h2 className="font-primary text-dark text-[48px] mb-6">
                {data.title.first}{" "}
                <span className="text-primary italic">
                  {data.title.highlight}
                </span>{" "}
                {data.title.last}
              </h2>

              <div className="space-y-5">
                {data.description.map((item, index) => (
                  <p
                    key={index}
                    className="font-body text-dark text-sm "
                  >
                    {item}
                  </p>
                ))}
              </div>

              <Link
                href={data.action.href}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-white"
              >
                <PhoneIcon />
                <span>{data.action.label}</span>
              </Link>
            </div>
          </SectionWithContainer>
        </div>
      </div>
    </section>
  );
}
