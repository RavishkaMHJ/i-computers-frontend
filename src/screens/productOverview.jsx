import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ImageSlideShow from "../components/imageSlideShow";
import getFormatedPrice from "../Utils/price-format";
import { addToCart, getCart } from "../Utils/cart";

export default function ProductOverView() {
  const parms = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/" + parms.productId)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch products. Please try again.");
      });
  }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      {product == null ? (
        <h1>loading...</h1>
      ) : (
        <div className="w-full h-full flex">
          <div className="w-[50%] h-full flex justify-center items-center">
            <ImageSlideShow images={product.images} />
          </div>
          <div className="w-[50%] h-full flex flex-col p-5 justify-center">
            <h1 className="text-3xl font-bold mb-4">
              {product.name}
              {product.altNames.map((altNames, index) => {
                return (
                  <span
                    key={index}
                    className="text-gray-500 font-medium ms-1 me-1"
                  >
                    | {altNames}
                  </span>
                );
              })}
            </h1>
            <p className="text-lg  font-medium mb-2">
              <span>{product.brand || ""}</span>
              <span> - </span>
              <span>{product.model || ""}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">{product.productId}</p>
            <p className="text-2xl font-bold mb-4">
              {getFormatedPrice(product.price)}
            </p>
            {product.labeledPrice && (
              <p className="text-lg text-gray-500 line-through mb-4">
                {getFormatedPrice(product.labeledPrice)}
              </p>
            )}
            <p className="text-md mb-4">{product.description}</p>
            <div className="w-full h-[100px] flex justify-start items-center text-white font-bold text-2xl">
              <button
                onClick={() => {
                  addToCart(product, 1);
                  toast.success(product.name + "added to cart");
                }}
                className="px-6 py-3 bg-linear-to-br from-emerald-500 via-green-600 to-emerald-700 text-white rounded-lg hover:bg-green-700 cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-sm hover:shadow-green-500"
              >
                Add To Cart
              </button>
              <button
                onClick={() => {
                  console.log(getCart());
                }}
                className="px-6 py-3 ml-4 bg-linear-to-br from-accent/80 via-black/80 to-accent/60 text-white rounded-lg hover:bg-accent/80 cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-sm hover:shadow-accent/30"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
