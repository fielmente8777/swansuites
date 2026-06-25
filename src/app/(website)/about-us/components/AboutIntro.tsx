import { AboutIntroProps } from "@/@types/type";
import Image from "next/image";

interface Props {
  data: AboutIntroProps;
}

export default function AboutIntro({ data }: Props) {
  return (
    <section className="py-20 bg-background">
      <div className="max_width">
        {/* Tag */}

        <div className="flex items-center gap-3 mb-6">
          {data.icon}

          <p className="font-body uppercase tracking-[6px] text-primary">
            {data.tag}
          </p>
        </div>

        {/* Heading */}

        <h2 className="font-primary text-dark text-4xl md:text-5xl lg:text-[56px] mb-8">
          {data.title.first}{" "}
          <span className="text-primary italic">{data.title.highlightOne}</span>{" "}
          {data.title.middle}{" "}
          <span className="text-primary italic">{data.title.highlightTwo}</span>
        </h2>

        {/* Top Description */}

        <div className="space-y-5 text-light text-base ">
          {data.topDescription.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        {/* Image */}

        <div className="relative w-full h-[320px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden my-12">
          <Image
            src={data.image}
            alt="Swan Suites"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Description */}

        <div className="space-y-5 text-light text-base">
          {data.bottomDescription.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { AboutIntroProps } from "@/@types/type";
// import Image from "next/image";

// interface Props {
//   data: AboutIntroProps;
// }

// export default function AboutIntro({ data }: Props) {
//   return (
//     <section className="bg-background">
//       <div className="max_width">
//         {/* Tag */}
//         <p className="text-primary font-body uppercase">
//           {data.tag}
//         </p>

//         {/* Heading */}
//         <h2 className="font-primary text-dark">
//           {data.title.first}{" "}
//           <span className="text-primary font-italic">
//             {data.title.highlightOne}
//           </span>{" "}
//           {data.title.middle}{" "}
//           <span className="text-primary font-italic">
//             {data.title.highlightTwo}
//           </span>
//         </h2>

//         {/* Top Description */}
//         {data.topDescription.map((item, index) => (
//           <p key={index} className="font-body text-light">
//             {item}
//           </p>
//         ))}

//         {/* Image */}
//         <Image
//           src={data.image}
//           alt="Swan Suites"
//           width={1320}
//           height={700}
//         />

//         {/* Bottom Description */}
//         {data.bottomDescription.map((item, index) => (
//           <p key={index} className="font-body text-light">
//             {item}
//           </p>
//         ))}
//       </div>
//     </section>
//   );
// }
