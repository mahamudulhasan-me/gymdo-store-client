import { useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/product.type";
import { ProductQuickViewModal } from "./ProductQickView";

export interface IProductCardProps {
  key?: string;
  productDetails: IProduct;
}
const ProductCard = ({ productDetails }: IProductCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [productId, setProductId] = useState("");

  const { _id, name, price, thumbnail } = productDetails || {};

  const handleOpenModal = () => {
    setModalOpen(true);
    setProductId(_id as string);
  };

  return (
    <div>
      {productId && (
        <ProductQuickViewModal
          id={productId}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div className="relative group overflow-hidden">
        <img src={thumbnail} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950/40 transition-transform ease-in-out duration-300 transform scale-0 group-hover:scale-100 origin-center">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2">
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-300">
              <HiOutlineShoppingCart />
              <span className="tooltiptext">Add to Cart</span>
            </button>

            <button
              onClick={handleOpenModal}
              className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-400"
            >
              <HiOutlineMagnifyingGlass />
              <span className="tooltiptext">QuickView</span>
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500">
              <HiOutlineHeart />
              <span className="tooltiptext">Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center  text-gray-700 mt-6">
        <Link to="" className="text-lg">
          {name}
        </Link>
        <p className="text-primary">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
