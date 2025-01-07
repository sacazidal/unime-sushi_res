import CartTitle from "../Cart/CartTitle";
import CommentsDelivery from "../Cart/CommentsDelivery";
import ContactInformation from "../Cart/ContactInformation";
import DeliveryAddress from "../Cart/DeliveryAddress";
import TimeDelivery from "../Cart/TimeDelivery";

const Left = () => {
  return (
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
        <div className="flex flex-col">
          <CartTitle title={"Время"} />
          <TimeDelivery />
        </div>
        <div className="flex flex-col">
          <CartTitle title={"Комментарий"} />
          <CommentsDelivery />
        </div>
      </div>
    </div>
  );
};

export default Left;
