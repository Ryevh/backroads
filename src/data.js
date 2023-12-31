// SETUP REFERENCE TO THE STATIC IMAGES TO ACCESS/USE IT HERE
import tour1 from "../src/assets/images/tour-1.jpeg";
import tour2 from "../src/assets/images/tour-2.jpeg";
import tour3 from "../src/assets/images/tour-3.jpeg";
import tour4 from "../src/assets/images/tour-4.jpeg";
import tour5 from "../src/assets/images/tour-5.jpeg";
import tour6 from "../src/assets/images/tour-6.jpeg";

// DEFINE & EXPORT VARIABLE OBJECT WITH ARRAY DATA
export const pageLinks = [
  // DEFINE OBJECT ITEMS WITH ITS KEY/VALUE PAIR PROPERTIES
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// DEFINE & EXPORT VARIABLE OBJECT WITH ARRAY DATA
export const socialLinks = [
  // DEFINE OBJECT ITEMS WITH ITS KEY/VALUE PAIR PROPERTIES
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

// DEFINE & EXPORT VARIABLE OBJECT WITH ARRAY DATA
export const services = [
  // DEFINE OBJECT ITEMS WITH ITS KEY/VALUE PAIR PROPERTIES
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet life ...",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet life ...",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amaziing comfort",
    text: "Lorem ipsum dolor sit amet life ...",
  },
];

// DEFINE & EXPORT VARIABLE OBJECT WITH ARRAY DATA
export const tours = [
  // DEFINE OBJECT ITEMS WITH ITS KEY/VALUE PAIR PROPERTIES
  {
    id: 1,
    image: tour1,
    date: "august 25th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit ...",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "august 25th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit ...",
    location: "china",
    duration: 5,
    cost: 4100,
  },
  {
    id: 3,
    image: tour3,
    date: "september 16th, 2023",
    title: "minessota",
    info: "Lorem ipsum dolor sit ...",
    location: "usa",
    duration: 2,
    cost: 1100,
  },
  {
    id: 4,
    image: tour4,
    date: "october 20th, 2023",
    title: "Kyiv",
    info: "Lorem ipsum dolor sit ...",
    location: "ukraine",
    duration: 7,
    cost: 5100,
  },
  {
    id: 5,
    image: tour5,
    date: "November 25th, 2023",
    title: "Berlin",
    info: "Lorem ipsum dolor sit ...",
    location: "germany",
    duration: 6,
    cost: 2100,
  },
  {
    id: 6,
    image: tour6,
    date: "December 25th, 2023",
    title: "paris",
    info: "Lorem ipsum dolor sit ...",
    location: "france",
    duration: 6,
    cost: 2100,
  },
];
