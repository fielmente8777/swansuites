import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};

export const WebsiteNavData = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
    { label: "Locations", href: "/locations/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact-us/" },
  ],
  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};
