import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import banner3 from "../../../assets/images/Banner/banner-image-1.jpg";
import banner2 from "../../../assets/images/Banner/banner-image-2.jpg";
import banner1 from "../../../assets/images/Banner/banner-image-3.jpg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper max-h-screen"
      >
        <SwiperSlide>
          <div className="w-full h-full relative ">
            <img src={banner1} className="w-full  object-cover" alt="" />
            <div className="absolute h-full w-full flex rounded-xl  gap-5 left-0 top-0 sm:py-20 md:py-32 lg:py-40 bg-black bg-opacity-50">
              <div className="text-white space-y-4 w-full h-full  text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                  <span className="text-[#FF914D] font-semibold">Fitness</span>{" "}
                  is Happiness
                </h1>
                <p className="text-white">Exercise Really Makes You Happier</p>
                <Link className="mt-20">
                  <button
                    onClick={() => navigate("/classes")}
                    className="py-3 mt-20 w-fit px-4 uppercase font-medium rounded-md bg-[#FF914D] text-black  hover:bg-[#F5CCA0]  duration-300"
                  >
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative ">
            <img src={banner2} className="w-full  object-cover" alt="" />
            <div className="absolute h-full w-full flex rounded-xl  gap-5 left-0 top-0 sm:py-20 md:py-32 lg:py-40 bg-black bg-opacity-50">
              <div className="text-white space-y-4 w-full h-full  text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                  <span className="text-[#FF914D] font-semibold">Fitness</span>{" "}
                  is Happiness
                </h1>
                <p className="text-white">Exercise Really Makes You Happier</p>
                <Link className="mt-20">
                  <button
                    onClick={() => navigate("/classes")}
                    className="py-3 mt-20 w-fit px-4 uppercase font-medium rounded-md bg-[#FF914D] text-black  hover:bg-[#F5CCA0]  duration-300"
                  >
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative ">
            <img src={banner3} className="w-full  object-cover" alt="" />
            <div className="absolute h-full w-full flex rounded-xl  gap-5 left-0 top-0 sm:py-20 md:py-32 lg:py-40 bg-black bg-opacity-50">
              <div className="text-white space-y-4 w-full h-full  text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                  <span className="text-[#FF914D] font-semibold">Fitness</span>{" "}
                  is Happiness
                </h1>
                <p className="text-white">Exercise Really Makes You Happier</p>
                <Link className="mt-20">
                  <button
                    onClick={() => navigate("/classes")}
                    className="py-3 mt-20 w-fit uppercase px-4 font-medium rounded-md bg-[#FF914D] text-black  hover:bg-[#F5CCA0]  duration-300"
                  >
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
