import { useCart } from "../../store/CartContext";
import rublesIcon from "/img/icons/rubles.svg";

const PlaceAnOrder = () => {
  const { totalPrice } = useCart();

  const formatPrice = (price) => {
    return price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="flex gap-5">
      <div className="">
        <button className="font-montserrat font-semibold text-xs lg:text-base text-white bg-orange-600 p-2 rounded-lg">
          Оформить заказ
        </button>
      </div>

      <div className="flex flex-col leading-none">
        <div className="font-montserrat font-semibold text-sm text-orange-600"></div>
        <div className="flex gap-1 items-center h-full">
          <div className="font-montserrat font-semibold text-sm lg:text-lg">
            {formatPrice(totalPrice)}
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
