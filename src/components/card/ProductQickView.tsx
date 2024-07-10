import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import product1 from "../../assets/images/products/12.jpg";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
export function DialogCloseButton() {
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
          <div></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
