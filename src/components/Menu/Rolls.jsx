import Sort from "../Sort";
import { useState } from "react";
import { rollItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Rolls = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Роллы" onSortChange={setSortType} />
      <ProductList
        items={rollItems}
        sortType={sortType}
        title="роллы"
      />
    </>
  );
};

export default Rolls;
