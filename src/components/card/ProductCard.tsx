import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import product from "../../assets/images/products/12.jpg";
import { DialogCloseButton } from "./ProductQickView";

const ProductCard = () => {
  return (
    <div>
      <div className="relative group overflow-hidden">
        <img src={product} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950/40 transition-transform ease-in-out duration-300 transform scale-0 group-hover:scale-100 origin-center">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2">
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-300">
              <HiOutlineShoppingCart />
              <span className="tooltiptext">Add to Cart</span>
            </button>

            <DialogCloseButton />
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500">
              <HiOutlineHeart />
              <span className="tooltiptext">Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center  text-gray-700 mt-6">
        <Link to="" className="text-lg">
          Tanktop Men's 1
        </Link>
        <p className="text-primary">$10.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
