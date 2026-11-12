import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Foo } from "@/utils/icons";
import Image from "next/image";

interface ValuePropositionProps {
  tag: string;
  title: string;
  description: string[];
  image: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  tag,
  title,
  description,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-image">
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 items-center">
        <div className="w-full relative aspect-[4/2.84] lg:block hidden">
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
          <div className="w-full relative aspect-[4/2.84] lg:hidden block">
            <Image
              src={image}
              alt={title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="space-y-3">
            {description.map((d, i) => (
              <p key={i} className=" text-dark">
                {d}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ValueProposition;
