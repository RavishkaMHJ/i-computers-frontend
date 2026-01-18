import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminAddProductPage() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [altNames, setAltNames] = useState("");
  const [price, setPrice] = useState("");
  const [labelPrice, setLabeldPrice] = useState("");
  const [category, setCategory] = useState("others");
  const [brand, setBrand] = useState("Generic");
  const [model, setModel] = useState("Standard");
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  async function AddProduct() {
    try {
      const token = localStorage.getItem("token");

      if (token == null) {
        toast.error("You must loggin in to Add Product");
        window.location.href("/login");
        return;
      }

      await axios.post(
        import.meta.env.VITE_API_URL + "/products",
        {
          productId: productId,
          name: name,
          description: description,
          altNames: altNames.split(","),
          price: price,
          labelPrice: labelPrice,
          category: category,
          brand: brand,
          model: model,
          isVisible: isVisible,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Product added successfully");
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to add product");
    }
  }

  return (
    <div className="w-full max-h-full flex flex-wrap px-2.5 gap-2 tracking-[1px] overflow-y-scroll hide-scroll-track">
      <span className="font-bold text-[25px] sticky top-0 px-3 py-2 rounded-tr-[7px] rounded-tl-[7px] bg-white w-full">
        Add New Product
      </span>
      <div className="w-full flex gap-3">
        <div className="w-[50%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Product ID </label>
          <input
            value={productId}
            onChange={(e) => {
              setProductId(e.target.value);
            }}
            type="text"
            placeholder="Ex: ID001"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          ></input>
        </div>
        <div className="w-[50%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Product Name </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Ex: Logitech G502 Hero Gaming Mouse"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          ></input>
        </div>
      </div>
      <div className="w-full h-[150px] flex flex-col gap-2">
        <label className="text-[15px] font-bold ml-2">
          Product Description
        </label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Add your product details here"
          className="border-2 border-accent rounded-[7px] h-[100px] p-2 focus:outline-none text-[13px]"
        ></textarea>
      </div>
      <div className="w-full h-[90px] flex flex-col gap-2">
        <label className="text-[15px] font-bold ml-2">
          Alternative Names (Comma Separated)
        </label>
        <input
          value={altNames}
          onChange={(e) => {
            setAltNames(e.target.value);
          }}
          type="text"
          placeholder="EX: Laptop, Notebook, Desktop Computer"
          className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
        ></input>
      </div>

      <div className="w-full flex gap-3">
        <div className="w-[50%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Price </label>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="number"
            placeholder="Ex: 5000"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          ></input>
        </div>
        <div className="w-[50%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Labled Price </label>
          <input
            value={labelPrice}
            onChange={(e) => {
              setLabeldPrice(e.target.value);
            }}
            type="number"
            placeholder="Ex: 6000"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          ></input>
        </div>
      </div>
      <div className="w-full flex gap-3">
        <div className="w-[25%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Category </label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          >
            <option value="Others">Others</option>
            <option value="Laptops">Laptops</option>
            <option value="Desktops">Desktops</option>
            <option value="Components">Components</option>
            <option value="Accessories">Accessories</option>
            <option value="Peripherals">Peripherals</option>
          </select>
        </div>
        <div className="w-[25%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Brand </label>
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            type="text"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          >
            <option value="Generic">Generic</option>
            <option value="Dell">Dell</option>
            <option value="Hp">Hp</option>
            <option value="Acer">Acer</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Asus">Asus</option>
            <option value="Msi">Msi</option>
          </select>
        </div>
        <div className="w-[25%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Model </label>
          <input
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
            type="text"
            placeholder="Ex: G502 Hero"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          ></input>
        </div>
        <div className="w-[25%] h-[90px] flex flex-col gap-2">
          <label className="text-[15px] font-bold ml-2">Is Visible </label>
          <select
            value={isVisible}
            onChange={(e) => {
              setIsVisible(e.target.value);
            }}
            type="text"
            className="border-2 border-accent rounded-[7px] h-[50px] p-2 focus:outline-none text-[13px]"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </div>
      <div className="w-full h-[55px] sticky bottom-0 px-3 py-2 rounded-br-[7px] items-center justify-end rounded-bl-[7px] bg-white flex gap-3">
        <button className="bg-secondary/30 hover:bg-secondary/20 w-[100px] h-10 rounded-[7px] text-[18px] text-white font-semibold cursor-pointer">
          Cancel
        </button>
        <button
          onClick={AddProduct}
          className="bg-accent hover:bg-accent/90 w-[150px] h-10 rounded-[7px] text-[18px] text-white font-semibold cursor-pointer outline-none"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
