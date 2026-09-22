import { Metadata } from "next";
import AboutIntro from "./components/AboutIntro";
import Awards from "./components/Awards";
import WhyUs from "./components/WhyUs";
import { pageData } from "./pageData";

export const metadata: Metadata = {
  title: "About Us - Swan Suites",
  description:
    "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli.",

  openGraph: {
    title: "About Us - Swan Suites",
    description:
      "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli.",
    type: "website",
    locale: "en_IN",
    siteName: "Swan Suites",
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

export default function AboutPage() {
  return (
    <>
      <AboutIntro data={pageData.aboutIntro} />
      <WhyUs data={pageData.whyUs} />
      <Awards data={pageData.awards} />
    </>
  );
}
