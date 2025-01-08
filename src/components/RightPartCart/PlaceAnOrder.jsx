/* eslint-disable react/prop-types */
import { useCart } from "../../store/CartContext";
import rublesIcon from "/img/icons/rubles.svg";
import pastCurrencyIcon from "/img/icons/pastCurrency.svg";

const PlaceAnOrder = ({ discount }) => {
  const { totalPrice } = useCart();

  const formatPrice = (price) => {
    return price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const discountedPrice = Math.round(
    totalPrice * (1 - discount),
  );

  return (
    <div className="flex gap-5">
      <div className="">
        <button className="font-montserrat font-semibold text-xs lg:text-base text-white bg-orange-600 p-2 rounded-lg">
          Оформить заказ
        </button>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex gap-1">
          <div className="font-montserrat font-semibold text-sm text-orange-600 leading-none line-through">
            {discount > 0 ? formatPrice(totalPrice) : ""}
          </div>
          <div className="flex items-center">
            {discount > 0 && (
              <img
                src={pastCurrencyIcon}
                alt="pastCurrencyIcon"
                className="w-2 h-2"
              />
            )}
          </div>
        </div>

        <div className="flex gap-1 items-center h-full">
          <div className="font-montserrat font-semibold text-sm lg:text-lg">
            {formatPrice(discountedPrice)}
          </div>
          <img
            src={rublesIcon}
            alt="rublesIcon"
            className="w-2 lg:w-3"
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceAnOrder;
