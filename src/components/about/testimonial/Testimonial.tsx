import SectionHead from "../../../utils/SectionHead";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="md:px-[10%] px-5 my-20">
      <SectionHead title="Happy Clients" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {Array.from({ length: 8 }).map(() => (
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
