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
                      className="h-28 w-20"
                    />
                    <div className="flex flex-col">
                      <div className="font-montserrat font-semibold text-lg max-w-48">
                        {item.title}
                      </div>
                      <div className="font-montserrat text-[10px] xs:text-sm font-medium text-gray-500 my-2">
                        {item.weigth}
                      </div>
                      <div className="flex items-center gap-1 xs:gap-3">
                        <button
                          className="hover:text-orange-600"
                          onClick={() =>
                            decreaseQuantity(itemId)
                          }
                        >
                          <SlMinus className="w-4 h-4" />
                        </button>
                        <span className="font-montserrat font-medium text-md">
                          {item.quantity}
                        </span>
                        <button
                          className="hover:text-orange-600"
                          onClick={() =>
                            increaseQuantity(itemId)
                          }
                        >
                          <SlPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <div className="flex gap-2">
                      <div className="font-montserrat font-semibold text-sm sm:text-md lg:text-xl">
                        {item.quantity * item.price}
                      </div>
                      <img src={rublesIcon} alt="rubles" />
                    </div>

                    <button
                      className="rounded-full p-1 bg-gray-200"
                      onClick={() => removeFromCart(itemId)}
                    >
                      <GrFormClose className="w-5 h-5" />
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
