import { Metadata } from "next";
import ContactInfoSection from "./components/ContactInfoSection";
import { contactPageData } from "./components/pagedata";


export const metadata: Metadata = {
  title: "Contact - Swan Suites",
  description:
    "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli, Serviced Apartments Madhapur, Guest House in Madhapur.",

  openGraph: {
    title: "About Us - Swan Suites",
    description:
      "Hotel near AIG Hospital Gachibowli, Hotel in Gachibowli, Serviced Apartments Madhapur, Guest House in Madhapur.",
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
    </main>
  );
}
