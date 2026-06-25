import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};

export const WebsiteNavData = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "/home/" },
    { label: "About", href: "/about-us/" },
    {
      label: "Locations",
      href: "/locations/",
      subLinks: [
        {
          location: "Hyderabad",
          label: "Gachibowli Hotel",
          href: "/locations/gachibowli-hotel/",
          // sub: "Boutique stays in the heart of the world’s oldest living city",
        },
        {
          label: " Madhapur Apartment",
          href: "/locations/madhapur-apartment/",
          // sub: "Boutique stays in the heart of the world’s oldest living city",
        },
      ],
    },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact-us/" },
  ],
  buttons: [{ label: "BOOK NOW", href: contact.WhatsappCta }],
};
