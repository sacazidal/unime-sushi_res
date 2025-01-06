import Sort from "../Sort";
import { useState } from "react";
import { wokItems } from "../../constants/Index";
import ProductList from "./ProductList";

const Wok = () => {
  const [sortType, setSortType] = useState("price");

  return (
    <>
      <Sort title="Вок" onSortChange={setSortType} />
      <ProductList
        items={wokItems}
        sortType={sortType}
        title="вок"
      />
    </>
  );
};

export default Wok;
