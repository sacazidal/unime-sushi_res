import { useState } from "react";

const ShippingMethod = () => {
  const [isActive, setIsActive] = useState("delivery");

  const handleShippingMethod = (method) => {
    setIsActive(method);
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <button
        className={`font-montserrat font-semibold text-xs md:text-base text-center px-2 py-2 md:px-5 border border-orange-600 rounded-xl ${
          isActive === "delivery"
            ? "bg-orange-600 text-white"
            : ""
        }`}
        onClick={() => handleShippingMethod("delivery")}
      >
        Доставка
      </button>
      <button
        className={`font-montserrat font-semibold text-xs md:text-base text-center px-2 py-2 md:px-5 border border-orange-600 rounded-xl ${
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
