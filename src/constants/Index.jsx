import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaVk } from "react-icons/fa";

import { v4 } from "uuid";

import BannerImg1 from "/img/BannerWrap/banner1.png";
import BannerImg2 from "/img/BannerWrap/banner2.png";
import BannerImg3 from "/img/BannerWrap/banner3.jpg";
import BannerImg4 from "/img/BannerWrap/banner4.jpg";
import BannerImg5 from "/img/BannerWrap/banner5.jpg";

import bgImg from "/img/card.png";

/* Допы */
import imbirImg from "/img/Dops/imbir.png";
import soySauce from "/img/Dops/soySauce.png";
import wasabi from "/img/Dops/wasabi.png";
import milkaWasabiSauce from "/img/Dops/milkaWasabiSauce.png";

import rublesIcon from "/img/icons/rubles.svg";
import pastCurrencyIcon from "/img/icons/pastCurrency.svg";

import basketIcon from "/img/icons/basketIcon.svg";
import basketIconHover from "/img/icons/basketIconHover.svg";

/* Роллы */
import cucumberRoll from "/img/Rolls/cucumberRoll.png";
import avocadoRoll from "/img/Rolls/avocadoRoll.png";
import creamySesameSeeds from "/img/Rolls/creamySesameSeeds.png";
import eelRoll from "/img/Rolls/eelRoll.png";
import tunaRoll from "/img/Rolls/tunaRoll.png";
import SalmonRoll from "/img/Rolls/SalmonRoll.png";
import CreamyTobiko from "/img/Rolls/CreamyTobiko.png";
import Philadelphia from "/img/Rolls/Philadelphia.png";
import PhiladelphiaLite from "/img/Rolls/PhiladelphiaLite.png";
import PhiladelphiaCheese from "/img/Rolls/PhiladelphiaCheese.png";
import PhiladelphiaUnagi from "/img/Rolls/PhiladelphiaUnagi.png";
import UnagiLite from "/img/Rolls/UnagiLite.png";
import California from "/img/Rolls/California.png";
import CaliforniaWithSalmon from "/img/Rolls/CaliforniaWithSalmon.png";
import CaliforniaWithShrimp from "/img/Rolls/CaliforniaWithShrimp.png";
import SyakeKani from "/img/Rolls/SyakeKani.png";
import Maguro from "/img/Rolls/Maguro.png";
import Strawberry from "/img/Rolls/Strawberry.png";
import Tama from "/img/Rolls/Tama.png";
import SpicyWithShrimpAndAvocado from "/img/Rolls/SpicyWithShrimpAndAvocado.png";
import SpicySalmon from "/img/Rolls/SpicySalmon.png";
import SpicyTuna from "/img/Rolls/SpicyTuna.png";
import SpicyWithEel from "/img/Rolls/SpicyWithEel.png";
import SpicyWithSnowCrabAndCucumber from "/img/Rolls/SpicyWithSnowCrabAndCucumber.png";
import Tutsurai from "/img/Rolls/Tutsurai.png";
import Canada from "/img/Rolls/Canada.png";
import Indesi from "/img/Rolls/Indesi.png";

/* Запеченные роллы */
import WithASnowCrab from "/img/BakedRolls/WithASnowCrab.png";
import WithShrimp from "/img/BakedRolls/WithShrimp.png";
import WithSalmon from "/img/BakedRolls/WithSalmon.png";
import WithAnEel from "/img/BakedRolls/WithAnEel.png";
import MurugaiOr from "/img/BakedRolls/MurugaiOr.png";
import Kaniyaki from "/img/BakedRolls/Kaniyaki.png";
import AChickenBag from "/img/BakedRolls/AChickenBag.png";
import TheSalamander from "/img/BakedRolls/TheSalamander.png";
import BackedTutsurai from "/img/BakedRolls/Tutsurai.png";

export const cityName = [
  {
    id: 1,
    name: "Москва",
  },
  {
    id: 2,
    name: "Санкт-Петербург",
  },
  {
    id: 3,
    name: "Казань",
  },
  {
    id: 4,
    name: "Новосибирск",
  },
  {
    id: 5,
    name: "Елабуга",
  },
  {
    id: 6,
    name: "Одинцово",
  },
  {
    id: 7,
    name: "Мегион",
  },
  {
    id: 8,
    name: "Нижневартовск",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://www.instagram.com/",
    icon: <RiInstagramFill />,
  },
  {
    id: 2,
    url: "https://www.youtube.com/@sacazidal",
    icon: <FaYoutube />,
  },
  {
    id: 3,
    url: "https://vk.com/rustamzagitov02",
    icon: <FaVk />,
  },
];

