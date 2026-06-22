import { AwardsProps } from "@/@types/type";
import Image from "next/image";

interface Props {
  data: AwardsProps;
}

export default function Awards({ data }: Props) {
  return (
    <section className="bg-background">
      <div className="max_width">
        {/* <h2 className="font-primary">
          {data.title.first}{" "}
          <span className="text-primary font-italic">
            {data.title.highlight}
          </span>
        </h2> */}
        <h2 className="font-primary text-dark text-center">
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
          <div className="border border-secondary rounded-xl p-6">
            {data.achievements.map((item, index) => (
              <div key={index} className="flex gap-3 mb-6">
                <span className="text-secondary">⭐</span>
                <p className="text-light">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full aspect-[3/4]">
            <Image
              src={data.rightImage}
              alt="Certificate"
              width={350}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
