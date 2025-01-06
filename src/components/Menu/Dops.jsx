import { useState } from "react";
import { dopItems } from "../../constants/Index";
import Sort from "../Sort";
import ProductList from "./ProductList";

const Dops = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Допы" onSortChange={setSortType} />
      <ProductList
        items={dopItems}
        sortType={sortType}
        title="допы"
      />
    </>
  );
};

export default Dops;
