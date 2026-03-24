import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./product";
import ProductOverView from "./productOverview";
import Cart from "./cart";
import CheckOut from "./checkout";
import InitialHomePage from "./initialHomePage";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<InitialHomePage />} />
        <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/overview/:productId" element={<ProductOverView />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
