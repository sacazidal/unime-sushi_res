import CartTitle from "../components/Cart/CartTitle";
import ContactInformation from "../components/Cart/ContactInformation";
import DeliveryAddress from "../components/Cart/DeliveryAddress";

const Cart = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 my-12 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-14">
      <div className="flex flex-col w-full px-10 md:px-0">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <CartTitle title={"Контактные данные"} />
            <ContactInformation />
          </div>
          <div className="flex flex-col">
            <CartTitle title={"Адрес доставки"} />
            <DeliveryAddress />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 md:px-5 lg:px-10">
        <CartTitle title={"Ваш заказ"} />
      </div>
    </div>
  );
};

export default Cart;
