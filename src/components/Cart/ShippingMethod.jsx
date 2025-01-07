import { useState } from "react";

const ShippingMethod = () => {
  const [isActive, setIsActive] = useState("delivery");

  const handleShippingMethod = (method) => {
    setIsActive(method);
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <button
        className={`font-montserrat font-semibold text-base text-center px-5 py-3 border border-orange-600 rounded-xl ${
          isActive === "delivery"
            ? "bg-orange-600 text-white"
            : ""
        }`}
        onClick={() => handleShippingMethod("delivery")}
      >
        Доставка
      </button>
      <button
        className={`font-montserrat font-semibold text-base text-center px-5 py-3 border border-orange-600 rounded-xl ${
          isActive === "pickup"
            ? "bg-orange-600 text-white"
            : ""
        }`}
        onClick={() => handleShippingMethod("pickup")}
      >
        Самовывоз
      </button>
    </div>
  );
};

export default ShippingMethod;
