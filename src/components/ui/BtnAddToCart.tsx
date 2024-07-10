import { HiShoppingCart } from "react-icons/hi2";
import "./style/BtnAddToCartStyle.css";
const BtnAddToCart = () => {
  return (
    <button className="CartBtn">
      <span className="IconContainer">
        <HiShoppingCart size={24} className="text-white" />
      </span>
      <p className="text">Add to Cart</p>
    </button>
  );
};

export default BtnAddToCart;
