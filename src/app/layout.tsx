import LandingFooter from "@/components/footer/LandingFooter";
import ImagePopup from "@/components/pop-up/ImagePopup";
import type { Metadata } from "next";
import { Open_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Script from "next/script";
import { WebProvider } from "@/context-api/WebContext";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// const cormorant = Cormorant({
//   variable: "--font-cormorant",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title:
    "Luxury Serviced Apartments in Hitech City & Gachibowli Hyderabad | Swan Suites",
  description:
    "Stay at award-winning serviced apartments in Hitech City & Gachibowli, Hyderabad. Spacious accommodations, work-friendly amenities, daily housekeeping, free cancellation, and direct booking discounts.",
  keywords: [
    "serviced apartments Hyderabad",
    "serviced apartments Hitech City",
    "serviced apartments Gachibowli",
    "corporate stay Hyderabad",
    "business hotel Hyderabad",
    "long stay accommodation Hyderabad",
    "luxury apartments Hyderabad",
    "executive accommodation Hyderabad",
    "corporate housing Hyderabad",
    "extended stay Hyderabad",
  ],
  openGraph: {
    title: "Your Corporate Stay, Perfected | Swan Suites Hyderabad",
    description:
      "Experience spacious serviced apartments in Hyderabad's business district. Premium comfort, coworking facilities, dining, housekeeping, and exclusive direct booking benefits.",
    type: "website",
    locale: "en_IN",
    siteName: "Swan Suites",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Serviced Apartments in Hyderabad | Swan Suites",
    description:
      "Stay smarter in Hitech City & Gachibowli. Spacious apartments, premium amenities, flexible booking, and exceptional value for business travelers.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${cormorant_garamond.variable} antialiased`}>
        <WebProvider>
          {children}
          <LandingFooter />
          <ImagePopup />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
        </WebProvider>

        {/* <Script id="whatsapp-config" strategy="afterInteractive">
          {`window.eazbotConfig = {
              ndid: "5617a084-5783-4bac-b299-bdb6e8e471bb",
              hid: "41913874",
              phoneNumber: "+919759349941",
              message: "Hello",
              // position: "right",
              // top: 100
            };`}
        </Script>

        <Script src="https://whatsapp-widget-tau.vercel.app/widget/whatsapp.js"></Script> */}

        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "6393ca3a-941d-4189-b0df-807c8de5a34c",
              hid: "21497405",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
