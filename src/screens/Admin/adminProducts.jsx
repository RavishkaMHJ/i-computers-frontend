import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import getFormatedPrice from "../../Utils/price-format";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { LuTrash2 } from "react-icons/lu";
import toast from "react-hot-toast";
import DeleteModel from "../../components/deleteModel";

const sampleProducts = [
  {
    productId: "p001",
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear wireless headphones",
    price: 12999,
    labledPrice: 13500,
    category: "Electronics",
    brand: "SoundMax",
    stock: 45,
    image: "/images/products/headphones.jpg",
    isVisible: true,
    model: "G7834H",
  },
  {
    productId: "p002",
    name: "Smart Watch",
    description: "Fitness tracking smart watch with heart rate monitor",
    price: 8900,
    labledPrice: 9200,
    category: "Wearables",
    brand: "FitPro",
    stock: 30,
    image: "/images/products/smartwatch.jpg",
    isVisible: true,
    model: "D7834R",
  },
  {
    productId: "p003",
    name: "Gaming Mouse",
    description: "RGB wired gaming mouse with adjustable DPI",
    price: 3999,
    labledPrice: 4500,
    category: "Accessories",
    brand: "GameX",
    stock: 60,
    image: "/images/products/mouse.jpg",
    isVisible: true,
    model: "DT6834H",
  },
  {
    productId: "p004",
    name: "Laptop Backpack",
    description: "Water-resistant backpack for 15-inch laptops",
    price: 4999,
    labledPrice: 5800,
    category: "Bags",
    brand: "UrbanCarry",
    stock: 25,
    image: "/images/products/backpack.jpg",
    isVisible: true,
    model: "G7M34M",
  },
  {
    productId: "p005",
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass",
    price: 5950,
    labledPrice: 6400,
    category: "Electronics",
    brand: "BeatBox",
    stock: 40,
    image: "/images/products/speaker.jpg",
    isVisible: true,
    model: "M6754A",
  },
  {
    productId: "p006",
    name: "Gaming Mouse",
    description: "RGB wired gaming mouse with adjustable DPI",
    price: 3999,
    labledPrice: 4500,
    category: "Accessories",
    brand: "GameX",
    stock: 60,
    image: "/images/products/mouse.jpg",
    isVisible: true,
    model: "DT6834H",
  },
  {
    productId: "p007",
    name: "Gaming Mouse",
    description: "RGB wired gaming mouse with adjustable DPI",
    price: 3999,
    labledPrice: 4500,
    category: "Accessories",
    brand: "GameX",
    stock: 60,
    image: "/images/products/mouse.jpg",
    isVisible: true,
    model: "DT6834H",
  },
];

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const token = localStorage.getItem("token");

      axios
        .get(import.meta.env.VITE_API_URL + "/products", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
          console.log(response.data);
        });
    }
  }, [loading]);

  return (
    <div className="w-full h-full overflow-y-scroll hide-scroll-track overflow-x-scroll flex p-2 flex-col">
      <div className="flex items-center justify-between gap-3 px-5 py-4 bg-primary border-b border-secondary/10 rounded-tr-[7px] rounded-tl-[7px]">
        <div>
          <h2 className="text-lg font-semibold text-secondary tracking-[1px]">
            Manage Products
          </h2>
          <p className="text-sm text-secondary/70">
            Manage your catalog at a glance
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-secondary">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {products?.length ?? 0} items
        </span>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="min-w-[1100px] w-full text-sm relative">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="border-b border-secondary/10">
              <th className="px-5 py-3  text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Product ID
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-tight text-secondary/70">
                Name
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Price
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Labeled
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Category
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Image
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Visibility
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Brand
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Model
              </th>
              <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-secondary/70">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-secondary/10">
            {products.map((item) => (
              <tr
                key={item.productId}
                className=" even:bg-white hover:bg-primary/50 transition-colors"
              >
                <td className="px-5 py-4 font-medium text-secondary whitespace-nowrap text-center text-[12px]">
                  {item.productId}
                </td>

                <td className="px-5 py-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-secondary text-center text-[12px]">
                      {item.name}
                    </span>
                    <span className="text-xs text-secondary/60 text-center">
                      {item.category || "Uncategorized"}
                    </span>
                  </div>
                </td>

                <td
                  className="px-5 py-4 font-semibold text-secondary whitespace-nowrap text-[12px]"
                  text-center
                >
                  {getFormatedPrice(item.price)}
                </td>

                <td className="px-5 py-4 text-secondary/80 whitespace-nowrap text-center text-[12px]">
                  {getFormatedPrice(item.labledPrice)}
                </td>

                <td className="px-5 py-4">
                  <span className="flex items-center justify-center rounded-full bg-secondary/5 px-3 py-1 text-xs font-medium text-secondary text-center text-[12px]">
                    {item.category}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="h-12 w-12 rounded-xl object-cover ring-1 ring-secondary/10 shadow-sm bg-primary"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="px-5 py-4">
                  {item.isVisible ? (
                    <span className="flex items-center justify-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-secondary text-center text-[12px]">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Visible
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary/80 text-center text-[12px]">
                      <span className="h-2 w-2 rounded-full bg-secondary/40" />
                      Hidden
                    </span>
                  )}
                </td>

                <td className="px-5 py-4 text-secondary whitespace-nowrap text-center text-[12px]">
                  {item.brand}
                </td>

                <td className="px-5 py-4 text-secondary whitespace-nowrap text-center text-[12px]">
                  {item.model}
                </td>
                <td className="px-5 py-4 text-secondary whitespace-nowrap text-center ">
                  <div className="flex justify-center items-center gap-3 text-[20px]">
                    <Link to="/admin/update-product" state={item}>
                      <AiOutlineEdit className="cursor-pointer hover:text-accent" />
                    </Link>
                    <DeleteModel product={item} setLoading={setLoading} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="px-5 py-3 bg-white border-t border-secondary/10 text-xs text-secondary/60">
        Tip: Scroll horizontally on small screens to view all columns.
      </div>

      <Link
        to="/admin/add-Product"
        className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center hover:bg-accent/80 rounded-full fixed bottom-16 right-20 cursor-pointer"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
