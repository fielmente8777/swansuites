

import { Metadata } from "next";
import { notFound } from "next/navigation";

// import Hero from "./components/Hero";

import Accommodation from "./components/Accommodations";
// import Location from "./components/Location";
import Testimonials from "./components/Testimonials";

import SlidingTitle2 from "@/components/sliders/SlidingTitle2";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import { LocationPageData } from "./pageData";

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
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
