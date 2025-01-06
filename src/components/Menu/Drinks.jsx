import Sort from "../Sort";
import { useState } from "react";
import { drinkItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Drinks = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Напитки" onSortChange={setSortType} />
      <ProductList
        items={drinkItems}
        sortType={sortType}
        title="напитки"
      />
    </>
  );
};

export default Drinks;
