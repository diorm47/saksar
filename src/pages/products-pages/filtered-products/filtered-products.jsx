import React from "react";
import "./filtered-products.css";
import Card from "../../../components/card/card";
import Footer from "../../../components/footer/footer";
import ApplicationForm from "../../../components/application-from/application_form";

function FilteredPruducts({ items, title }) {
  return (
    <>
      <div className="filtered_products">
        <div className="filtered_product_title">
          <h1>{title}</h1>
        </div>
        <div className="filtered_products_carts">
          {items.length === 0 ? (
            <p className="nothing_message">{title} пока нету(</p>
          ) : (
            <Card item={items} />
          )}
        </div>
      </div>
      <ApplicationForm />
      <Footer />
    </>
  );
}

export default FilteredPruducts;
