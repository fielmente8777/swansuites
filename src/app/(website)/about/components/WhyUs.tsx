import { WhyUsProps } from "@/@types/type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: WhyUsProps;
}

export default function WhyUs({ data }: Props) {
  return (
    <section className="bg-background">
      <div className="max_width">

        {/* Top Heading */}
        <div className="text-center">
          <div className="w-72 h-px bg-secondary mx-auto mb-8"></div>

          <p className="font-primary font-italic text-secondary">
            {data.topText}
          </p>

          <div className="w-72 h-px bg-secondary mx-auto mt-8"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <Image
            src={data.image}
            alt="Why Swan Suites"
            width={600}
            height={450}
          />

          <div>

            <p className="text-primary uppercase font-body">
              {data.tag}
            </p>

            <h2 className="font-primary text-dark">
              {data.title.first}{" "}
              <span className="text-primary font-italic">
                {data.title.highlight}
              </span>{" "}
              {data.title.last}
            </h2>

            {data.description.map((item, index) => (
              <p key={index} className="font-body text-light">
                {item}
              </p>
            ))}

            <Link
              href={data.action.href}
              className="inline-flex items-center bg-primary text-white"
            >
              {data.action.label}
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}