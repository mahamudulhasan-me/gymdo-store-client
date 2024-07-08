import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavItems from "./Nav/NavItems";
const Header = () => {
  return (
    <div className="bg-white border-b">
      <div className="container  flex items-center justify-between py-6 border-b">
        <Link to={"/"}>
          <img src={logo} alt="gymdo logo" className="w-36" />
        </Link>

        <NavItems />
        <div className="flex gap-4 text-2xl">
          <HiOutlineSearch />
          <HiOutlineUser />
          <HiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
