import React from "react";
import { useSelector } from "react-redux";
import FilteredPruducts from "./filtered-products/filtered-products";

function DiffusorsPage() {
  React.useEffect(() => {
    document.title = `Аромадиффузоры`;
  }, []);
  const items = useSelector((state) => state.cart.items);
  const data = items.filter((el) => el.type === "Аромадиффузор");
  return <FilteredPruducts title="Аромадиффузоры" items={data} />;
}

export default DiffusorsPage;
