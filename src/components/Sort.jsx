import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Sort = ({ title, onSortChange }) => {
  const [activeButton, setActiveButton] = useState("price");

  const handleButtonClick = (type) => {
    setActiveButton(type);
    onSortChange(type);
  };

  return (
    <div className="pb-10 flex flex-col gap-1">
      <h2 className="font-montserrat font-semibold text-2xl">
        {title}
      </h2>
      <div className="flex gap-5">
        <div className="font-montserrat font-medium text-xs">
          Сортировать
        </div>
        <button
          className={`font-montserrat font-medium text-xs ${
            activeButton === "price"
              ? "text-black"
              : "text-zinc-400"
          }`}
          onClick={() => handleButtonClick("price")}
        >
          по цене
        </button>
        <button
          className={`font-montserrat font-medium text-xs transition-all ${
            activeButton === "popularity"
              ? "text-black"
              : "text-zinc-400"
          }`}
          onClick={() => handleButtonClick("popularity")}
        >
          по популярности
        </button>
      </div>
    </div>
  );
};

export default Sort;
