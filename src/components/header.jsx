import { BiShoppingBag } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-accent h-[100px] flex justify-center items-center">
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-accent/60"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full"></div>

      <div className="h-full w-[200px] flex justify-center items-center absolute left-10">
        <img
          src="/logo.png"
          alt="Real PC Solutions h-[50px] object-cover z-100"
        />
      </div>
      <div className="h-full flex justify-center items-center z-100">
        <Link to="/" className="text-white mx-4 hover:border-b-2">
          Home
        </Link>
        <Link to="/products" className="text-white mx-4 hover:border-b-2">
          Products
        </Link>
        <Link to="/about" className="text-white mx-4 hover:border-b-2">
          About
        </Link>
        <Link to="/contact" className="text-white mx-4 hover:border-b-2">
          Contact
        </Link>
      </div>
      <Link to="/cart" className="mx-4 absolute right-20 cursor-pointer">
        <BiShoppingBag size={30} color="white" />
      </Link>
      <Link to="/login" className="mx-4 absolute right-10 cursor-pointer">
        <FaRegUser size={25} color="white" />
      </Link>
    </header>
  );
}
