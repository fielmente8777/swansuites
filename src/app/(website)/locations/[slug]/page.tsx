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
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 const paths = await LocationPageData;

  return paths.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;

  const page = LocationPageData.find((item) => item.slug === path.slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
     metadataBase: new URL("https://swansuites.com"),
    title: page.metaData.title,
    description: page.metaData.description,
    keywords: page.metaData.keyWords,

    alternates: {
      canonical: `https://swansuites.com/location/${page.slug}`,
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
  const path = await params;

  const pageData = LocationPageData.find((item) => item.slug === path.slug);

  if (!pageData) return notFound();

  return (
    <main>
      <Hero {...pageData.hero} />
      <SectionWithContainer
        sectionClassName="lg:hidden"
        defaultPadding={false}
        containerClassName="bg-dark py-4"
      >
        <div
          className="bg-background py-5  px-1.5  flex flex-col gap-5 max-w-6xl w-full mx-auto"
          id="form"
        >
          <Form1 />
          <p
            className="text-sm text-light max-w-3xl text-center mx-auto"
            dangerouslySetInnerHTML={{
              __html: pageData.hero.bookingBenefits,
            }}
          />
        </div>
      </SectionWithContainer>
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
