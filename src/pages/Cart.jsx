import CartTitle from "../components/Cart/CartTitle";

const Cart = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 my-12 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-14">
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <CartTitle title={"Контактные данные"} />
            <div className="flex justify-between gap-5 mb-10">
              <input
                type="text"
                name=""
                id=""
                placeholder="Ваше имя"
                className="w-full p-3 border-2 rounded-2xl border-gray-300"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Ваш телефон"
                className="w-full p-3 border-2 rounded-2xl border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <CartTitle title={"Адрес доставки"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10">
        <CartTitle title={"Ваш заказ"} />
      </div>
    </div>
  );
};

export default Cart;
