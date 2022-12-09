import React from "react";
import { useSelector } from "react-redux";
import FilteredPruducts from "./filtered-products/filtered-products";

function SpaSetsPage() {
  React.useEffect(() => {
    document.title = `SPA-наборы для тела`;
  }, []);
  const items = useSelector((state) => state.cart.items);
  const data = items.filter((el) => el.type === "Spa-набор для тела");
  return <FilteredPruducts title="Spa-наборы для тела" items={data} />;
}

export default SpaSetsPage;
