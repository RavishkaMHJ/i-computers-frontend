import { BiShoppingBag } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full sticky top-0 backdrop-blur-xl h-[110px] flex flex-col justify-center items-center z-100">
      <div className="w-full h-[45px] bg-accent flex justify-end items-center px-15 gap-3">
        <Link
          to="/login"
          className="cursor-pointer text-white font-medium hover:border-b-2"
        >
          Login
        </Link>
        <Link
          to="/login"
          className="cursor-pointer text-white font-medium hover:border-b-2"
        >
          Sign Up
        </Link>
      </div>
      <div className="w-full sticky top-0 backdrop-blur-xl bg-black/90 h-[65px] flex justify-center items-center z-100">
        <div className="h-full w-[150px] flex justify-center items-center absolute left-10">
          <img
            src="/logo.png"
            alt="Real PC Solutions h-[50px] object-cover z-100"
          />
        </div>
        <div className="h-full flex justify-center text-[16px] font-medium items-center z-100">
          <Link to="/" className="text-white mx-4 hover:border-b-2">
            Home
          </Link>
          <Link to="/products" className="text-white mx-4 hover:border-b-2">
            Products
          </Link>
          <a
            href="/#about"
            className="text-white mx-4 hover:border-b-2 cursor-pointer"
          >
            About
          </a>
          <a
            href="/#contact"
            className="text-white mx-4 hover:border-b-2 cursor-pointer"
          >
            Contact
          </a>
        </div>
        <Link to="/cart" className="mx-6 absolute right-10 cursor-pointer">
          <BiShoppingBag size={30} color="white" />
        </Link>
      </div>
    </header>
  );
}
