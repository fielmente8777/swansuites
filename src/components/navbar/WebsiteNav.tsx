"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WebsiteNavData } from "./navData";

const WebsiteNav = () => {
  const pathName = usePathname();
  return (
    <header className={`max_screen_width  `}>
      <nav className="flex items-center justify-between py-4 max_width">
        <Link href="/" className="block relative md:w-50 w-40  aspect-4/1.25">
          <Image src={WebsiteNavData.logo} alt="logo" fill className="object-cover" />
        </Link>
        <ul className="xl:flex hidden items-center gap-4">
          {WebsiteNavData.links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`text-primary p-2 border-b text-lg duration-300 ease-in-out hover:border-secondary ${
                  pathName === item.href
                    ? "border-secondary"
                    : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
       
        {/* <button className="lg:hidden" onClick={() => setIsMobileNavOpen(true)}>
          <IoMdMenu className="text-3xl" />
          <span className="sr-only">menu</span>
        </button> */}
      </nav>
      {/* <MobileNav /> */}
    </header>
  );
};

export default WebsiteNav;
