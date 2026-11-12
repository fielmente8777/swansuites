import Image from "next/image";
import Link from "next/link";
import { navData } from "./navData";
import { contact } from "@/utils/constent";
import LinkButton from "../buttons/LinkButton";

const LandingNavbar = () => {
  return (
    <header className="max_screen_width w-full">
      {/* TOP BAR */}
      <nav className="max_width">
        <div className="flex py-4 w-full items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <div className="relative h-10 w-32 md:h-12 md:w-44">
              <Image
                src={navData.logo}
                alt="The Rudraksh Retreat"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <LinkButton
            href={contact.callCta}
            label="Call Now"
            aria-label={`Call Swan Suites at ${contact.phone[0].trim()}`}
            callIcon
            className="min-h-12 shrink-0 whitespace-nowrap rounded-lg border-none bg-[#a43e14] font-semibold text-white"
          />
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
