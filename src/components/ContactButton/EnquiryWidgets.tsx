"use client";

import { contact } from "@/utils/constent";
import { usePathname } from "next/navigation";
import Script from "next/script";
import PopUpForm from "../pop-up/PopUpForm";
import Whatsapp from "./WhatsApp";

export default function EnquiryWidgets() {
  const pathname = usePathname();

  if (pathname.replace(/\/$/, "") === "/landing-page") {
    return <Whatsapp whatsAppNumber={contact.phone[1]} />;
  }

  return (
    <>
      <Whatsapp whatsAppNumber={contact.phone[1]} />
      <PopUpForm />
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
    </>
  );
}
