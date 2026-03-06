import { Link } from "react-router-dom";
import getFormatedPrice from "../Utils/price-format";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <Link to={"/overview/" + product.productId}>
      <div className="bg-white rounded-[13px] w-[300px] h-[500px] shadow-lg m-4 hover:shadow-sm hover:shadow-gray-200">
        <div className="bg-white flex justify-center items-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-[280px] h-[250px] object-contain rounded-t-2xl transition-transform duration-300"
          />
        </div>

        <div className="p-6 w-full h-[250px]">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer max-w-[150px] line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex text-yellow-400 mb-1"></div>
              <p className="text-xs text-gray-400">Rated 4.0/5</p>
            </div>
          </div>

          <hr className="border-gray-200 my-3" />

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-[11px] font-bold text-gray-400">
                {product.model}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                {getFormatedPrice(product.price)}
              </p>
              {product.labeledPrice > product.price && (
                <p className="text-xs text-gray-400 line-through">
                  {getFormatedPrice(product.labeledPrice)}
                </p>
              )}
            </div>
          </div>

          <hr className="border-gray-200 mb-4" />

          <div className="flex justify-end items-center">
            <button className="px-6 py-2 bg-linear-to-br from-accent/80 via-black/70 to-accent/60 text-white rounded-lg hover:bg-accent/80 transition cursor-pointer">
              Click Here
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
