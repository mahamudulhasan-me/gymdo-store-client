import banner1 from "../../../assets/images/banner/slideshow-bg1.jpg";
import banner2 from "../../../assets/images/banner/slideshowV2-bg2.jpg";
import banner3 from "../../../assets/images/banner/slideshowV2-bg3.jpg";
import { BtnPrimary } from "../../ui/BtnPrimary";

export const BannerItem1 = () => {
  return (
    <div>
      <img
        src={banner1}
        className="min-w-full h-full bg-black/20 sm:h-96 md:h-screen w-screen"
      />
      <div className="absolute bottom-0  h-full w-full mx-auto flex justify-start items-center">
        <div className="container mx-auto text-white">
          <p className="uppercase text-lg tracking-widest font-semibold ">
            Need-IT-Now
          </p>
          <h1 className="text-7xl text-white mt-5 mb-1 -ml-1">
            GYM Collection
          </h1>
          <p className="text-lg mb-8">Limit Offer 10% off</p>
          <BtnPrimary text="Stat Shop" title="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export const BannerItem2 = () => {
  return (
    <div>
      <img
        src={banner2}
        className="min-w-full h-full bg-black/20 sm:h-96 md:h-screen w-screen"
      />
      <div className="absolute bottom-0  h-full w-full mx-auto flex justify-center items-center">
        <div className="px-[10%] text-white text-center">
          <p className="uppercase text-lg tracking-widest font-semibold ">
            Need-IT-Now
          </p>
          <h1 className="text-7xl text-white mt-5 mb-1 -ml-1">
            Clothing Collection
          </h1>
          <p className="text-lg mb-8">Limit Offer 10% off</p>
          <div className="flex justify-center">
            <BtnPrimary text="Stat Shop" title="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const BannerItem3 = () => {
  return (
    <div>
      <img
        src={banner3}
        className="min-w-full h-full bg-black/20 sm:h-96 md:h-screen w-screen"
      />
      <div className="absolute bottom-0  h-full w-full mx-auto flex justify-end items-center">
        <div className="px-[10%] text-white text-center">
          <p className="uppercase text-lg tracking-widest font-semibold ">
            Need-IT-Now
          </p>
          <h1 className="text-7xl text-white mt-5 mb-1 -ml-1">
            Fitness Collection
          </h1>
          <p className="text-lg mb-8">Limit Offer 40% off</p>
          <div className="flex justify-center">
            <BtnPrimary text="Stat Shop" title="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
};
