import {
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import product from "../../assets/images/products/12.jpg";
const ProductCard = () => {
  return (
    <div>
      <div className="relative group overflow-hidden">
        <img src={product} alt="" />
        <div className="absolute top-0 right-80 group-hover:right-0 w-full h-full bg-slate-950/40 transition-all ease-in-out duration-300 overflow-hidden">
          <div className="absolute top-0 right-80 group-hover:right-0 transition-all duration-500 w-full h-full">
            <div className="flex justify-center items-center h-full gap-1">
              <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-all hover:transition-all text-xl tooltip">
                <HiOutlineShoppingCart />
                <span className="tooltiptext">Add to Cart</span>
              </button>
              <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-all hover:transition-all text-xl tooltip">
                <HiOutlineMagnifyingGlass />
                <span className="tooltiptext">QuickView</span>
              </button>
              <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white transition-all hover:transition-all text-xl tooltip">
                <HiOutlineHeart />
                <span className="tooltiptext">Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-gray-700 mt-6 ">
        <Link to="" className="text-lg">
          Tanktop Men's 1
        </Link>
        <p className="text-primary">$10.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
