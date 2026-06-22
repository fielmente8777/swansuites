import { AboutPageProps } from "@/@types/type";
import { AboutIcon} from "@/utils/icons";

export const pageData: AboutPageProps = {
  aboutIntro: {
   icon: <AboutIcon/>,

    tag: "ABOUT SWAN SUITES",

    title: {
      first: "Swan Suites",
      highlightOne: "Hotels",
      middle: "and Service",
      highlightTwo: "Apartment!",
    },

    topDescription: [
      "Swan Suites Hotels and Service Apartment is a preferred choice of corporates for the last 15 years for their short and long stays. Over the years Swansuites has evolved over multiple properties in the IT Hub of Hyderabad.",

      "Located in the IT-Hub of Hyderabad, Swan Suites Hotel and Service Apartments consists of 120 fully comfortably furnished, equipped, well appointed, tastefully decorated serviced Suites that are sure to make your stay a pleasurable one. Graciously blending into the commercial and luxurious lifestyle, and embodying corporate flair, it is the last stop for long stay.",
    ],

    image: "/aboutbg.jpg",

    bottomDescription: [
      "Swan Suites Gachibowli is a Modern Business Hotel in the midst of the new CBD – Gachibowli. Opened in April 2021, it has a unique proposition. Smart Android TVs with a dedicated fibre optic 1000 mbps internet and Co-Working Lounge. Work and stay go hand in hand.",

      "Experience the privileges of being in close proximity to the city's business center, as well as one of the most luxurious and lively locales. Discover innumerable comforts that make it an ideal choice for the traveler, offering the best of both worlds – business and leisure. Its easy accessibility to the International Airport gives the location an edge for business travellers. Situated in the heart of Hyderabad, Swan Suites Hotel and Service Apartment is surrounded by various fine-dine restaurants, shopping vistas and an exuberant nightlife.",
    ],
  },

  whyUs: {
    topText:
    "We offer you great choices to stay. A premium Business Hotel in Gachibowli, a luxurious and spacious Serviced Apartment in Madhapur or simply a private Room.",

      image: "/aboutbg.jpg",

      icon: <AboutIcon/>,

      tag: "WHY US",

      title: {
        first: "15 Years of",
        highlight: "Hospitality",
        last: "Excellence",
      },
      description: [
        "Since the past 15 years Swan Suites is one of the largest provider of Suites to the Corporates in Hitech City, Gachibowli and Madhapur, Hyderabad with its well known motto of SERVICE WITH A SMILE.",

        "Conveniently located near to AIG HOSPITAL GACHIBOWLI, Hyderabad we provide our services to guests and Patients undergoing treatment at AIG HOSPITAL GACHIBOWLI.",

        "Swan Suites is a professionally managed company, offering temporary housing, extended stay, and short long term accommodation. Our clients include many Fortune 500 companies, MNC’s, Banks, IT and ITeS, etc. We also cater to retail and business travel business. Companies and individuals save upto 50% on their hotel bill by choosing to accommodate their guests at Swan Suites. Located near AIG HOSPITAL which helps both patients and guests taking treatment at AIG HOSPITAL GACHIBOWLI HYDERABAD.",
      ],

      action: {
        label: "Chat With Us",
        href: "/contact-us",
      },
  },
  awards: {
  title: {
    first: "Awards &",
    highlight: "Accolades",
  },

  leftImage: "/award1.jpg",

  achievements: [
    {
      description:
        "Swan Suites is featured the book Follow every rainbow by author Rashmi Bansal based on 25 Women entrepreneurs in the country.",
    },
    {
      description:
        "Swan Suites is a finalist in CNBC Emerging Awards 2011.",
    },
    {
      description:
        "Member of Vital Voices-A US State Dept and Hillary Clinton initiative.",
    },
    {
      description:
        "Swan Suites is a recipient of Scholar ship from Goldman Sachs for the Directors Program -WEP and Business Advisory Services at ISB.",
    },
    {
      description:
        "Based on the work at Swan suites the founder owner was selected by the US State Department scholarship program in the US.",
    },
  ],

  rightImage: "/award2.jpg",
},
};
