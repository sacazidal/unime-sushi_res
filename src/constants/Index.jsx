import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaVk } from "react-icons/fa";

import { v4 } from "uuid";

import BannerImg1 from "/img/BannerWrap/banner1.webp";
import BannerImg2 from "/img/BannerWrap/banner2.webp";
import BannerImg3 from "/img/BannerWrap/banner3.webp";
import BannerImg4 from "/img/BannerWrap/banner4.webp";
import BannerImg5 from "/img/BannerWrap/banner5.webp";

import bgImg from "/img/card.webp";

import rublesIcon from "/img/icons/rubles.svg";
import pastCurrencyIcon from "/img/icons/pastCurrency.svg";

import basketIcon from "/img/icons/basketIcon.svg";
import basketIconHover from "/img/icons/basketIconHover.svg";

/* Роллы */
import cucumberRoll from "/img/Rolls/cucumberRoll.webp";
import avocadoRoll from "/img/Rolls/avocadoRoll.webp";
import creamySesameSeeds from "/img/Rolls/creamySesameSeeds.webp";
import eelRoll from "/img/Rolls/eelRoll.webp";
import tunaRoll from "/img/Rolls/tunaRoll.webp";
import SalmonRoll from "/img/Rolls/SalmonRoll.webp";
import CreamyTobiko from "/img/Rolls/CreamyTobiko.webp";
import Philadelphia from "/img/Rolls/Philadelphia.webp";
import PhiladelphiaLite from "/img/Rolls/PhiladelphiaLite.webp";
import PhiladelphiaCheese from "/img/Rolls/PhiladelphiaCheese.webp";
import PhiladelphiaUnagi from "/img/Rolls/PhiladelphiaUnagi.webp";
import UnagiLite from "/img/Rolls/UnagiLite.webp";
import California from "/img/Rolls/California.webp";
import CaliforniaWithSalmon from "/img/Rolls/CaliforniaWithSalmon.webp";
import CaliforniaWithShrimp from "/img/Rolls/CaliforniaWithShrimp.webp";
import SyakeKani from "/img/Rolls/SyakeKani.webp";
import Maguro from "/img/Rolls/Maguro.webp";
import Strawberry from "/img/Rolls/Strawberry.webp";
import Tama from "/img/Rolls/Tama.webp";
import SpicyWithShrimpAndAvocado from "/img/Rolls/SpicyWithShrimpAndAvocado.webp";
import SpicySalmon from "/img/Rolls/SpicySalmon.webp";
import SpicyTuna from "/img/Rolls/SpicyTuna.webp";
import SpicyWithEel from "/img/Rolls/SpicyWithEel.webp";
import SpicyWithSnowCrabAndCucumber from "/img/Rolls/SpicyWithSnowCrabAndCucumber.webp";
import Tutsurai from "/img/Rolls/Tutsurai.webp";
import Canada from "/img/Rolls/Canada.webp";
import Indesi from "/img/Rolls/Indesi.webp";

/* Запеченные роллы */
import WithASnowCrab from "/img/BakedRolls/WithASnowCrab.webp";
import WithShrimp from "/img/BakedRolls/WithShrimp.webp";
import WithSalmon from "/img/BakedRolls/WithSalmon.webp";
import WithAnEel from "/img/BakedRolls/WithAnEel.webp";
import MurugaiOr from "/img/BakedRolls/MurugaiOr.webp";
import Kaniyaki from "/img/BakedRolls/Kaniyaki.webp";
import AChickenBag from "/img/BakedRolls/AChickenBag.webp";
import TheSalamander from "/img/BakedRolls/TheSalamander.webp";
import BackedTutsurai from "/img/BakedRolls/Tutsurai.webp";

/* Горячие роллы */
import AbiFurai from "/img/HotRolls/AbiFurai.webp";
import TheRisingSun from "/img/HotRolls/TheRisingSun.webp";
import Hotosamon from "/img/HotRolls/Hotosamon.webp";
import Utsubo from "/img/HotRolls/Utsubo.webp";
import Kanetsu from "/img/HotRolls/Kanetsu.webp";
import Inpura from "/img/HotRolls/Inpura.webp";

