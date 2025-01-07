import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/CartContext";
import basketIcon from "/img/icons/basket.svg";
import mediaBasketIcon from "/img/icons/mediaBasketIcon.svg";
import rublesIcon from "/img/icons/rubles.svg";

const Basket = () => {
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useCart();

  const formatPrice = (price) => {
    return price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <button
      className="flex gap-4"
      onClick={() => navigate("/cart")}
    >
      <div className="relative">
        <img
          src={basketIcon}
          className="md:w-[38px] md:h-[44px] md:block hidden"
        />
        <img
          src={mediaBasketIcon}
          className="md:hidden w-[28px] h-[30px]"
        />
        <div className="bg-gray-200 absolute -top-2 -right-2 rounded-full font-montserrat font-medium text-xs w-4 h-4">
          {totalItems}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="hidden md:flex font-montserrat font-medium text-xs text-neutral-400">
          В корзине
        </div>
        <div className="hidden md:flex gap-1">
          <div className="font-montserrat font-semibold text-2xl">
            {formatPrice(totalPrice)}
          </div>
          <img src={rublesIcon} alt="rublesIcon" />
        </div>
      </div>
    </button>
  );
};

export default Basket;
