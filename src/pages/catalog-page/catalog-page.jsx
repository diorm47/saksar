import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/card";
import "./catalog-page.css";
import ApplicationForm from "../../components/application-from/application_form";
import Footer from "../../components/footer/footer";

function CatalogPage() {
  React.useEffect(() => {
    document.title = `Каталог товаров`;
  }, []);
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="catalog_page">
        <div className="catalog_wrapper">
          <div className="catalog_title">
            <h1>Каталог</h1>
          </div>
          <div className="catalog_items">
            <Card item={items} />
          </div>
          <div className="catalog_application">
            <ApplicationForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CatalogPage;
