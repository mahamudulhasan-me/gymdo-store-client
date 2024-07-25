import {
  HiMiniCheckBadge,
  HiOutlineHeart,
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { PiEmpty } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import productImg from "../../assets/images/products/12.jpg";
import { addToCart } from "../../redux/features/cart/cartSlice";
import {
  closeQuickViewModal,
  openQuickViewModal,
} from "../../redux/features/quickViewProduct/quickViewSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IProduct } from "../../types/product.type";
import ProductQuickViewModal from "./ProductQuickView";

export interface IProductCardProps {
  key?: string;
  productDetails: IProduct;
}
const ProductCard = ({ productDetails }: IProductCardProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const { _id, name, price, thumbnail, stock } = productDetails || {};
  const inCart = cartItems.find((item) => item.id === productDetails?._id);

  const handleOpenModal = (product: IProduct) => {
    dispatch(
      openQuickViewModal({
        product: product,
        onClose: () => dispatch(closeQuickViewModal()),
      })
    );
  };

  const handleAddToCart = () => {
    if (!inCart) {
      dispatch(
        addToCart({
          ...productDetails,
          id: productDetails?._id,
          quantity: 1,
        })
      );
      toast.success("Added to cart");
    }
  };

  return (
    <>
      <ProductQuickViewModal />
      <div>
        <div className="relative group overflow-hidden">
          <img src={thumbnail || productImg} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-slate-950/40 transition-transform ease-in-out duration-300 transform scale-0 group-hover:scale-100 origin-center">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-2">
              {inCart ? (
                <button
                  disabled
                  className=" bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-500"
                >
                  <HiMiniCheckBadge size={24} />
                  <span className="tooltiptext">Already in cart</span>
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  disabled={stock <= 0}
                  className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-300"
                >
                  {stock > 0 ? <HiOutlineShoppingCart /> : <PiEmpty />}
                  <span className="tooltiptext">
                    {stock > 0 ? "Add to cart" : "Out of stock"}
                  </span>
                </button>
              )}

              <button
                onClick={() => handleOpenModal(productDetails)}
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
          <Link
            to={`/products/${_id}`}
            className="text-lg hover:text-primary transition-all "
          >
            {name}
          </Link>
          <p className="text-primary">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
