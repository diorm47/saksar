import React from "react";
import { items } from "../../redux/data";
import ApplicationForm from "../../components/application-from/application_form";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import "./catalog-page.css";

function CatalogPage() {
  React.useEffect(() => {
    document.title = `Каталог товаров`;
  }, []);

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
