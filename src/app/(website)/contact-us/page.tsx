import { Metadata } from "next";
import ContactInfoSection from "./components/ContactInfoSection";
import { contactPageData } from "./components/pagedata";
import { Section } from "@/components/sectionComponants";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { contact } from "@/utils/constent";

export const metadata: Metadata = {
  title: "Contact - Swan Suites",
  description: "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli.",

  openGraph: {
    title: "About Us - Swan Suites",
    description: "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli.",
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
export default function ContactUs() {
  return (
    <main>
      <ContactInfoSection {...contactPageData.banner} />
      <Section defaultPadding={false} className="relative lg:aspect-16/7 aspect-square">
        <LazyLoadedMap src={contact.locations.gachibowli.mapUrl} />
      </Section>
    </main>
  );
}
