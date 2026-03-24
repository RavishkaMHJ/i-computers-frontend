import { useState } from "react";
import { getCartTotal } from "../Utils/cart";
import { BiMinus, BiPlus } from "react-icons/bi";
import getFormatedPrice from "../Utils/price-format";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckOut() {
  const location = useLocation();
  const [cart, setCart] = useState(location.state || []);
  const navigate = useNavigate();

  if (location.state == null) {
    navigate("/products");
  }

  return (
    <div className="w-full h-[calc(100vh-110px)] overflow-y-scroll ">
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
                    <button
                      onClick={() => {
                        const newCart = [...cart];
                        newCart[index].qty = newCart[index].qty - 1;
                        if (newCart[index].qty <= 0) {
                          newCart.splice(index, 1);
                        }
                        setCart(newCart);
                      }}
                      className="w-[70px] h-full cursor-pointer flex justify-center items-center  text-2xl font-bold text-gray-700 hover:bg-linear-to-br from-accent/80 via-black/70 to-accent/60 hover:text-white"
                    >
                      <BiMinus />
                    </button>
                    <span className="w-[70px] h-full flex justify-center items-center  text-lg font-bold text-gray-700">
                      {cartItem.qty}
                    </span>
                    <button
                      onClick={() => {
                        const newCart = [...cart];
                        newCart[index].qty = newCart[index].qty + 1;
                        setCart(newCart);
                      }}
                      className="w-[70px] h-full cursor-pointer flex justify-center items-center  text-2xl font-bold text-gray-700 hover:bg-linear-to-br from-accent/80 via-black/70 to-accent/60 hover:text-white"
                    >
                      <BiPlus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[200px] flex flex-col items-end justify-center pr-5">
                {cartItem.product.labeledPrice > cartItem.product.price && (
                  <span className="font-bold mb-2 text-gray-500 line-through text-[12px]">
                    {getFormatedPrice(cartItem.product.labeledPrice)}
                  </span>
                )}
                <span className="font-bold mb-2 text-secondary tex-[14px]">
                  {getFormatedPrice(cartItem.product.price)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[200px] h-[150px] bg-white fixed bottom-5 right-6 flex flex-col justify-center items-center rounded-lg shadow overflow-hidden transition-transform duration-500 hover:scale-102 hover:shadow-sm hover:shadow-gray-300">
        <button className="px-6 py-3 mb-3 bg-linear-to-br from-accent/80 via-black/80 to-accent/60 text-white rounded-lg hover:bg-accent/80 cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-sm hover:shadow-accent/30">
          Buy Now
        </button>
        <span className="font-bold mb-2 text-secondary tex-[14px] border-b-4 border-double">
          {getFormatedPrice(getCartTotal(cart))}
        </span>
      </div>
    </div>
  );
}