export const menuItems = [
  {
    id: 1,
    title: "Роллы",
  },
  {
    id: 2,
    title: "Запеченные роллы",
  },
  {
    id: 3,
    title: "Горячие роллы",
  },
  {
    id: 4,
    title: "Сеты",
  },
  {
    id: 5,
    title: "Закуски",
  },
  {
    id: 6,
    title: "Wok",
  },
  {
    id: 7,
    title: "Пицца",
  },
  {
    id: 8,
    title: "Напитки",
  },
];

export const mainBanners = [
  {
    id: 1,
    img: BannerImg1,
  },
  {
    id: 2,
    img: BannerImg2,
  },
  {
    id: 3,
    img: BannerImg3,
  },
  {
    id: 4,
    img: BannerImg4,
  },
  {
    id: 5,
    img: BannerImg5,
  },
];

export const dopItems = [
  {
    id: v4(),
    title: "Соевый соус",
    weigth: "50 гр. | 115 ккал",
    bgImg: bgImg,
    itemImg: soySauce,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 19,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Васаби",
    weigth: "10 гр. | 115 ккал",
    bgImg: bgImg,
    itemImg: wasabi,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 19,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Имбирь",
    weigth: "30 гр. | 115 ккал",
    bgImg: bgImg,
    itemImg: imbirImg,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 25,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Соус милка-васаби",
    weigth: "50 гр. | 115 ккал",
    bgImg: bgImg,
    itemImg: milkaWasabiSauce,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 59,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const rollItems = [
  {
    id: v4(),
    title: "Ролл с огурцом",
    structure: "Рис, огурец, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "95 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: cucumberRoll,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 109,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Ролл с авокадо",
    structure: "Рис, авокадо, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "100 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: avocadoRoll,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 139,
    pastPrice: 149,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Сливочный кунжут",
    structure:
      "Творожный сыр, рис, огурец, икра масаго, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "180 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: creamySesameSeeds,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 149,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Ролл с угрём",
    structure: "Рис, угорь, огурец, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "110 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: eelRoll,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 189,
    pastPrice: 209,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Ролл с тунцом",
    structure: "Рис, тунец, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "95 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: tunaRoll,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 159,
    pastPrice: 179,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Ролл с лососем",
    structure: "Рис, лосось, огурец, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "100 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SalmonRoll,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 179,
    pastPrice: 209,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Сливочный тобико",
    structure:
      "Творожный сыр, рис, огурец, икра масаго нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "195 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: CreamyTobiko,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 219,
    pastPrice: 239,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Филадельфия",
    structure: "Лосось, рис, огурец, творожный сыр, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "205 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Philadelphia,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 309,
    pastPrice: 379,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Филадельфия лайт",
    structure: "Лосось, рис, огурец, творожный сыр, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "190 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: PhiladelphiaLite,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 239,
    pastPrice: 249,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Филадельфия чиз",
    structure: "Лосось, рис, творожный сыр, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "205 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: PhiladelphiaCheese,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 349,
    pastPrice: 369,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Филадельфия унаги",
    structure:
      "Угорь, унаги, кунжут, рис, огурец, творожный сыр, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "215 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: PhiladelphiaUnagi,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 329,
    pastPrice: 369,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Унаги лайт",
    structure:
      "Рис, творожный сыр, огурец, угорь, нори, кунжут, унаги.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "200 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: UnagiLite,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 259,
    pastPrice: 279,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Калифорния",
    structure:
      "Снежный краб, рис, огурец, авокадо, икра масаго, японский майонез, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: California,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 249,
    pastPrice: 269,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Калифорния с лососем",
    structure:
      "Лосось, рис, огурец, авокадо, икра масаго, японский майонез, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "200 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: CaliforniaWithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 329,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Калифорния с креветкой",
    structure:
      "Креветка, рис, огурец, авокадо, икра масаго,японский майонез, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: CaliforniaWithShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 299,
    pastPrice: 329,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Сяке Кани",
    structure:
      "Рис, нори, лосось, огурец, сыр Виола, снежный краб.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "190 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SyakeKani,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 259,
    pastPrice: 299,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Магуро",
    structure:
      "Рис, творожный сыр, огурец, тунец, лосось, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "225 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Maguro,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 359,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Клубничный",
    structure:
      "Рис, нори, лосось, икра масаго, творожный сыр, клубника.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "215 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Strawberry,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 399,
    pastPrice: 439,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Тама",
    structure:
      "Рис нори, сыр творожный, огурец, угорь, лосось, икра масаго.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "230 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Tama,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 379,
    pastPrice: 429,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Спайси с креветкой и авокадо",
    structure: "Рис, нори, креветка, авокадо, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "140 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SpicyWithShrimpAndAvocado,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 179,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Спайси с лососем",
    structure:
      "Рис, нори, лосось, кунжут, огурец, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "140 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SpicySalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 229,
    pastPrice: 259,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Спайси с тунцом",
    structure:
      "Рис, нори, тунец, кунжут, огурец, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "140 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SpicyTuna,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 179,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Спайси с угрём",
    structure:
      "Рис, нори, угорь, кунжут, огурец, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "140 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SpicyWithEel,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 229,
    pastPrice: 249,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Спайси со снежным крабом и огурцом",
    structure:
      "Рис, нори, снежный краб, огурец, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "150 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: SpicyWithSnowCrabAndCucumber,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 149,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Туцурай",
    structure:
      "Рис, нори, лосось, угорь, авокадо, сыр творожный, икра масаго, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Tutsurai,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 349,
    pastPrice: 389,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Канада",
    structure:
      "Лосось, рис, авокадо, креветка, творожный сыр, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "235 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Canada,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 399,
    pastPrice: 459,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Индеси",
    structure:
      "Рис, нори, Виола, ветчина из индейки, салат айсберг,  перец болгарский, соус чили, кунжут.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Indesi,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 199,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const bakedRollItems = [
  {
    id: v4(),
    title: "С снежным крабом",
    structure:
      "Соус фирменный, нори, снежный краб, рис, огурцы, икра масаго, лосось.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "185 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithASnowCrab,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 259,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "C креветкой",
    structure:
      "Cоус фирменный, нори, креветка, рис, огурцы масаго, творожный сыр, авокадо, лосось.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "190 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 319,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "C лососем",
    structure:
      "Рис, креветка, соус фирменный, икра масаго, огурцы, лосось, нори, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "190 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 319,
    pastPrice: 359,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "C угрём",
    structure:
      "Рис, сыр сливочный, угорь, соус фирменный, огурцы, креветка, нори.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "185 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithAnEel,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 319,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Муругай Яки",
    structure:
      "Рис, мидии, соус фирменный, огурцы, снежный краб, нори, терияки, чернослив, лук жареный, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "215 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: MurugaiOr,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 249,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Канияки",
    structure:
      "Рис, угорь, фирменный соус, авокадо, снежный краб, нори, лук жареный, терияки, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "190 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Kaniyaki,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 309,
    pastPrice: 339,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Сумоку Чикен",
    structure:
      "Рис, творожный сыр, курица, соус фирменный, огурец, чернослив, нори, лук жареный, мидии.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "230 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: AChickenBag,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 249,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Саламандер",
    structure:
      "Рис, творожный сыр, огурец, снежный краб, нори, лосось.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "220 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: TheSalamander,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 319,
    pastPrice: 349,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Туцурай",
    structure:
      "Рис, нори, лосось, угорь, авокадо, сыр творожный, икра масаго, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: BackedTutsurai,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 419,
    pastPrice: 499,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const hotRolls = [
  {
    id: v4(),
    title: "Эби Фурай",
    structure:
      "Рис, нори, авокадо, лосось, креветки, творожный сыр, икра масаго, кляр, панировка.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "205 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 289,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Восходящее солнце",
    structure:
      "Рис, нори, кимчи, угорь, креветки, огурец, кляр, панировка, кимчи соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "255 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 319,
    pastPrice: 349,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Хотосамон",
    structure:
      "Рис, нори, лосось, креветка, тунец, кляр, панировка, огурцы, творожный сыр.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "220 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 220,
    pastPrice: 299,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Утсубо",
    structure:
      "Рис, нори, лосось, авокадо, икра масаго, кляр, панировка, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "220 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 299,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Канетцу",
    structure:
      "Рис, нори, лосось, огурец, снежный краб, кляр, панировка, творожный сыр, спайси соус.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "220 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 269,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Инпура",
    structure:
      "Рис, нори, виола, ветчина из индейки, салат айсберг, перец болгарский, жаренный лук, кляр.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 30 гр., имбирь 10 гр., васаби 5 гр.",
    weigth: "280 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: WithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 249,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];
