import { SlMinus, SlPlus } from "react-icons/sl";
import { useCart } from "../../store/CartContext";
import rublesIcon from "/img/icons/rubles.svg";
import { GrFormClose } from "react-icons/gr";

const OrderItems = () => {
  const {
    cart,
    removeFromCart,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div className="mb-4">
      <div className="flex flex-col">
        {totalItems === 0 ? (
          <div className="font-montserrat font-semibold text-xl text-center">
            Корзина пуста
          </div>
        ) : (
          <div className="max-h-[500px] overflow-y-auto mb-2 flex flex-col gap-2 w-full pr-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {Object.entries(cart).map(([itemId, item]) => (
              <div className="flex w-full" key={itemId}>
                <div className="flex w-full gap-x-3 justify-between">
                  <div className="flex gap-5">
                    <img
                      src={item.itemImg}
                      alt={item.title}
                      className="w-14 h-18 md:h-28 md:w-20"
                    />
                    <div className="flex flex-col">
                      <div className="font-montserrat font-semibold text-sm lg:text-lg max-w-32 lg:max-w-48 leading-none">
                        {item.title}
                      </div>
                      <div className="font-montserrat text-[10px] lg:text-sm font-medium text-gray-500 my-1 lg:my-2">
                        {item.weigth}
                      </div>
                      <div className="flex items-center gap-1 xs:gap-3">
                        <button
                          className="hover:text-orange-600"
                          onClick={() =>
                            decreaseQuantity(itemId)
                          }
                        >
                          <SlMinus className="w-3 lg:w-4 lg:h-4" />
                        </button>
                        <span className="font-montserrat font-medium text-sm lg:text-base">
                          {item.quantity}
                        </span>
                        <button
                          className="hover:text-orange-600"
                          onClick={() =>
                            increaseQuantity(itemId)
                          }
                        >
                          <SlPlus className="w-3 lg:w-4 lg:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <div className="flex gap-1 lg:gap-2 items-center">
                      <div className="font-montserrat font-semibold text-sm sm:text-md lg:text-xl">
                        {item.quantity * item.price}
                      </div>
                      <img
                        src={rublesIcon}
                        alt="rubles"
                        className="w-2 lg:w-3"
                      />
                    </div>

                    <button
                      className="rounded-full p-0 lg:p-1 bg-gray-200"
                      onClick={() => removeFromCart(itemId)}
                    >
                      <GrFormClose className="w-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderItems;
