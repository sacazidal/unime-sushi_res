import {
  /*React,*/ /*Suspense,*/
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
//import useInView from "../../hooks/useInView";
import Rolls from "./Rolls";
import BakedRolls from "./BakedRolls";
import HotRolls from "./HotRolls";
import Sets from "./Sets";
import Snacks from "./Snacks";
import Wok from "./Wok";
import Pizza from "./Pizza";
import Drinks from "./Drinks";
import Dops from "./Dops";
/* const Rolls = React.lazy(() => import("./Rolls"));
const BakedRolls = React.lazy(() => import("./BakedRolls"));
const HotRolls = React.lazy(() => import("./HotRolls"));
const Sets = React.lazy(() => import("./Sets"));
const Snacks = React.lazy(() => import("./Snacks"));
const Wok = React.lazy(() => import("./Wok"));
const Pizza = React.lazy(() => import("./Pizza"));
const Drinks = React.lazy(() => import("./Drinks"));
const Dops = React.lazy(() => import("./Dops")); */

const MenuPage = () => {
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      const hash = location.hash.replace("#", "");
      if (hash) {
        const decodedHash = decodeURIComponent(hash);

        const timer = setTimeout(() => {
          const targetElement =
            document.getElementById(decodedHash);
          if (targetElement) {
            scroller.scrollTo(decodedHash, {
              duration: 500,
              smooth: true,
              offset: 20,
            });
          } else {
            console.warn(
              `Элемент с id "${decodedHash}" не найден.`,
            );
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [location, isDataLoaded]);

  return (
    <div>
      {isDataLoaded ? (
        <>
          <Rolls />
          <BakedRolls />
          <HotRolls />
          <Sets />
          <Snacks />
          <Wok />
          <Pizza />
          <Drinks />
          <Dops />
        </>
      ) : (
        <div className="text-center font-montserrat text-xl font-semibold mb-96">
          Загрузка...
        </div>
      )}
    </div>
  );
};

export default MenuPage;
