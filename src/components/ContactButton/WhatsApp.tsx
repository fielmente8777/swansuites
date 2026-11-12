"use client";
import { enCodeText } from "@/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string }) {
  const pathName = usePathname();
  const onLandingPage = pathName.replace(/\/$/, "") === "/landing-page";

  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <div className={`fixed left-4 z-20 cursor-pointer lg:left-3 ${onLandingPage ? "bottom-10" : "bottom-24"}`}>
      <Link
        href={`https://wa.me/${whatsAppNumber.replace(/\D/g, "")}?text=${enCodeText}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
