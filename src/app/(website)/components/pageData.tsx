import { contact } from "@/utils/constent";
import {
  AllDayDinningIcon,
  BedIcon,
  CoffeeIcon,
  DailyHousekeepingIcon,
  InternetIcon,
  TelevisionIcon,
  TreeIcon,
  WifiIcon,
  WorkAbodeLoungeIcon,
} from "@/utils/icons";
import { title } from "process";

export const HomePageData = {
  hero: {
    images: ["/banner.png"],
    badge: "Award-winning HOTEL",
    title:
      "A Smart Way to Stay in Gachibowli, <i class='text-secondary'>Hyderabad</i>",
    description:
      "Modern rooms, thoughtful amenities, and the warmth of Swan hospitality designed for business and leisure travelers.",
    bookingBenefits:
      "<span class='text-primary'>Save 15%</span> when you book direct · No prepayment · Free cancellation",
  },

  valueProposition: {
    tag: "ABOUT SWAN SUITES",
    title: "A Smart Way to  <i class='text-primary'>Stay!</i>",
    description:
      "With an experience of 20 years focussed on giving the best in guest services, Swan Suites Gachibowli is a professionally managed business and premium hotel in Hyderabad. The rooms are appointed in moderness, with ultra high speed dedicated internet of 1000 mbps, Smart / Android TV’s, high thread count white linen for smoothness, and all the trappings of a luxurious stay in Gachibowli. The WORKABODE concept of co-working space is unique to SwanSuites and futuristic business hotel concept. Our clients include many Fortune 500 companies, MNC’s, Banks, IT and ITeS, etc. We also cater to retail and business travel.",
    image: "/about-img.png",
    actions: [
      { label: "CALL NOW", href: contact.callCta },
      { label: "ENQUIRE NOW", href: contact.WhatsappCta },
      { label: "BOOK NOW", href: "#form" },
    ],
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
    ],
    actions: [
      // { label: "CALL NOW", href: contact.callCta },
      { label: "CHAT WITH US", href: contact.WhatsappCta },
      // { label: "BOOK NOW", href: "#form" },
    ],
  },

  accommodations:{
    title:"EXPLORE OUR LOCATIONS",
     subtitle: "Luxury Stays that Lives like <i class='text-primary'>Home!</i>",
     description:"Discover Swan Suites in Hyderabad's prime locations, close to IT hubs, business districts, shopping, and entertainment. Experience premium comfort and convenience at every stay.",

     rooms: [
      {
        images: ["/1st.jpg"],
        title: "Gachibowli Hotel",
        amenities: [
          { icon: <TreeIcon /> },
          { icon: <BedIcon /> },
          { icon: <InternetIcon /> },
        ],
        popUpAmenities: [
          { name: "Air Conditioning (Split ACs - COVID Safe)" },
          { name: "Large Screen SMART/Android LED TV" },
          { name: "24 Hrs Hot/Cold Water" },
          { name: "Packaged Drinking Water (Complimentary)" },
          { name: "Electronic Key Card" },
          { name: "Housekeeping Service (Once Daily)" },
          { name: "Onsite Laundrette (Complimentary)" },
          { name: "Intercom" },
          { name: "Ergonomic Chair with Study Desk" },
          { name: "Lobby Seating Area" },
          { name: "Public Telephone with Operator Assistance" },
          { name: "Mini Fridge" },
          { name: "Iron and Iron Board" },
          { name: "Hair Dryer" },
          { name: "Modern Wardrobe and Storage" },
          { name: "8 Charging Points" },
          { name: "Mobility Accessible Rooms" },
          { name: "First Aid Supplies" },
          { name: "Valet Dry-Cleaning (Outsourced)" },
          { name: "Anti-Allergic Pillows" },
          { name: "CCTV Surveillance" },
          { name: "24-Hour Security" },
          { name: "Newspaper (On Request)" },
          { name: "Luggage Assistance (On Request)" },
          { name: "Thermal Screening" },
          { name: "Personal Hand Sanitizers" },
          { name: "Doctor on Call" },
        ],
        // description:
        //   "Unwind in a spacious Premium King Room featuring a plush king-size bed, elegant interiors, and modern amenities designed for ultimate comfort.",
        actions: [
          { label: "EXPLORE HOTEL", href: "/locations/gachibowli-hotel/" },
          // { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          // { label: "BOOK NOW", href: "#form" },
        ],
      },
      {
        images: ["/2nd.jpg"],
        title: "Madhapur Apartment",
         amenities: [
          { icon: <TreeIcon /> },
          { icon: <BedIcon /> },
          { icon: <InternetIcon /> },
        ],
        popUpAmenities: [
          { name: "Air Conditioning (Split ACs - COVID Safe)" },
          { name: "Large Screen SMART/Android LED TV" },
          { name: "24 Hrs Hot/Cold Water" },
          { name: "Packaged Drinking Water (Complimentary)" },
          { name: "Electronic Key Card" },
          { name: "Housekeeping Service (Once Daily)" },
          { name: "Onsite Laundrette (Complimentary)" },
          { name: "Intercom" },
          { name: "Ergonomic Chair with Study Desk" },
          { name: "Lobby Seating Area" },
          { name: "Public Telephone with Operator Assistance" },
          { name: "Mini Fridge" },
          { name: "Iron and Iron Board" },
          { name: "Hair Dryer" },
          { name: "Modern Wardrobe and Storage" },
          { name: "8 Charging Points" },
          { name: "Mobility Accessible Rooms" },
          { name: "First Aid Supplies" },
          { name: "Valet Dry-Cleaning (Outsourced)" },
          { name: "Anti-Allergic Pillows" },
          { name: "CCTV Surveillance" },
          { name: "24-Hour Security" },
          { name: "Newspaper (On Request)" },
          { name: "Luggage Assistance (On Request)" },
          { name: "Thermal Screening" },
          { name: "Personal Hand Sanitizers" },
          { name: "Doctor on Call" },
        ],
        // description:
        //   "Designed for colleagues, friends, or family travelers, the Premium Twin Room features two comfortable single beds and thoughtfully curated modern amenities.",
        actions: [
          { label: "EXPLORE APARTMENT", href: "/locations/madhapur-apartment/" },
          // { label: "ENQUIRE NOW", href: contact.WhatsappCta },
          // { label: "BOOK NOW", href: "#form" },
        ],
      },
    ],

  },
  gallery: {
    // title: "A look inside",
    // subtitle: "Crafted for comfort",
    // listTitle: "Locations & <i class='text-primary'>Attractions</i>",
    // list: [
    //   "Close to Financial District, Raidurg IT Zone, Kondapur & IKEA",
    //   "100m to restaurants, eateries, continental bakeries, departmental stores and shopping",
    //   "200 m to Airport ORR (Outer Ring Road access)",
    //   "On the Gachibowli Main Road and besides the Gachibowli Flyover",
    //   "400m to Multiplex and Malls",
    //   "200m to CARE Hospitals",
    //   "300m to Cyberabad Police Commissionerate",
    //   "1.5 km to IKEA",
    // ],
    images: [
      "/gallery-1.png",
      "/gallery-2.png",
      "/gallery-3.png",
      // "/gallery-4.png",
      // "/gallery-5.png",
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
