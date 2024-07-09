import Banner from "../components/home/banner/Banner";
import Categories from "../components/home/categories/Categories";
import ClothesAndEquipment from "../components/home/clothesAndEquipment/ClothesAndEquipment";
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
    </div>
  );
};

export default HomePage;
