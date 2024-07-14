import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { Cart } from "../cart/Cart";
import NavItems from "./Nav/NavItems";
import ResponsiveNav from "./Nav/ResponsiveNav";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="px-[10%] flex items-center justify-between md:py-6 border-b">
        <ResponsiveNav />
        <Link to={"/"}>
          <img src={logo} alt="gymdo logo" className="w-36" />
        </Link>

        <NavItems />

        <div className="flex gap-4 text-2xl">
          <HiOutlineSearch />
          <HiOutlineUser />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
