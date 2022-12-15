import React from "react";
import { items } from "../../redux/data";
import FilteredPruducts from "./filtered-products/filtered-products";

function DiffusorsPage() {
  React.useEffect(() => {
    document.title = `Аромадиффузоры`;
  }, []);

  const data = items.filter((el) => el.type === "Аромадиффузор");
  return <FilteredPruducts title="Аромадиффузоры" items={data} />;
}

export default DiffusorsPage;
