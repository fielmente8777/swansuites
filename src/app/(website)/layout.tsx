import WebsiteFooter from "@/components/footer/WebsiteFooter";
import WebsiteNav from "@/components/navbar/WebsiteNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://swansuites.com"),
  title: "Swan Suites | Hotel in Gachibowlis",
  description:
    "Hotel near AIG HOSPITAL GACHIBOWLI, hotel in Gachibowli",
  openGraph: {
    title: "Swan Suites | Hotel in Gachibowli",
    description:
      "Hotel near AIG HOSPITAL GACHIBOWLI, hotel in Gachibowli",
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
      <WebsiteFooter />
    </>
  );
}
