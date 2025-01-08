import { useState } from "react";
import CartTitle from "../Cart/CartTitle";
import FormInput from "../FormInput";
import OrderItems from "./OrderItems";
import PlaceAnOrder from "./PlaceAnOrder";
import { PromoCodes } from "../../constants/PromoCodes";

const Right = () => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");

  const handleApplyPromoCode = () => {
    const validPromo = PromoCodes.find(
      (item) => item.code === promoCode,
    );

    if (!validPromo) {
      setError("Неверный промокод");
      setDiscount(0);
      return;
    }

    if (!validPromo.isActive) {
      setError("Промокод не активен");
      setDiscount(0);
      return;
    }

    if (
      validPromo.validityPeriod &&
      new Date(validPromo.validityPeriod) < new Date()
    ) {
      setError("Срок действия промокода истек");
      setDiscount(0);
      return;
    }

    setError("");
    setDiscount(validPromo.discount);
  };

  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex flex-col w-full border-b rounded-b-[30px] pb-12 px-0 lg:px-10">
        <CartTitle title={"Ваш заказ"} />
        <div className="">
          <OrderItems />
        </div>
        <div className="">
          <PlaceAnOrder discount={discount} />
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
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            onClick={handleApplyPromoCode}
            className="font-montserrat font-semibold text-xs md:text-base text-white bg-orange-600 py-1 md:px-3 px-1 md:py-2 rounded-lg"
          >
            Применить
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Right;
