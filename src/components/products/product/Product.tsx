import { useEffect, useState } from "react";
import { GoShieldCheck } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi2";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { PiSealCheckLight } from "react-icons/pi";
import { SlPlane } from "react-icons/sl";
import { TbTruckReturn } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { useGetProductQuery } from "../../../redux/features/product/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { IProduct } from "../../../types/product.type";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import BtnAddToCart from "../../ui/BtnAddToCart";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetProductQuery(id as string);
  const product = (data?.data as IProduct) || {};

  // Destructure properties directly from the product
  const { _id, name, image, price, description, thumbnail, stock } = product;
  const { cartItems } = useAppSelector((state) => state.cart);
  const inCart = cartItems.find((item) => item.id === _id);
  const dispatch = useDispatch();

  const [thumbnailUrl, setThumbnailUrl] = useState(thumbnail);
  useEffect(() => {
    setThumbnailUrl(thumbnail);
  }, [thumbnail]);

  const handleIncrementQuantity = () => {
    if (stock <= quantity) {
      toast.warning("Out of stock");
    } else {
      setQuantity(quantity + 1);
    }
  };
  console.log(cartItems);
  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, id: product?._id, quantity }));
  };
  const handleBuyItNow = (product: IProduct) => {
    if (inCart) {
      navigate("/checkout");
    } else {
      handleAddToCart(product);
      navigate("/checkout");
    }
  };
  return (
    <section>
      <Breadcrumb className="my-5 py-6 bg-gray-100">
        <BreadcrumbList className="container mx-auto">
          <BreadcrumbItem className="text-xl text-black">
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-black text-2xl" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary text-xl">
              Your Shopping Cart
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative container mx-auto grid grid-cols-12 gap-24 mt-4 mb-20 ">
        <aside className="col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-3 space-y-4 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <img
                onClick={() => setThumbnailUrl(image)}
                key={index}
                src={image}
                alt={name}
                className={`${
                  thumbnailUrl === image ? "border" : ""
                } border-primary cursor-pointer transition-all duration-300`}
              />
            ))}
            <img
              src={thumbnail}
              alt=""
              onClick={() => setThumbnailUrl(thumbnail)}
              className={`${
                thumbnailUrl === thumbnail ? "border" : ""
              } border-primary cursor-pointer transition-all `}
            />
          </div>
          <img src={thumbnailUrl} alt={name} className="col-span-9" />
        </aside>
        <aside className="col-span-6">
          <div className="border-b border-gray-300 pb-8 mb-8">
            <h2 className="text-2xl font-bold pb-1">{name}</h2>
            <p className="text-xl text-gray-800">
              {stock > 0 ? (
                <span>{stock} In stock</span>
              ) : (
                <span className="text-rose-600 ">Out of stock</span>
              )}
            </p>
            <p className="text-primary text-2xl">${price} USD</p>
          </div>
          <p className=" text-gray-700 text-justify">{description}</p>
          <div className="flex items-center mt-10 gap-6 ">
            <div className="border-2 border-gray-300  font-bold text-xl flex items-center space-x-2">
              <span className="px-3 w-10">{quantity}</span>
              <div className="flex flex-col items-center border-l border-gray-300 ">
                <button
                  onClick={handleIncrementQuantity}
                  className="px-3 py-0.5 border-b border-gray-300  hover:text-primary"
                >
                  <HiOutlinePlus />
                </button>
                <button
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="px-3 py-0.5  hover:text-primary"
                >
                  <HiOutlineMinus />
                </button>
              </div>
            </div>
            <div onClick={() => handleAddToCart(product as IProduct)}>
              <BtnAddToCart
                className="w-full"
                title={
                  inCart
                    ? "Already in cart"
                    : stock <= 0
                    ? "Out of stock"
                    : "Add to cart"
                }
                disable={inCart ? true : false || stock <= 0}
              />
            </div>
            <Link
              to={"/checkout"}
              onClick={() => handleBuyItNow(product as IProduct)}
              className="rounded-sm text-white px-6 py-3.5 flex items-center justify-center gap-2 uppercase bg-black transition-all ease-in-out duration-300 group"
            >
              Buy It Now{" "}
              <MdOutlineShoppingCartCheckout
                size={22}
                className="group-hover:ml-5 transition-all  ease-in-out duration-300"
              />
            </Link>
          </div>
        </aside>
      </div>
      <div className="container mx-auto  grid grid-cols-4 gap-5">
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <SlPlane className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">WORLDWIDE SHIPPING</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <TbTruckReturn className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">FREE 60-DAY RETURNS</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <PiSealCheckLight className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">24 MONTH WARRANTY</p>
        </div>
        <div className="border border-gray-300 flex flex-col justify-center items-center w-full py-5 gap-y-3">
          <GoShieldCheck className="text-primary text-4xl" />
          <p className=" tracking-widest uppercase">100% SECURE CHECKOUT</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
