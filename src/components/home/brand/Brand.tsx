// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import brand1 from "../../../assets/images/brand/1.png";
import brand2 from "../../../assets/images/brand/2.png";
import brand3 from "../../../assets/images/brand/3.png";
import brand4 from "../../../assets/images/brand/4.png";
import brand5 from "../../../assets/images/brand/5.png";
const Brand = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5];
  return (
    <div className="bg-[#333333] w-screen py-5 px-[10%] overflow-hidden">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {brandImages.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} className="w-16 mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
