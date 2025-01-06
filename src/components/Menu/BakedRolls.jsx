import Sort from "../Sort";
import { useState } from "react";
import { bakedRollItems } from "../../constants/Index";
import ProductList from "./ProductList";

const BakedRolls = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort
        title="Запеченные роллы"
        onSortChange={setSortType}
      />
      <ProductList
        items={bakedRollItems}
        sortType={sortType}
        title="запеченные-роллы"
      />
    </>
  );
};

export default BakedRolls;
