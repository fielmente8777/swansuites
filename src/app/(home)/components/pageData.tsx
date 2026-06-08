import { contact } from "@/utils/constent";
import {
  AllDayDinningIcon,
  CoffeeIcon,
  DailyHousekeepingIcon,
  MiniBarIcon,
  TelevisionIcon,
  WorkAbodeLoungeIcon,
} from "@/utils/icons";

export const swanSuitesPageData = {
  hero: {
    images: ["/banner.png"],
    badge: "Award-winning · Hyderabad",
    title: "Your Corporate Stay, <i class='text-secondary'>Perfected</i>",
    description:
      "Spacious 2,800 sq.ft serviced apartments in the heart of Hitech City & Gachibowli, for the business traveller who refuses to compromise.",
    bookingBenefits:
      "<span class='text-primary'>Save 15%</span> when you book direct · No prepayment · Free cancellation",
  },

  valueProposition: {
    tag: "Spacious · Central · Value",
    title: "More space. More serenity. <i class='text-primary'>Less spend.</i>",
    description:
      "The most luxurious apartments in Hitech City, located on the main road of the Central Business District. Walking distance to malls, multiplexes, restaurants and supermarkets. 5-star comfort at a fraction of the price.",
    image: "/about-img.png",
    actions: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  features: {
    title: "Why Swan Suites",
    subtitle: "Luxury that lives like home",
    description:
      "Every detail, from the linen to the lounge, designed for travellers who stay longer and expect more.",
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
    ],
    actions: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  accommodations: {
    title: "Our <i>Accommodations</i>",
    rooms: [
      {
        images: ["/room-1.png"],
        title: "Executive Room",
        amenities: [
          { name: "Tea/Coffee Maker", icon: <CoffeeIcon /> },
          { name: "Television", icon: <TelevisionIcon /> },
          { name: "Mini Bar", icon: <MiniBarIcon /> },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        actions: [
          { label: "CALL NOW", href: contact.callCta },
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        images: ["/room-2.png"],
        title: "Luxury Room",
        amenities: [
          { name: "Tea/Coffee Maker", icon: <CoffeeIcon /> },
          { name: "Television", icon: <TelevisionIcon /> },
          { name: "Mini Bar", icon: <MiniBarIcon /> },
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        actions: [
          { label: "CALL NOW", href: contact.callCta },
          { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          { label: "BOOK NOW", href: "#form" },
        ],
      },
    ],
  },

  gallery: {
    title: "A look inside",
    subtitle: "Crafted for comfort",
    images: [
      "/gallery-1.png",
      "/gallery-2.png",
      "/gallery-3.png",
      "/gallery-4.png",
      "/gallery-5.png",
    ],
    actions: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
  },

  clients: {
    title: "Trusted by India's Leading Organisations",
    logos: [
      "THOMSON",
      "amazon",
      "DELOITTE",
      "TCS",
      "CGI1",
      "THOMAS-COOK",
      "HITEX",
      "HICC",
      "MICROSOFT",
      "NOVARTIS",
      "KLAY",
      "DIVIS",
      "HCL",
      "MAHINDRA",
      "CSC",
      "ORACLE",
    ],
  },

  testimonials: {
    title: "Guest stories",
    subtitle: "Loved by long-stay travellers",
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
