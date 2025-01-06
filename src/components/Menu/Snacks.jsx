import Sort from "../Sort";
import { useState } from "react";
import { snackItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Snacks = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort
        title="Закуски - Блюда от Шефа"
        onSortChange={setSortType}
      />
      <ProductList
        items={snackItems}
        sortType={sortType}
        title="закуски"
      />
    </>
  );
};

export default Snacks;
