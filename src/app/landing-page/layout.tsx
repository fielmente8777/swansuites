import LandingFooter from "@/components/footer/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Luxury Serviced Apartments in Hitech City & Gachibowli Hyderabad | Swan Suites",
  description:
    "Stay at award-winning serviced apartments in Hitech City & Gachibowli, Hyderabad. Spacious accommodations, work-friendly amenities, daily housekeeping, free cancellation, and direct booking discounts.",
  
  openGraph: {
    title: "Your Corporate Stay, Perfected | Swan Suites Hyderabad",
    description:
      "Experience spacious serviced apartments in Hyderabad's business district. Premium comfort, coworking facilities, dining, housekeeping, and exclusive direct booking benefits.",
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

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <LandingFooter />
    </>
  );
}
