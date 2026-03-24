import { Link } from "react-router-dom";
import getFormatedPrice from "../Utils/price-format";

export default function ProductCard(props) {
  const product = props.product;

  return (
    <Link to={"/overview/" + product.productId}>
      <div className="relative w-[280px] bg-[#fafafa] shadow-md hover:shadow-lg transition duration-300 m-4 rounded-md overflow-hidden">
        <span className="absolute top-4 left-0 bg-red-500 text-white text-[11px] z-10 font-bold px-3 py-0.5 uppercase">
          Sale
        </span>

        <div className="flex items-center justify-center h-[200px] bg-white p-6 relative group">
          <img
            src={product.images[0]}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-opacity duration-500 group-hover:opacity-0"
          />

          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="max-h-full max-w-full object-contain absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>

        <div className="p-4 flex flex-col h-[180px]">
          <div className="mb-2">
            {product.altNames.slice(0, 2).map((altNames, index) => (
              <span
                key={index}
                className="text-gray-400 text-[10px] uppercase font-semibold mr-1"
              >
                {altNames}
                {index !== 1 && " |"}
              </span>
            ))}
          </div>

          <h4 className="text-[14px] font-semibold text-gray-800 mb-2 uppercase line-clamp-1">
            {product.name}
          </h4>

          <p className="text-gray-500 text-[11px] line-clamp-2">
            {product.description}
          </p>

          <div className="border-t mt-3 pt-3 flex items-center">
            <div className="flex items-center gap-4">
              {product.labeledPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  {getFormatedPrice(product.labeledPrice)}
                </span>
              )}

              <span className="text-[15px] font-semibold text-accent">
                {getFormatedPrice(product.price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
