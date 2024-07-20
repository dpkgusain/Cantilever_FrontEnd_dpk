import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>

        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
