import React from "react";
import { useSelector } from "react-redux";
import FilteredPruducts from "./filtered-products/filtered-products";

function ScrubsPage() {
  React.useEffect(() => {
    document.title = `Скрабы для тела`;
  }, []);
  const items = useSelector((state) => state.cart.items);
  const data = items.filter((el) => el.type === "Скраб для тела");
  return <FilteredPruducts title="Скрабы" items={data} />;
}

export default ScrubsPage;
