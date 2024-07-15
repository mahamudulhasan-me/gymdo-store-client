import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IProduct } from "../types/product.type";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, total } = useAppSelector((state) => state.cart);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, id: product?._id, quantity }));
  };
  console.log(cartItems[0]);
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
      <div className="container mx-auto grid grid-cols-12 mt-4 mb-20">
        <aside className="col-span-9 border-x border-t border-gray-300">
          <div className="grid grid-cols-12 border-b border-gray-300  divide-x divide-gray-300 uppercase">
            <p className="col-span-5 p-3">Product Name</p>
            <p className="col-span-2 p-3 text-center">Price</p>
            <p className="col-span-2 p-3 text-center">Quantity</p>
            <p className="col-span-2 p-3 text-center">Total</p>
            <p className="col-span-1 p-3 text-center"></p>
          </div>

          {cartItems.map((item) => (
            <div className="grid grid-cols-12 items-center border-b border-gray-300">
              <div className="col-span-5 flex items-center gap-4 p-2 ">
                <img src={item.image} alt="" className="size-24" />
                <p className="text-lg hover:text-primary transition-all">
                  <Link to="">Reebok resistance tube</Link>
                </p>
              </div>
              <p className="col-span-2 p-3 text-center text-lg">
                ${item.price}.00
              </p>
              <div className="col-span-2 border border-gray-300  text-lg flex items-center justify-center space-x-2 w-24 mx-auto">
                <span className="px-3 w-10">{item.quantity}</span>
                <div className="flex flex-col items-center border-l border-gray-300 ">
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    className="px-3 py-0.5 border-b border-gray-300  hover:text-primary"
                  >
                    <HiOutlinePlus />
                  </button>
                  <button
                    disabled={item.quantity === 1}
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="px-3 py-0.5  hover:text-primary"
                  >
                    <HiOutlineMinus />
                  </button>
                </div>
              </div>
              <p className="col-span-2 p-3 text-center text-lg">
                ${item.quantity * item.price}.00
              </p>
              <button
                className="col-span-1 text-center p-3 text-lg hover:text-primary flex justify-center items-center"
                onClick={() => dispatch(removeFromCart(item))}
              >
                <HiOutlineTrash />
              </button>
            </div>
          ))}
        </aside>
        <aside className="col-span-3"></aside>
      </div>
    </section>
  );
};

export default Cart;
