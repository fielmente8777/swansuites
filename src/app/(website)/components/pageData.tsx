import { contact } from "@/utils/constent";
import {
  AllDayDinningIcon,
  BedIcon,
  DailyHousekeepingIcon,
  InternetIcon,
  TreeIcon,
  WorkAbodeLoungeIcon,
} from "@/utils/icons";

export const HomePageData = {
  hero: {
    images: ["/banner.png"],
    badge: "Award-winning HOTEL",
    title:
      "All <i class='text-primary'>Amenities</i> You Need From A Home Away From <i class='text-primary'>Home!</i>",
    description:
      "Modern rooms, thoughtful amenities, and the warmth of Swan hospitality designed for business and leisure travelers.",
    bookingBenefits:
      "<span class='text-primary'>Save 15%</span> when you book direct · No prepayment · Free cancellation",
  },

  valueProposition: {
    tag: "WELCOME TO SWAN SUITES",
    title: "A Smart Way to  <i class='text-primary'>Stay!</i>",
    description: [
      "Since the last 15 years Swan Suites is one of the biggest provider of Suites to the Corporates in the Hitech City, Hyderabad with its well known motto of SERVICE WITH A SMILE.",

      "We offer you great choice to stay. A premium Business Hotel in Gachibowli.",

      "Swan Suites is a professionally managed company, offering temporary housing, extended stay, and short long term accommodation. Our clients include many Fortune 500 companies, MNC’s, Banks, IT and ITeS, etc. We also cater to retail and business travel business. Companies and individuals save upto 50% on their hotel bill by choosing to accommodate their guests at Swan Suites.",

      "Easily accessible and located in the IT hub of Hyderabad.",
    ],
    image: "/about-img.png",
    actions: [
      { label: "Know More About Us", href: "/about-us" },
    ],
    paragraph:
      "Hyderabad’s Renowed Hotels. Homely comfort with Best in Class Facilities Located in Hyderabad’s IT Hub.",
  },

  features: {
    title: "Why Swan Suites",
    subtitle: "Luxury that Lives like <i class='text-primary'>Home!</i>",
    description:
      "Swan Suites offers all the conveniences of a modern design with the traditional service oriented living.",
    items: [
      {
        icon: <WorkAbodeLoungeIcon />,
        title: "Workabode Lounge",
        description:
          "Dedicated co-working space, meeting rooms & high-speed Wi-Fi, built into the property.",
      },
      {
        icon: <AllDayDinningIcon />,
        title: "All-Day Dining",
        description:
          "Hot buffet breakfast, lunch, dinner, even late-night snacks at our in-house coffee shop.",
      },
      {
        icon: <DailyHousekeepingIcon />,
        title: "Daily Housekeeping",
        description:
          "Professional housekeeping with our signature service-with-a-smile, every single day.",
      },
      // {
      //   icon: <DailyHousekeepingIcon />,
      //   title: "Spacious Apartment",
      //   description:
      //     "Experience 2800 sq. ft. of thoughtfully designed living with all the comforts of home.",
      // },
    ],
    actions: [
      { label: "Chat With Us", href: contact.WhatsappCta },
    ],
  },

  accommodations: {
    title: "EXPLORE OUR HOTEL IN GACHIBOWLI",
    subtitle: "Luxury Stay that Lives like <i class='text-primary'>Home!</i>",
    description:
      "Discover Swan Suites in Hyderabad's prime locations, close to IT hubs, business districts, shopping, and entertainment. Experience premium comfort and convenience at every stay.",

    rooms: [
      {
        location: "Gachibowli, Hyderabad",
        images: ["/1st.jpg"],
        title: "Gachibowli Hotel",
        amenities: [
          { icon: <TreeIcon /> },
          { icon: <BedIcon /> },
          { icon: <InternetIcon /> },
        ],

        actions: [
          { label: "Explore Hotel", href: "/locations/gachibowli-hotel/" },
        ],
      },
      // {
      //   location: "Madhapur, Hyderabad",
      //   images: ["/2nd.jpg"],
      //   title: "Madhapur Apartment",
      //   amenities: [
      //     { icon: <TreeIcon /> },
      //     { icon: <BedIcon /> },
      //     { icon: <InternetIcon /> },
      //   ],

      //   actions: [
      //     {
      //       label: "Explore Apartment",
      //       href: "/locations/madhapur-apartment/",
      //     },
      //   ],
      // },
    ],
  },
  gallery: {
    
    images: [
      "/gallery-1.png",
      "/gallery-2.png",
      "/gallery-4.png",
      "/gallery-3.png",
    ],
    
  },

  clients: {
    title: "Trusted by India's Leading Organisations",
    logos: [
      "/clients/amazon1.png",
      "/clients/CGI1.jpeg",
      "/clients/CSC.jpeg",
      "/clients/DELOITTE.jpeg",
      "/clients/DIVIS.jpeg",
      "/clients/HCL.jpeg",
      "/clients/HICC.jpeg",
      "/clients/HITEX.jpeg",
      "/clients/KLAY.jpeg",
      "/clients/MAHINDRA.jpeg",
      "/clients/MICROSOFT.jpeg",
      "/clients/NOVARTIS.jpeg",
      "/clients/ORACLE.jpeg",
      "/clients/TCS.jpeg",
      "/clients/THOMAS-COOK.jpeg",
      "/clients/THOMSON.jpeg",
    ],
  },

  titles: [
    "Business Conference/ Meetings Facilities",
    "Coffee Shop",
    "1000 mbps internet access points throughout the property",
    "Complimentary Breakfast",
    "WORABODE Co Working space (Optional)",
  ],
  testimonials: {
    title: "Guest stories",
    subtitle: "Loved by long-stay <i class='text-primary'>travellers</i>",
    testimonials: [
      {
        review:
          "Nice place to stay with all amenities.Parking under ground is available which might not be easily visible. Rooms are spacious with sufficient lights. Working table, refrigerator, locker , tea machine, ward robe google TV and internet WiFi available. Well designed and decorated room. Sockets for work adequately provided.",
        author: "Sunstar Ideas",
      },
      {
        review:
          "I had the pleasure of staying at this hotel for 15 days, and it truly became like a second home for me. The staff were incredibly kind, polite, and always ready to help. The level of hygiene and cleanliness was outstanding, which made the stay even more comfortable. The food was absolutely amazing — delicious and well-prepared every time. I especially appreciate how coordinated and attentive the entire team was throughout my stay. A heartfelt thank you to everyone for making my experience so memorable! Keep it up!! 👍",
        author: "Anish Sinha",
      },
      {
        review:
          "Absolutely Outstanding Stay – 5 Stars All the Way! From the moment we arrived, the service was impeccable. The staff greeted us with genuine warmth and professionalism, making us feel welcome and valued. The room was spotless, beautifully decorated. Every detail, from the plush bedding to the luxurious toiletries, was thoughtfully curated. It’s clear that guest satisfaction is their top priority. We’ll absolutely return and recommend it to anyone looking for an exceptional hotel experience.",
        author: "Arul R",
      },
      {
        review:
          "Stayed here for a quick business trip. The room was clean & quiet, the staffs were helpful throughout the stay which made is more comfortable. Housekeeping staff did a great job each day & breakfast had enough variety to keep things interesting. Nothing Fancy, but Solid and reliable. I would definitely recommend to anyone visiting the area. A Solid Choice for business travelers.",
        author: "Syed Aamir",
      },
      {
        review:
          "The hotel staff were very professional, polite, and attentive throughout my stay. They were always ready to assist with a smile, quick to respond to requests, and made the experience comfortable and welcoming. Their hospitality created a pleasant and memorable stay.",
        author: "Shivakumar Naik R S",
      },
      {
        review: `"I recently had the pleasure of staying at this hotel, and I must say it was an exceptional experience from start to finish! The food was delicious, the staff was friendly and attentive, and the cleanliness of the room and facilities was truly impressive. The staff went above and beyond to ensure my stay was comfortable and enjoyable. The food options were varied and mouth-watering, and the cleanliness was spotless. I would highly recommend this hotel to anyone looking for a great stay. 5 stars isn't enough - I'd give it 10 stars if I could! 😊" 5/5 stars."`,
        author: "Rohit Dubey",
      },
    ],
    actions: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },
};
