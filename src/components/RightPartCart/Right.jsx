import CartTitle from "../Cart/CartTitle";
import FormInput from "../FormInput";
import OrderItems from "./OrderItems";
import PlaceAnOrder from "./PlaceAnOrder";

const Right = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex flex-col w-full border-b rounded-b-[30px] pb-12 px-0 lg:px-10">
        <CartTitle title={"Ваш заказ"} />
        <div className="">
          <OrderItems />
        </div>
        <div className="">
          <PlaceAnOrder />
        </div>
      </div>
      <div className="flex flex-col w-full border-b rounded-b-[30px] min-h-40 px-0 lg:px-10">
        <CartTitle title={"Промокод"} />
        <div className="flex gap-5">
          <FormInput
            type={"text"}
            placeholder={"Промокод"}
            name={""}
            id={""}
          />
          <button className="font-montserrat font-semibold text-xs md:text-base text-white bg-orange-600 py-1 md:px-3 px-1 md:py-2 rounded-lg">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
