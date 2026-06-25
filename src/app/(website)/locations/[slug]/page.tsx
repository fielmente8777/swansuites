// import React from "react";
// import { LocationPageData } from "./pageData";
// import ValueProposition from "./components/ValueProposition";

// interface Params {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export async function generateStaticParams() {
//   const paths = await LocationPageData?.map((data) => ({ slug: data.slug }));
//   return paths;
// }

// export default async function Page({ params }: Params) {
//   const resolvedParams = await params;

//  const Location= LocationPageData?.find((data)=>data.slug===resolvedParams.slug)

//   return (
//       <main>
//        {/* <ImageBanner {...Location.bannerData} /> */}
//        <ValueProposition {...}

//     </main>
//   );
//   <div>{Location?.slug}</div>;
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";

// import Hero from "./components/Hero";

import Accommodation from "./components/Accommodations";
// import Location from "./components/Location";
import Testimonials from "./components/Testimonials";

import { LocationPageData } from "./pageData";
import ValueProposition from "./components/ValueProposition";
import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import Gallery from "./components/Gallery";
import ImageBanner from "@/components/banners/ImageBanner";
import Hero from "./components/Hero";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LocationPageData.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  const page = LocationPageData.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.metaData.title,
    description: page.metaData.description,
    keywords: page.metaData.keyWords,

    alternates: {
      canonical: `https://yourdomain.com/location/${page.slug}`,
    },

    openGraph: {
      title: page.metaData.title,
      description: page.metaData.description,
      images: page.hero.images,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;

  console.log(slug, LocationPageData[0].slug);
  const pageData = LocationPageData.find((item) => item.slug === slug);

  if (!pageData) return notFound();

  return (
    <main>
      <Hero {...pageData.hero} />

      <ValueProposition
        {...pageData.valueProposition}
        paragraph={pageData.description}
      />

      <Accommodation {...pageData.accommodations} />
      <SlidingTitle2 items={pageData.titles} />

      <Gallery {...pageData.Gallery} />

      <Testimonials {...pageData.testimonials} />
    </main>
  );
}
