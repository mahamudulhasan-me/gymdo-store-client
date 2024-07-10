import { useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMinus,
  HiOutlinePlus,
} from "react-icons/hi2";
import product1 from "../../assets/images/products/12.jpg";
import BtnAddToCart from "../ui/BtnAddToCart";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
export function DialogCloseButton() {
  const [quantity, setQuantity] = useState(1);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-white rounded-full p-2 hover:bg-primary hover:text-white  text-xl tooltip transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-500 delay-400">
          <HiOutlineMagnifyingGlass />
          <span className="tooltiptext">QuickView</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-screen grid grid-cols-2 space-x-3">
        <div>
          <img src={product1} alt="" />
          <div className="grid grid-cols-3 gap-4 mt-2">
            <img src={product1} alt="" />
            <img src={product1} alt="" />
            <img src={product1} alt="" />
          </div>
        </div>
        <div>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold pb-1">Dual Adjustable Pulley</h2>
            <p>$590.00 USD</p>
          </div>
          <p className="pt-4 text-gray-700">
            We Will Always Be With You These models have varying features
            depending on which you choose and also come with different...
          </p>
          <div className="flex items-center mt-10 gap-6">
            <div className="border-2 font-bold text-xl flex items-center space-x-2">
              <span className="px-3 w-10">{quantity}</span>
              <div className="flex flex-col items-center border-l">
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-0.5 border-b hover:text-primary"
                >
                  <HiOutlinePlus />
                </button>
                <button
                  disabled={quantity === 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="px-3 py-0.5  hover:text-primary"
                >
                  <HiOutlineMinus />
                </button>
              </div>
            </div>
            <BtnAddToCart />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
