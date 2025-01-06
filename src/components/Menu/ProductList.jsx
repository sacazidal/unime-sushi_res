import { useState } from "react";
import { SlMinus, SlPlus } from "react-icons/sl";
import { useCart } from "../../store/CartContext";

// eslint-disable-next-line react/prop-types
const ProductList = ({ items, sortType, title }) => {
  const [hoveredButton, setHoveredButton] = useState({});
  const [quantity, setQuantity] = useState({});

  const { addToCart } = useCart();

  const handleMouseEnter = (id) => {
    setHoveredButton((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoveredButton((prev) => ({ ...prev, [id]: false }));
  };

  const handleQuantityAdd = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleQuantitySubtract = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleAddToCart = (itemId, price) => {
    addToCart(itemId, quantity[itemId] || 1, price);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    } else if (sortType === "popularity") {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <div className="py-3 sm:py-10" id={title}>
      <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 justify-between items-center">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="relative mb-5 xl:h-[280px] lg:h-[260px] md:h-[240px] sm:h-[220px] h-[200px] w-full border-2 border-gray-200 rounded-xl"
          >
            <img
              src={item.bgImg}
              alt={item.title}
              className="w-full h-full"
            />
            <div className="flex items-center absolute top-2 right-0 h-full">
              <img
                src={item.itemImg}
                alt={item.title}
                className="h-[95px] sm:h-[130px] md:h-[135px] lg:h-auto"
              />
            </div>
            <div className="absolute top-0 bottom-3 p-4 lg:p-5">
              <h3 className="font-montserrat font-semibold text-xs xs:text-sm lg:text-lg min-w-24 max-w-24 sm:min-w-52 sm:max-w-52 leading-none lg:leading-none">
                {item.title}
              </h3>
              {item.structure && (
                <p className="py-2 font-montserrat font-medium text-xs max-w-52 hidden lg:block leading-none">
                  {item.structure}
                </p>
              )}
              {item.dopsTitle && (
                <div className="font-montserrat font-medium text-xxs hidden lg:block max-w-52">
                  {item.dopsTitle}
                </div>
              )}
              {item.dopsSubTitle && (
                <div className="font-montserrat font-medium text-xxs leading-none max-w-52 hidden lg:block">
                  {item.dopsSubTitle}
                </div>
              )}
              <p className="font-montserrat text-[9px] xs:text-xs font-medium text-gray-500 py-2">
                {item.weigth}
              </p>
              <div className="flex items-center mb-12">
                <div className="flex items-center gap-1 xs:gap-3">
                  <button
                    className="hover:text-orange-600"
                    onClick={() =>
                      handleQuantitySubtract(item.id)
                    }
                  >
                    <SlMinus className="w-4 h-4" />
                  </button>
                  <span className="font-montserrat font-medium text-md">
                    {quantity[item.id] || 1}
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
                {item.countButton && (
                  <button className="font-montserrat font-medium text-xxs bg-orange-600 text-white rounded-xl px-3 py-1 ml-5 hidden lg:block">
                    {item.countButton}
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="flex items-center gap-2 lg:gap-3 border-2 border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white absolute bottom-0 p-1 lg:p-3"
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
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-full lg:h-full"
                  />
                  <div className="font-montserrat font-medium lg:font-semibold text-xs sm:text-sm lg:text-base">
                    {item.button}
                  </div>
                </button>
                <div className="flex items-center absolute bottom-0 lg:bottom-2 -right-6 xs:-right-14 sm:right-11 lg:right-4 w-12 xs:w-20">
                  {item.pastPrice && (
                    <div className="font-montserrat text-base font-semibold absolute -top-[13px] xs:-top-[10px] lg:-top-4 left-0 text-orange-600 line-through">
                      <div className="text-[11px] xs:text-xs lg:text-base">
                        {item.pastPrice}
                      </div>
                      {item.pastCurrency && (
                        <div
                          className={
                            "absolute -right-3 top-2 xs:top-1 lg:top-2"
                          }
                        >
                          <img
                            src={item.pastCurrency}
                            alt="rubles"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="pr-1 font-montserrat font-semibold text-sm sm:text-xl lg:text-2xl">
                    {item.price}
                  </div>
                  <img
                    src={item.currency}
                    alt="rubles"
                    className="sm:w-[13px] sm:h-[12px] w-2 h-2"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
