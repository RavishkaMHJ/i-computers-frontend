import { FaRegListAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoIosSettings, IoMdNotificationsOutline } from "react-icons/io";
import {
  MdAdminPanelSettings,
  MdMenu,
  MdOutlineInventory2,
} from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminProductsPage from "./Admin/adminProducts.jsx";
import AdminAddProductPage from "./Admin/adminAddProduct.jsx";
import AdminUpdateProductPage from "./Admin/adminUpdateProduct.jsx";

export default function AdminPage() {
  return (
    <div className="w-full h-screen bg-primary flex border-10 border-secondary">
      <div className="w-[300px] h-full bg-secondary flex flex-col p-2 gap-2">
        <div className="h-20 flex items-center gap-4 px-6 border-b border-white/10">
          <div className="p-2 bg-accent rounded-xl shadow-[0_0_10px_#2bb15b80]">
            <MdAdminPanelSettings className="text-white text-3xl" />
          </div>

          <div className="flex flex-col uppercase text-primary tracking-wider">
            <span className="font-bold text-sm">Admin Panel</span>
            <span className="text-primary/60 text-[11px]">
              Real PC Solutions
            </span>
          </div>
        </div>
        <div className="flex flex-col px-4 gap-3 text-lg">
          <Link
            className="text-white p-2 flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:border-l-2"
            to="/admin/"
          >
            <FaRegListAlt />
            Orders
          </Link>
          <Link
            className="text-white p-2 flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:border-l-2"
            to="/admin/products"
          >
            <MdOutlineInventory2 />
            Products
          </Link>
          <Link
            className="text-white p-2 flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:border-l-2"
            to="/admin/users"
          >
            <HiUserGroup />
            Users
          </Link>
        </div>
      </div>
      <div className="w-[calc(100%-300px)] h-full">
        <div className="w-full h-full rounded-0 bg-primary shadow-xl p-6 flex flex-col gap-3">
          <div className="w-full h-14 flex rounded-[7px] bg-white/50 p-1.5">
            <div className="h-full w-[70%] flex items-center p-2 gap-4">
              <MdMenu className="text-2xl cursor-pointer" />
              <div className="flex flex-col">
                <span className="uppercase text-secondary/40 text-[9px] tracking-[2px] font-semibold">
                  overview
                </span>
                <span className="uppercase text-secondary text-[12px] tracking-[2px] font-bold">
                  Dashboard
                </span>
              </div>
            </div>
            <div className="h-full w-[30%] flex items-center justify-end gap-3 p-2">
              <div className="rounded-full w-[31px] h-[31px] border border-secondary/10 p-1.5 flex justify-center items-center">
                <IoMdNotificationsOutline />
              </div>
              <div className="rounded-full w-[31px] h-[31px] border border-secondary/10 p-1.5  flex justify-center items-center">
                <IoIosSettings />
              </div>
              <div className="flex items-center gap-2 border-2 border-secondary/10 py-1 px-3 rounded-full">
                <div className="flex flex-col">
                  <span className="uppercase text-secondary/40 text-[9px] tracking-[2px] font-semibold">
                    Administrator
                  </span>
                  <span className="uppercase text-secondary text-[8px] tracking-[2px] font-bold">
                    Admin User
                  </span>
                </div>
                <div className="rounded-full w-[31px] h-[31px] border border-secondary/10 p-px">
                  <img src="/man.png" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[calc(100%-56px)] bg-white/50 rounded-[7px] p-2">
            <Routes>
              <Route path="/*" element={<h1>Orders</h1>} />
              <Route path="/products" element={<AdminProductsPage />} />
              <Route path="/users" element={<h1>users</h1>} />
              <Route path="/add-product" element={<AdminAddProductPage />} />
              <Route
                path="/update-product"
                element={<AdminUpdateProductPage />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
