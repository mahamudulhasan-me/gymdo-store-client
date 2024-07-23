import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const TAX_RATE = 0.01; // 10% tax rate
const SHIPPING = 7;

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cartItems, total, totalItems } = useAppSelector(
    (state) => state.cart
  );

  const subtotal = total; // assuming `total` is the sum of all item prices
  const tax = subtotal * TAX_RATE;
  const totalWithTax = subtotal + tax;

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
      <div className="relative container mx-auto md:grid grid-cols-12 mt-4 md:mb-20 mb-10 gap-5 space-y-5 md:space-y-0">
        <aside className="col-span-9 ">
          <div className="border-x border-t border-gray-300">
            <div className="grid grid-cols-12 border-b border-gray-300  divide-x divide-gray-300 uppercase">
              <p className="col-span-5 p-3">Product Name</p>
              <p className="col-span-2 p-3 text-center">Price</p>
              <p className="col-span-2 p-3 text-center">Quantity</p>
              <p className="col-span-2 p-3 text-center">Total</p>
              <p className="col-span-1 p-3 text-center"></p>
            </div>
            {totalItems <= 0 ? (
              <div className=" border-b border-gray-300  text-rose-600 min-h-60 flex flex-col justify-center items-center text-xl space-y-4">
                <p>Your cart is currently empty!</p>
                <Link
                  to="/products"
                  className="bg-gray-950  text-white py-3 rounded-sm px-5 flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300 text-base"
                >
                  Go To Shop <FiShoppingBag size={22} />
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  className="grid grid-cols-12 items-center border-b border-gray-300"
                  key={item.id}
                >
                  <div className="col-span-5 flex items-center gap-4 p-2 ">
                    <img src={item.image} alt="" className="size-24" />
                    <p className="text-lg hover:text-primary transition-all">
                      <Link to="">{item.name}</Link>
                    </p>
                  </div>
                  <p className="col-span-2 p-3 text-center text-lg">
                    ${item.price}.00
                  </p>
                  <div className="col-span-2 border border-gray-300  text-lg flex items-center justify-center space-x-2 w-24 mx-auto shadow-md">
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
              ))
            )}
          </div>
          {totalItems > 0 && (
            <Link
              to="/products"
              className="bg-gray-950 w-fit  mt-5 text-white py-4 rounded-sm px-5 flex items-center justify-center gap-2 uppercase  hover:bg-primary transition-all ease-in-out duration-300 text-base"
            >
              Continue Shopping <FiShoppingBag size={22} />
            </Link>
          )}
        </aside>
        <aside className="col-span-3">
          <div className="space-y-2">
            <p className="text-lg flex items-center justify-between">
              <span>{totalItems} Items</span>{" "}
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-lg flex items-center justify-between">
              <span>Shippings</span> <span>$7.00</span>
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg flex items-center justify-between">
              <span>Total (tax incl.)</span>{" "}
              <span>${(totalWithTax + SHIPPING).toFixed(2)}</span>
            </p>
          </div>
          <button
            disabled={totalItems <= 0}
            onClick={() => navigate("/checkout")}
            className="rounded-sm mt-5 text-white p-4 w-full flex items-center justify-center gap-2 uppercase bg-primary transition-all ease-in-out duration-300 group"
          >
            Proceed to Check Out{" "}
            <MdOutlineShoppingCartCheckout
              size={22}
              className="group-hover:ml-5 transition-all  ease-in-out duration-300"
            />
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Cart;
