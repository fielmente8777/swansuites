import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import AmenitiesPopup from "@/components/pop-up/AmenitiesPopup";
import ImagePopup from "@/components/pop-up/ImagePopup";
import PopUpForm from "@/components/pop-up/PopUpForm";
import { WebProvider } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./style.scss";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const cormorant = Cormorant({
//   variable: "--font-cormorant",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MX7CZML2');`,
          }}
        />

        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${openSans.variable} ${cormorant_garamond.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX7CZML2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <WebProvider>
          {children}
          <ImagePopup />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
          <AmenitiesPopup />
          <PopUpForm />
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
