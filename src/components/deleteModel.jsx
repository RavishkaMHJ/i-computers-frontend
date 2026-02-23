import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteModel(props) {
  const [isVisible, setIsVisible] = useState(false);
  const product = props.product;
  const setLoading = props.setLoading;
  return (
    <div>
      <LuTrash2
        className="cursor-pointer hover:text-red-500"
        onClick={() => {
          setIsVisible(true);
        }}
      />
      {isVisible && (
        <div className="fixed z-100 bg-black/50 w-screen h-screen top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] h-[200px] bg-white relative rounded-[13px]">
            <button
              onClick={() => {
                setIsVisible(false);
              }}
              className="w-10 h-10  text-red-600 absolute right-2 text-[15px] font-bold hover:bg-red-600 hover:text-white cursor-pointer"
            >
              X
            </button>
            <h1 className="text-[15px] font-semibold mt-12">
              Are you sure you want to delete the product with product id{" "}
              {product.productId}?
            </h1>
            <div className="flex text-sm justify-center items-center gap-5 mt-10">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
                onClick={() => {
                  const token = localStorage.getItem("token");

                  axios
                    .delete(
                      import.meta.env.VITE_API_URL +
                        "/products/" +
                        product.productId,
                      {
                        headers: {
                          Authorization: "Bearer " + token,
                        },
                      }
                    )
                    .then(() => {
                      setIsVisible(false);
                      toast.success("Product deleted successfully");
                      setLoading(true);
                    })
                    .catch((error) => {
                      console.log(error);
                      toast.error(
                        error?.response?.data?.message ||
                          "Failed to delete the product. Please try again."
                      );
                      setIsVisible(false);
                    });
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setIsVisible(false);
                }}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
