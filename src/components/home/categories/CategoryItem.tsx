import { Link } from "react-router-dom";
import { BtnPrimaryMini } from "../../ui/BtnPrimary";

const CategoryItem = ({ img, category }: { img: string; category: string }) => {
  return (
    <div className="z-10 group overflow-hidden relative">
      <img
        src={img}
        className="group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
      <div
        className="absolute 
        top-0 left-0 w-full h-full bg-slate-950/45 flex flex-col justify-center items-center space-y-4"
      >
        <h2 className="text-4xl text-white font-semibold capitalize">
          {category}
        </h2>
        <Link to={category}>
          <BtnPrimaryMini text="Start" title="Shop Now" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
