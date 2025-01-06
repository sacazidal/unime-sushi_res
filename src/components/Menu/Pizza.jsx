import Sort from "../Sort";
import { useState } from "react";
import { pizzaItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Pizza = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Пицца" onSortChange={setSortType} />
      <ProductList
        items={pizzaItems}
        sortType={sortType}
        title="пицца"
      />
    </>
  );
};

export default Pizza;
