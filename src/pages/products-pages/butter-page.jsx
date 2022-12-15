import React from "react";
import FilteredPruducts from "./filtered-products/filtered-products";
import {items} from "../../redux/data"

function ButterPage() {
  React.useEffect(() => {
    document.title = `Баттеры`;
  }, []);

  const data = items.filter((el) => el.type === "Баттер");
  return <FilteredPruducts title="Баттер" items={data} />;
}

export default ButterPage;
