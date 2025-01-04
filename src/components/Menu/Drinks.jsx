import Sort from "../Sort";
import SectionWrapper from "./SectionWrapper";
import { useState } from "react";
import { drinkItems } from "../../constants/Index";
import { SlMinus, SlPlus } from "react-icons/sl";
import { useCart } from "../../store/CartContext";

const Drinks = () => {
  const [hoveredButton, setHoveredButton] = useState({});
  const [quatity, setQuatity] = useState({});
  const [sortType, setSortType] = useState("price");

  const { addToCart } = useCart();

  const handleMouseEnter = (id) => {
    setHoveredButton((prev) => ({ ...prev, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setHoveredButton((prev) => ({ ...prev, [id]: false }));
  };
  const handleQuantityAdd = (id) => {
    setQuatity((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };
  const handleQuantitySubtract = (id) => {
    setQuatity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (itemId, price) => {
    addToCart(itemId, quatity[itemId] || 1, price);
  };

  const sortedItems = [...drinkItems].sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    } else if (sortType === "popularity") {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <SectionWrapper id={"напитки"}>
      <Sort title="Напитки" onSortChange={setSortType} />
      <div className="flex flex-wrap justify-between items-center">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="relative mb-5 h-[280px]"
          >
            <img src={item.bgImg} alt={item.title} />
            <div className="flex items-center absolute top-2 right-0 h-[280px]">
              <img src={item.itemImg} alt={item.title} />
            </div>
            <div className="absolute top-0 bottom-3 p-5">
              <h3 className="font-montserrat font-semibold text-lg max-w-52 leading-none">
                {item.title}
              </h3>
              <p className="py-2 font-montserrat font-medium text-xs max-w-52 min-w-52">
                {item.structure}
              </p>
              <p className="font-montserrat text-xs font-medium text-gray-500 py-2">
                {item.weigth}
              </p>
              <div className="flex items-center mb-12">
                <div className="flex items-center gap-3">
                  <button
                    className="hover:text-orange-600"
                    onClick={() =>
                      handleQuantitySubtract(item.id)
                    }
                  >
                    <SlMinus className="w-4 h-4" />
                  </button>
                  <span className="font-montserrat font-medium text-md">
                    {quatity[item.id] || 1}
                  </span>
                  <button
                    className="hover:text-orange-600"
                    onClick={() =>
                      handleQuantityAdd(item.id)
                    }
                  >
                    <SlPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="flex items-center gap-3 border-2 border-orange-600 p-3 rounded-xl hover:bg-orange-600 hover:text-white absolute bottom-0"
                  onMouseEnter={() =>
                    handleMouseEnter(item.id)
                  }
                  onMouseLeave={() =>
                    handleMouseLeave(item.id)
                  }
                  onClick={() =>
                    handleAddToCart(item.id, item.price)
                  }
                >
                  <img
                    src={
                      hoveredButton[item.id]
                        ? item.basketIconHover
                        : item.basketIcon
                    }
                    alt="basket"
                  />
                  <div className="font-montserrat font-semibold text-base">
                    {item.button}
                  </div>
                </button>
                <div className="flex items-center absolute bottom-2 right-9">
                  <div className="font-montserrat text-base font-semibold absolute -top-4 left-0 text-orange-600 line-through">
                    <div className="">{item.pastPrice}</div>
                    {item.pastCurrency && (
                      <div
                        className={
                          "absolute -right-3 top-2"
                        }
                      >
                        <img
                          src={item.pastCurrency}
                          alt="rubles"
                        />
                      </div>
                    )}
                  </div>
                  <div className="pr-1 font-montserrat font-semibold text-2xl">
                    {item.price}
                  </div>
                  <img src={item.currency} alt="rubles" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Drinks;
