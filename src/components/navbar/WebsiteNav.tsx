"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WebsiteNavData } from "./navData";
import { FillDropDownIcon } from "@/utils/icons";
import { relative } from "path";

const WebsiteNav = () => {
  const pathName = usePathname();
  return (
    <header className={`max_screen_width  `}>
      <nav className="flex items-center justify-between py-4 max_width">
        <Link href="/" className="block relative md:w-50 w-40  aspect-4/1.25">
          <Image
            src={WebsiteNavData.logo}
            alt="logo"
            fill
            className="object-cover"
          />
        </Link>
        <ul className="relative xl:flex hidden items-center gap-4">
          {WebsiteNavData.links.map((item, index) => (
            <li className=" relative nav" key={index}>
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
              {item.subLinks && (
                <span className="nav-1 backdrop-blur-md">
                  {item.subLinks.map((subLink, subIndex) => {
                    return (
                      <span
                        className="relative group nav-2"
                        key={subIndex + "sub"}
                      >
                        <Link
                          href={subLink.href ? subLink.href : "#"}
                          className={`w-full tracking-wider py-2 px-4 flex flex-col gap-1 group font-bold text-sm text-dark ${pathName === subLink.href ? "bg-secondary !text-white" : ""}`}
                        >
                          <span className="uppercase"> {subLink.label}</span>
                        </Link>
                      </span>
                    );
                  })}
                </span>
              )}
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
