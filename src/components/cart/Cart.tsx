import { HiOutlineShoppingCart } from "react-icons/hi2";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const Cart = () => {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="right-0 left-2/3 -top-24 transform transition-transform duration-300 ease-in-out">
          <div>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <p>content</p>
            {/* <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter> */}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
