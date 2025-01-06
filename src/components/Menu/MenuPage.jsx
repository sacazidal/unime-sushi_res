import React, {
  Suspense,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import useInView from "../../hooks/useInView";
const Rolls = React.lazy(() => import("./Rolls"));
const BakedRolls = React.lazy(() => import("./BakedRolls"));
const HotRolls = React.lazy(() => import("./HotRolls"));
const Sets = React.lazy(() => import("./Sets"));
const Snacks = React.lazy(() => import("./Snacks"));
const Wok = React.lazy(() => import("./Wok"));
const Pizza = React.lazy(() => import("./Pizza"));
const Drinks = React.lazy(() => import("./Drinks"));
const Dops = React.lazy(() => import("./Dops"));

const MenuPage = () => {
  const location = useLocation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [rollsRef, rollsInView] = useInView({
    triggerOnce: true,
  });
  const [backedRollsRef, backedRollsInView] = useInView({
    triggerOnce: true,
  });
  const [hotRollsRef, hotRollsInView] = useInView({
    triggerOnce: true,
  });
  const [setsRef, setsInView] = useInView({
    triggerOnce: true,
  });
  const [snacksRef, snacksInView] = useInView({
    triggerOnce: true,
  });
  const [wokRef, wokInView] = useInView({
    triggerOnce: true,
  });
  const [pizzaRef, pizzaInView] = useInView({
    triggerOnce: true,
  });
  const [drinksRef, drinksInView] = useInView({
    triggerOnce: true,
  });
  const [dopsRef, dopsInView] = useInView({
    triggerOnce: true,
  });

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
        }, 50);

        return () => clearTimeout(timer);
      }
    }
  }, [location, isDataLoaded]);

  return (
    <div>
      {isDataLoaded ? (
        <>
          <div className="" ref={rollsRef} id="роллы">
            {rollsInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка роллов...
                  </div>
                }
              >
                <Rolls />
              </Suspense>
            )}
          </div>
          <div
            className=""
            ref={backedRollsRef}
            id="запеченные-роллы"
          >
            {backedRollsInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка запеченных роллов...
                  </div>
                }
              >
                <BakedRolls />
              </Suspense>
            )}
          </div>
          <div
            className=""
            ref={hotRollsRef}
            id="горячие-роллы"
          >
            {hotRollsInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка горячих роллов...
                  </div>
                }
              >
                <HotRolls />
              </Suspense>
            )}
          </div>
          <div className="" ref={setsRef} id="сеты">
            {setsInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка сетов...
                  </div>
                }
              >
                <Sets />
              </Suspense>
            )}
          </div>
          <div className="" ref={snacksRef} id="закуски">
            {snacksInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка закусок...
                  </div>
                }
              >
                <Snacks />
              </Suspense>
            )}
          </div>
          <div className="" ref={wokRef} id="вок">
            {wokInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка воков...
                  </div>
                }
              >
                <Wok />
              </Suspense>
            )}
          </div>
          <div className="" ref={pizzaRef} id="пицца">
            {pizzaInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка пицц...
                  </div>
                }
              >
                <Pizza />
              </Suspense>
            )}
          </div>
          <div className="" ref={drinksRef} id="напитки">
            {drinksInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка напитков...
                  </div>
                }
              >
                <Drinks />
              </Suspense>
            )}
          </div>
          <div className="" ref={dopsRef} id="допы">
            {dopsInView && (
              <Suspense
                fallback={
                  <div className="text-center font-montserrat text-xl font-semibold mb-96">
                    Загрузка допов...
                  </div>
                }
              >
                <Dops />
              </Suspense>
            )}
          </div>
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
