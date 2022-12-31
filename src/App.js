import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import Loader from "./components/Loader/loader";

const ButterPage = React.lazy(() =>
  import("./pages/products-pages/butter-page")
);
const DiffusorsPage = React.lazy(() =>
  import("./pages/products-pages/diffusors-page")
);
const ScrubsPage = React.lazy(() =>
  import("./pages/products-pages/scrubs-page")
);
const SpaSetsPage = React.lazy(() =>
  import("./pages/products-pages/spa-sets-page")
);

const AboutItem = React.lazy(() => import("./pages/about-item/about-item"));
const CartPage = React.lazy(() => import("./pages/cart-page/cart-page"));
const CatalogPage = React.lazy(() =>
  import("./pages/catalog-page/catalog-page")
);
const ContactsPage = React.lazy(() =>
  import("./pages/contacts-page/contacts-page")
);
const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const PaymentDelivery = React.lazy(() =>
  import("./pages/payment-delivery-page/payment-delivery")
);
const PolicyPage = React.lazy(() => import("./pages/policy-page/policy-page"));
const CheckoutPage = React.lazy(() =>
  import("./pages/checkout-page/checkout-page")
);

function App() {
  return (
    <>
      <NavBar />

      <div className="app_content">
        <Suspense fallback={<Loader />}>
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
            <Route path="/about-item/:name" element={<AboutItem />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/policy" element={<PolicyPage />} />

            <Route path="*" element={"Page not found"} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