/* Сеты */
import Kyoto from "/img/Sets/Kyoto.webp";
import Hokkaido from "/img/Sets/Hokkaido.webp";
import Sasha from "/img/Sets/Sasha.webp";
import Okinawa from "/img/Sets/Okinawa.webp";
import Sakhalin from "/img/Sets/Sakhalin.webp";
import Spicy from "/img/Sets/Spicy.webp";
import HighTech from "/img/Sets/HighTech.webp";
import Tokyo from "/img/Sets/Tokyo.webp";
import Sapporo from "/img/Sets/Sapporo.webp";
import HotJapan from "/img/Sets/HotJapan.webp";
import Itani from "/img/Sets/Itani.webp";
import Kansai from "/img/Sets/Kansai.webp";
import Samurai from "/img/Sets/Samurai.webp";
import Mini from "/img/Sets/Mini.webp";
import VegaMaki from "/img/Sets/VegaMaki.webp";
import Fujiyama from "/img/Sets/Fujiyama.webp";
import Meiji from "/img/Sets/Meiji.webp";
import Hiroshima from "/img/Sets/Hiroshima.webp";
import Yamato from "/img/Sets/Yamato.webp";
import TheRave from "/img/Sets/TheRave.webp";

/* Закуски */
import TempuraShrimp from "/img/Snacks/TempuraShrimp.webp";
import Poker from "/img/Snacks/Poker.webp";
import SushirittoWithShrimp from "/img/Snacks/SushirittoWithShrimp.webp";
import SushirittoWithChicken from "/img/Snacks/SushirittoWithChicken.webp";
import TyakhanWithChicken from "/img/Snacks/TyakhanWithChicken.webp";
import TyakhanWithShrimp from "/img/Snacks/TyakhanWithShrimp.webp";
import ChukaSalad from "/img/Snacks/ChukaSalad.webp";
import Bakedmussels from "/img/Snacks/Bakedmussels.webp";
import SushirittoWithSalmon from "/img/Snacks/SushirittoWithSalmon.webp";

/* Вок */
import VegetableWok from "/img/Woks/VegetableWok.webp";
import WokWithChicken from "/img/Woks/WokWithChicken.webp";
import WokWithShrimp from "/img/Woks/WokWithShrimp.webp";

/* Пицца */
import Margaret from "/img/Pizza/Margaret.webp";
import FourCheeses from "/img/Pizza/FourCheeses.webp";
import Hawaiian from "/img/Pizza/Hawaiian.webp";
import Pepperoni from "/img/Pizza/Pepperoni.webp";
import WithMushrooms from "/img/Pizza/WithMushrooms.webp";
import WithChicken from "/img/Pizza/WithChicken.webp";
import Carbonara from "/img/Pizza/Carbonara.webp";
import Barbecue from "/img/Pizza/Barbecue.webp";
import CheeseBaconMushrooms from "/img/Pizza/CheeseBaconMushrooms.webp";
import Vegan from "/img/Pizza/Vegan.webp";
import WithTuna from "/img/Pizza/WithTuna.webp";
import Artichoke from "/img/Pizza/Artichoke.webp";
import WithStrachatella from "/img/Pizza/WithStrachatella.webp";

/* Напитки */
import CherryCherry from "/img/Drinks/CherryCherry.webp";
import GingerLemonade from "/img/Drinks/GingerLemonade.webp";
import PassionFruitLemonade from "/img/Drinks/PassionFruitLemonade.webp";

/* Допы */
import imbirImg from "/img/Dops/imbir.webp";
import soySauce from "/img/Dops/soySauce.webp";
import wasabi from "/img/Dops/wasabi.webp";
import milkaWasabiSauce from "/img/Dops/milkaWasabiSauce.webp";

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
    title: "Вок",
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
    itemImg: AbiFurai,
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
    itemImg: TheRisingSun,
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
    itemImg: Hotosamon,
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
    itemImg: Utsubo,
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
    itemImg: Kanetsu,
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
    itemImg: Inpura,
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

