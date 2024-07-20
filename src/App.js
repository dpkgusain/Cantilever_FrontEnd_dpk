// import logo from "./logo.svg";
import "./App.css";
// import Navigation from "./customer/components/Navigation/Navigation";
// import HomePage from "./customer/pages/HomePage/HomePage";
// import Footer from "./customer/components/Footer/Footer";
// import Product from "./customer/components/Product/Product";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
