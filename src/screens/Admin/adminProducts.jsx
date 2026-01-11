import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  return (
    <div className="w-full h-full overflow-y-scroll flex p-2">
      <Link
        to="/admin/add-Product"
        className="text-white bg-accent w-[50px] h-[50px] flex justify-center items-center hover:bg-accent/80 rounded-full fixed bottom-16 right-20 cursor-pointer"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
