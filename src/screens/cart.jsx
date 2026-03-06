import { useState } from "react";
import { getCart } from "../Utils/cart";
import { BiMinus, BiPlus } from "react-icons/bi";

export default function Cart() {
  const [cart, setCart] = useState(getCart());
  return (
    <div className="w-full h-[calc(100vh-100px)] overflow-y-scroll ">
      <div className="w-full flex justify-center items-center flex-col gap-4 p-5">
        {cart.map((cartItem, index) => {
          return (
            <div
              key={index}
              className="w-[1000px] h-[150px] bg-white flex flex-row rounded-lg shadow overflow-hidden transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-gray-300"
            >
              <img
                className="h-[150px] aspect-square object-contain"
                src={cartItem.product.image}
                alt={cartItem.product.name}
              />
              <div className="w-[650px] flex flex-row">
                <div className="w-[300px] flex flex-col justify-center items-center">
                  <span className="font-bold mb-2">
                    {cartItem.product.name}
                  </span>
                  <span className="font-bold mb-2 text-gray-500">
                    {cartItem.product.productId} {cartItem.product.model}
                  </span>
                </div>
                <div className="w-[150px] flex justify-center items-center">
                  <span className="font-bold mb-2">
                    {cartItem.product.brand}
                  </span>
                </div>
                <div className="w-[200px] flex justify-center items-center">
                  <div className="w-[150px] h-[35px] border border-gray-500 rounded-full flex overflow-hidden">
                    <button className="w-[70px] h-full flex justify-center items-center  text-2xl font-bold text-gray-700 hover:bg-linear-to-br from-accent/80 via-black/70 to-accent/60 hover:text-white">
                      <BiMinus />
                    </button>
                    <span className="w-[70px] h-full flex justify-center items-center  text-lg font-bold text-gray-700">
                      {cartItem.qty}
                    </span>
                    <button className="w-[70px] h-full flex justify-center items-center  text-2xl font-bold text-gray-700 hover:bg-linear-to-br from-accent/80 via-black/70 to-accent/60 hover:text-white">
                      <BiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[200px] bg-accent"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
