import Sort from "../Sort";
import { useState } from "react";
import { hotRolls } from "../../constants/Index";
import ProductList from "./ProductList";

const HotRolls = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort
        title="Горячие роллы"
        onSortChange={setSortType}
      />
      <ProductList
        items={hotRolls}
        sortType={sortType}
        title="горячие-роллы"
      />
    </>
  );
};

export default HotRolls;
