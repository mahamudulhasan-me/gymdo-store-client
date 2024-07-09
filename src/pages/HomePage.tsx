import Banner from "../components/home/banner/Banner";
import Brand from "../components/home/brand/Brand";

import Categories from "../components/home/categories/Categories";
import ClothesAndEquipment from "../components/home/clothesAndEquipment/ClothesAndEquipment";
import NewArrivals from "../components/home/newArrivals/NewArrivals";
import PhotoGallery from "../components/home/photoGallery/PhotoGallery";
import WhyChoose from "../components/home/whyChoose/WhyChoose";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <WhyChoose />
      <ClothesAndEquipment />
      <PhotoGallery />
      <NewArrivals />
      <Brand />
    </div>
  );
};

export default HomePage;
