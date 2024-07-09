import category1 from "../../../assets/images/categories/banner_v3.1.jpg";
import category2 from "../../../assets/images/categories/banner_v3.2.jpg";
import category3 from "../../../assets/images/categories/banner_v3.3.jpg";

import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <div className="px-[10%] md:-mt-16 md:grid grid-cols-3 gap-5 mt-10 space-y-5 md:space-y-0">
      <CategoryItem img={category3} category={"equipment"} />
      <CategoryItem img={category2} category={"clothing"} />
      <CategoryItem img={category1} category={"fitness"} />
    </div>
  );
};

export default Categories;
