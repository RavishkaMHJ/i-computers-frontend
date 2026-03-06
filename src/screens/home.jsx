import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./product";
import ProductOverView from "./productOverview";
import Cart from "./cart";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/overview/:productId" element={<ProductOverView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
