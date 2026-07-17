import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

export const contactPageData = {
  banner: {
    title: "Contact Us",
    contacts: [
      {
        location: contact.locations.gachibowli.location,
        links: [
          {
            label: contact.locations.gachibowli.address,
            href: contact.locations.gachibowli.addressLink,
            icon: <FillLocationIcon />,
          },
          {
            label: contact.phone[0],
            href: "tel:" + contact.phone[0],
            icon: <FillCallIcon />,
          },
          {
            label: contact.email[0],
            href: "mailto:" + contact.email[0],
            label2: contact.email[1],
            href2: "mailto:" + contact.email[1],
            icon: <FillMailIcon />,
          },
        ],
      },
      // {
      //   location: contact.locations.madhapur.location,
      //   links: [
      //     {
      //       label: contact.locations.madhapur.address,
      //       href: contact.locations.madhapur.addressLink,
      //       icon: <FillLocationIcon />,
      //     },
      //     {
      //       label: contact.phone[0],
      //       href: "tel:" + contact.phone[0],
      //       icon: <FillCallIcon />,
      //     },
      //     {
      //       label: contact.email[0],
      //       href: "mailto:" + contact.email[0],
      //       label2: contact.email[1],
      //       href2: "mailto:" + contact.email[1],
      //       icon: <FillMailIcon />,
      //     },
      //   ],
      // },
    ],
  },
};
