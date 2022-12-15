import React from "react";
import { items } from "../../redux/data";
import FilteredPruducts from "./filtered-products/filtered-products";

function ScrubsPage() {
  React.useEffect(() => {
    document.title = `Скрабы для тела`;
  }, []);
  const data = items.filter((el) => el.type === "Скраб для тела");
  return <FilteredPruducts title="Скрабы" items={data} />;
}

export default ScrubsPage;