export const setItems = [
  {
    id: v4(),
    title: "Киото",
    structure:
      "Запеченный с лососем (креветкой, снежным крабом, огурцом, угрём).",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "750 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Kyoto,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 989,
    pastPrice: 1256,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Хоккайдо",
    structure:
      "Сяке кани, филадельфия, калифорния, клубничный, филадельфия унаги.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "1035 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Hokkaido,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1199,
    pastPrice: 1755,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Саши",
    structure:
      "Филадельфия лайт, филадельфия унаги лайт, сливочный тобико, сливочный кунжут, калифорния.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "975 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Sasha,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 839,
    pastPrice: 1185,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Окинава",
    structure:
      "Ролл с авокадо, ролл с лососем, ролл с огурцом, ролл с угрём.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "405 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Okinawa,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 419,
    pastPrice: 676,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Сахалин",
    structure: "Филадельфия унаги, клубничный, сяке кани.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "620 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Sakhalin,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 819,
    pastPrice: 1107,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Спайси",
    structure:
      "Спайс с снежным крабом и огурцом, спайси с тунцом, филадельфия лайт, унаги лайт, калифорния.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "800 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Spicy,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 779,
    pastPrice: 1125,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Хайтеку",
    structure:
      "Запеченный с угрём, канияки, филадельфия унаги, тама, калифорния, спайс с лососем, спайс с тунцом.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 60 гр., васаби 20 гр.",
    weigth: "1300 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: HighTech,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1669,
    pastPrice: 2233,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Токио",
    structure: "Восходящее солнце, хотосамон, эби фурай.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "720 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Tokyo,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 749,
    pastPrice: 967,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Саппоро",
    structure:
      "Филадельфия лайт, унаги лайт, сливочный тобико, сливочный кунжут, калифорния, туцурай.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "1175 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Sapporo,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1069,
    pastPrice: 1574,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Горячая Япония",
    structure:
      "Восходящее солнце, хотосамон, эби фурай, утсубо, канетцу, инпура.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "1400 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: HotJapan,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1199,
    pastPrice: 1784,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Итани",
    structure:
      "Филадельфия, унаги лайт, муругай яки, сумоку чикен, тама, сливочный кунжут, спайс со снежным крабом и огурцом.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "1410 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Itani,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1299,
    pastPrice: 1883,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Кансай",
    structure:
      "Запеченный с лососем, с креветкой, с снежным крабом и огурцом, с угрём, муругай яки, сумоку чикен, канияки.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "1385 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Kansai,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1499,
    pastPrice: 2093,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Самурай",
    structure:
      "Эби фурай, запеченный ролл с лососем, сумоку чикен, с снежным крабом.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "835 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Samurai,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 899,
    pastPrice: 1156,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Мини",
    structure:
      "Калифорния, спайс с лососем, спайс с угрем.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "490 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Mini,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 569,
    pastPrice: 777,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Веге маки",
    structure:
      "Ролл с авокадо, ролл с лососем, ролл с огурцом, ролл с угрём, индеси.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "615 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: VegaMaki,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 569,
    pastPrice: 875,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Фудзияма",
    structure:
      "Калифорния, калифорния с креветкой, спайс с лососем, спайс с угрём.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "700 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Fujiyama,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 769,
    pastPrice: 1106,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Мэйдзи",
    structure:
      "Филадельфия, унаги лайт, эби фурай, канетцу, запеченный с снежным крабом и огурцом, запеченный сумоку чикен.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 60 гр., васаби 20 гр.",
    weigth: "1245 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Meiji,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1299,
    pastPrice: 1724,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Хирошима",
    structure:
      "Филадельфия чиз, калифорния с креветкой, хотосамон, утсубо.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "855 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Hiroshima,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 999,
    pastPrice: 1326,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Ямато",
    structure:
      "Филадельфия чиз, сливочный тобико, запеченный с угрём, запечённый Муругай Яки.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "800 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Yamato,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 899,
    pastPrice: 1176,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Рэйва",
    structure:
      "Филадельфия чиз, унаги лайт, сливочный кунжут, калифорния, канетцу, хотосамон, утусубо.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 60 гр., васаби 20 гр.",
    weigth: "1470 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: TheRave,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 1479,
    pastPrice: 1963,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Нурияки",
    structure:
      "Филадельфия чиз, запеченный с угрём, калифорния с креветкой, хотосамон, утсубо.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "630 гр. | 115 ккал",
    countButton: "по 8шт.",
    bgImg: bgImg,
    itemImg: Samurai,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 799,
    pastPrice: 999,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const snackItems = [
  {
    id: v4(),
    title: "Креветки темпура",
    structure:
      "Креветки обжаренные в кляре с остро-сладким соусом васаби милка.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "340 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: TempuraShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 499,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Покэ",
    structure:
      "Рис, перец, ростки сои, огурцы, имбирь маринованный, укроп, фирменный соус, кунжут, салат чука, авокадо.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "210 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Poker,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 199,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Суширитто с креветкой",
    structure:
      "Нори, рис, фирменный соус, овощная смесь, черри, хрустящий кляр, креветка.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "340 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: SushirittoWithShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 279,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Суширитто с курицей",
    structure:
      "Нори, рис, фирменный соус, овощная смесь, черри, хрустящий кляр, курица.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "330 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: SushirittoWithChicken,
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
    title: "Тяхан с курицей",
    structure:
      "Рис, фирменный соус, курица, кунжут,укроп, чеснок, хрустящий кляр, перец, имбирь маринованный.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "350 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: TyakhanWithChicken,
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
    title: "Тяхан с креветкой",
    structure:
      "Рис, фирменный соус, креветка, кунжут,укроп, чеснок, хрустящий кляр, перец, имбирь маринованный.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "350 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: TyakhanWithShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 279,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Чука салат",
    structure:
      "Салат Чука, ореховый соус, огурцы, лимон, перец.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 120 гр., имбирь 60 гр., васаби 20 гр.",
    weigth: "160 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: ChukaSalad,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 229,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Мидии запеченные",
    structure:
      "Мидии крупные запечённый в ракушках, фирменный соус",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 60 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "240 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Bakedmussels,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 399,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Суширитто с лососем",
    structure:
      "Нори, рис, фирменный соус, овощная смесь, черри, хрустящий кляр, лосось.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle:
      "соевый соус 80 гр., имбирь 30 гр., васаби 10 гр.",
    weigth: "340 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: SushirittoWithSalmon,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 299,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const wokItems = [
  {
    id: v4(),
    title: "Вок овощной",
    structure:
      "Лапша удон, фирменный соус, овощная смесь, грибы шиитаке.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "230 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: VegetableWok,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 199,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Вок с курицей",
    structure:
      "Лапша удон, фирменный соус, овощная смесь, грибы шитаке, курица.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "270 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WokWithChicken,
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
    title: "Вок с креветкой",
    structure:
      "Лапша удон, фирменный соус, овощная смесь, грибы шитаке, креветки.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "270 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WokWithShrimp,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 289,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const pizzaItems = [
  {
    id: v4(),
    title: "Маргарита",
    structure:
      "Соус фирменный томатный, сыр моцарелла, орегано.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "380 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Margaret,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 349,
    pastPrice: 529,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "4 сыра",
    structure: "Крем сыр, сливки, пармезан.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "390 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: FourCheeses,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Гавайская",
    structure:
      "Соус фирменный томатный, сыр моцарелла, ветчина, ананасы.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "480 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Hawaiian,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Пепперони",
    structure:
      "Сыр моцарелла, пепперони, перец маринованный.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "470 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Pepperoni,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "С грибами и ветчиной",
    structure: "Соус фирменный томатный, грибы, ветчина.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "490 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WithMushrooms,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "С курицей",
    structure:
      "Соус фирменный томатный, курица, перец маринованный.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "525 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WithChicken,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Карбонара",
    structure:
      "Соус фирменный томатный, яйцо куриное, бекон.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "505 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Carbonara,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Барбекю",
    structure:
      "Соус фирменный томатный, сыр моцарелла, лук репка, говядина, грибы, соус BBQ.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "520 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Barbecue,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 629,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Сыр, бекон, грибы",
    structure: "Крем сыр, сливки, пармезан, бекон, грибы.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "520 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: CheeseBaconMushrooms,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 629,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Веган",
    structure:
      "Соус фирменный томатный, грибы, перец маринованный, маслины, помидоры черри, орегано, лук.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "515 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Vegan,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 629,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "С тунцом",
    structure:
      "Соус фирменный томатный, сыр моцарелла, лук, тунец, маслины, перец маринованный",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "508 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WithTuna,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 629,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Артишок",
    structure:
      "Крем сыр, сливки, пармезан, крем из артишоков, крем из маслин.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "470 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: Artichoke,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 629,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },

  {
    id: v4(),
    title: "Со страчателлой",
    structure:
      "Соус фирменный томатный, сыр моцарелла, сыр страчателла, маслины, орегано, помидоры черри.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "515 гр. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: WithStrachatella,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 529,
    pastPrice: 629,
    pastCurrency: pastCurrencyIcon,
    currency: rublesIcon,
    popularity: Math.random(),
  },
];

export const drinkItems = [
  {
    id: v4(),
    title: "Вишня-черешня",
    structure: "Сок вишни, сок черешни, вода.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "0,5 л. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: CherryCherry,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 159,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Лимонад Имбирь",
    structure: "Имбирный сок, вода.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "0,5 л. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: GingerLemonade,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 159,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
  },
  {
    id: v4(),
    title: "Лимонад Маракуйя",
    structure: "Сок маракуйя, вода.",
    dopsTitle: "Бесплатно:",
    dopsSubTitle: "соус милка васаби 100 гр.",
    weigth: "0,5 л. | 115 ккал",
    countButton: null,
    bgImg: bgImg,
    itemImg: PassionFruitLemonade,
    basketIcon: basketIcon,
    basketIconHover: basketIconHover,
    button: "Купить",
    price: 159,
    pastPrice: null,
    pastCurrency: null,
    currency: rublesIcon,
    popularity: Math.random(),
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
