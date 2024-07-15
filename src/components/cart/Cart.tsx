import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi2";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";

export function Cart() {
  const { totalItems, total, cartItems } = useAppSelector(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  console.log(cartItems[0]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <HiOutlineShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full  px-1 py-0.5 h-fit w-fit text-xs font-medium bg-primary text-white">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-[28rem]">
        <SheetHeader className="border-b">
          <div className="flex items-center text-2xl">
            <p className="px-4 py-2 border-r w-12">{totalItems}</p>
            <p className="px-4 py-2 text-center w-[77%] border-r">
              Shopping Cart
            </p>
          </div>
        </SheetHeader>
        <div className="p-4 ">
          {cartItems.map((item) => (
            <div className="flex items-center justify-between border-b py-5">
              <aside className="flex items-center gap-4">
                <img src={item.image} alt="" className="size-24" />
                <div className="space-y-1">
                  <h3 className="text-xl">{item.name}</h3>
                  <h3 className="text-xl">QTY: {item.quantity}</h3>
                  <p className="text-lg">${item.price}.00</p>
                </div>
              </aside>
              <div className="flex flex-col items-center border">
                <button
                  onClick={() => dispatch(incrementQuantity(item))}
                  className="px-3 py-0.5 border-b hover:text-primary"
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
              <button onClick={() => dispatch(removeFromCart(item))}>
                <HiOutlineTrash />
              </button>
            </div>
          ))}
          {total}
        </div>

        <SheetFooter className="absolute bottom-0">
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
