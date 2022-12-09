import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import AboutItem from "./pages/about-item/about-item";
import CartPage from "./pages/cart-page/cart-page";
import CatalogPage from "./pages/catalog-page/catalog-page";
import ContactsPage from "./pages/contacts-page/contacts-page";
import HomePage from "./pages/home-page/home-page";
import PaymentDelivery from "./pages/payment-delivery-page/payment-delivery";
import ButterPage from "./pages/products-pages/butter-page";
import DiffusorsPage from "./pages/products-pages/diffusors-page";
import ScrubsPage from "./pages/products-pages/scrubs-page";
import SpaSetsPage from "./pages/products-pages/spa-sets-page";

function App() {
  return (
    <>
      <NavBar />
      <div className="app_content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/payment-delivery" element={<PaymentDelivery />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/butter" element={<ButterPage />} />
          <Route path="/scrubs" element={<ScrubsPage />} />
          <Route path="/spa-sets" element={<SpaSetsPage />} />
          <Route path="/diffusers" element={<DiffusorsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about-item/*" element={<AboutItem />} />

          <Route path="*" element={"Page not found"} />
        </Routes>
      </div>
    </>
  );
}

export default App;


