import { AwardsProps } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { StarIcon } from "@/utils/icons";
import Image from "next/image";

interface Props {
  data: AwardsProps;
}

export default function Awards({ data }: Props) {
  return (
    <SectionWithContainer sectionClassName="bg-[#FFF5E6] border-t border-b border-secondary">
        {/* <h2 className="font-primary">
          {data.title.first}{" "}
          <span className="text-primary font-italic">
            {data.title.highlight}
          </span>
        </h2> */}
        <h2 className="font-primary text-dark text-center text-6xl mb-10">
          {data.title.first}{" "}
          <span className="text-primary font-italic">
            {data.title.highlight}
          </span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={data.leftImage}
              alt="Awards"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* <div>
            {data.achievements.map((item, index) => (
              <p key={index}>⭐ {item.description}</p>
            ))}
          </div> */}
          <div className="border border-secondary rounded-2xl p-6">
            {data.achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div>
               <StarIcon/>
               </div>
                <p className="font-body text-dark text-[18px] leading-7 mb-3">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full aspect-[3/4]">
            <Image
              src={data.rightImage}
              alt="Certificate"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
    </SectionWithContainer>
  );
}
