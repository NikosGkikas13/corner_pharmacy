import { aboutUsDataEN, aboutUsDataGR } from "./data/aboutUsData";
import { barData } from "./data/barData";
import { contactUsEN, contactUsGR } from "./data/contactUsData";
import { footerDataEN, footerDataGR } from "./data/footerData";
import {
  homeDataEN,
  homeDataGR,
  productsEN,
  productsGR,
  servicesEN,
  servicesGR,
} from "./data/homeData";
import navDataEN, { navDataGR } from "./data/navData";
import en from "./images/united-kingdom.png";
import gr from "./images/greece.png";
export const DATAEN = [
  { lang: "en" },
  { about: aboutUsDataEN },
  { bar: barData },
  { contact: contactUsEN },
  { footer: footerDataEN },
  { home: homeDataEN },
  { nav: navDataEN },
  { services: servicesEN },
  { products: productsEN },
  { img: en },
];
export const DATAGR = [
  { lang: "gr" },
  { about: aboutUsDataGR },
  { bar: barData },
  { contact: contactUsGR },
  { footer: footerDataGR },
  { home: homeDataGR },
  { nav: navDataGR },
  { services: servicesGR },
  { products: productsGR },
  { img: gr },
];
