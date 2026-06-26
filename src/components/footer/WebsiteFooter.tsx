import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { contactInfos, webSiteFooterData } from "./footerdata";
import AccordionLinks from "./AccordionLinks";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width">
      <Container>
        <div className="grid md:py-12 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1fr_1.8fr] gap-4 md:gap-4">
          {/* logo */}
          <div
            className={`relative w-full lg:max-w-52 aspect-4/1 md:aspect-[4/1.7]`}
          >
            <Image
              src={webSiteFooterData.logo}
              alt="logo"
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>
          {webSiteFooterData.lists.slice(1, 4).map((list, index) => (
            <div key={index}>
              <h2 className="md:text-2xl font-primary font-light uppercase text-xl mb-4">
                {list.title}
              </h2>
              <ul className={`flex flex-col gap-2`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 md:text-[1.1rem]  ${index === 3 && suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    {item.icon && (
                      <span
                        className={`mt-px ${
                          index === 1
                            ? "text-secondary flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                            : "inline-block"
                        }`}
                      >
                        {item.icon}
                        <span className="sr-only">{item.label}</span>
                      </span>
                    )}

                    {item?.title && (
                      <span className="md:text-lg inline-block capitalize">
                        {item.title}
                      </span>
                    )}
                    <Link
                      target={item.href.includes("https") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span className="">{item.label}</span>
                    </Link>
                    {item.label2 && <span className="-ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-8"
                      >
                        <span>{item.label2}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="">
            {contactInfos.map((list, index) => (
              <AccordionLinks key={index} {...list} />
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white bg-dark">
        <Container className="py-4">
          <div className="flex max-md:flex-col items-center justify-center gap-2 text-white">
            {" "}
            <p className="">© {new Date().getFullYear()} Corbett The Grand</p>
            <span className="md:block hidden">|</span>
            <p className="">All Rights Reserved</p>
            <span className="md:block hidden">|</span>
            <p className="">
              Powered by{" "}
              <Link
                href="https://fielmente.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Fielmente
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;
