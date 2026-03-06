import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch products. Please try again.");
      });
  }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center flex-wrap">
      {products.map((item) => (
        <ProductCard product={item} key={item.productId} />
      ))}
    </div>
  );
}
