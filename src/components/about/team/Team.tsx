import { Swiper, SwiperSlide } from "swiper/react";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div className="px-[10%] grid grid-cols-12">
      <article className="col-span-4">
        <h1 className="text-3xl font-semibold mb-2">Behind The Brands?</h1>
        <div className="flex gap-2 items-center">
          <div className="w-10 h-0.5 bg-primary"></div>{" "}
          <p className="text-sm text-gray-500">THE HIGH STRESS FAVORITE</p>
        </div>
        <div className="mt-10 text-gray-500 text-justify space-y-4 pr-5">
          <p>
            We are a female-founded, 100% woman-led team of collaborative
            dreamers who value innovation, curiosity and free-thinking
            fearlessness in everything that we do. We take immeasurable pride in
            our work, intentionally stitching love into the very fiber and
            fabric of our designs.
          </p>
          <p>
            We are small, but we are a mighty group of talented individuals
            dedicated to bringing you otherworldly designs with imagery to
            match.
          </p>
        </div>
      </article>
      <div className="col-span-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {Array.from({ length: 8 }).map(() => (
            <SwiperSlide>
              <TeamMemberCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
