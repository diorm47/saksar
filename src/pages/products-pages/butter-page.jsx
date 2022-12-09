import React from "react";
import { useSelector } from "react-redux";
import FilteredPruducts from "./filtered-products/filtered-products";

function ButterPage() {
  React.useEffect(() => {
    document.title = `Баттеры`;
  }, []);
  const items = useSelector((state) => state.cart.items);
  const data = items.filter((el) => el.type === "Баттер");
  return <FilteredPruducts title="Баттер" items={data} />;
}

export default ButterPage;
