import WebSiteFooter from "../../components/footer/WebSiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://swansuites.com"),
  title: "Swan Suites | Hotel in Gachibowlis",
  description:
    "Hotel near AIG HOSPITAL GACHIBOWLI, hotel in Gachibowli, Serviced apartments Madhapur, guest house Madhapur.",
  openGraph: {
    title: "Swan Suites | Hotel in Gachibowli",
    description:
      "Hotel near AIG HOSPITAL GACHIBOWLI, hotel in Gachibowli, Serviced apartments Madhapur, guest house Madhapur.",
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

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebsiteNav />
      {children}
      <WebSiteFooter />
    </>
  );
}
