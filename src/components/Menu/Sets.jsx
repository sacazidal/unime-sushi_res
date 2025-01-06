import Sort from "../Sort";
import { useState } from "react";
import { setItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Sets = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Сеты" onSortChange={setSortType} />
      <ProductList
        items={setItems}
        sortType={sortType}
        title="сеты"
      />
    </>
  );
};

export default Sets;
