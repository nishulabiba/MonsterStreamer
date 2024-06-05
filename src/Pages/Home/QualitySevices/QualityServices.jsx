
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Q.css";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

const QualityServices = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div className="bg-[#153339] h-[100vh]">
      <div className="flex w-[145vh] gap-20 pt-20 mx-auto items-center">
        <h1 className="text-6xl font-bold">
          Quality <br /> Services
        </h1>
        <div>
          <p>
            Monster Steamer is the most trusted and professional cleaning <br />
            service provider in the San Diego area.
          </p>
          <div className="flex gap-32 mt-5">
            <p className="q flex gap-2">
              See Our Pricing
              <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
            </p>
            <p className="q flex gap-2">
              Call Us (619) 201-9480
              <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex items-baseline w-[1224px] bg-[#002932] rounded-lg mt-5 pt-8">
      <div className="w-[200px] flex gap-5 items-center justify-center">
      <img  ref={prevRef}
            src="./Quality/left.svg"
            alt=""
            className=" w-[45px] rounded-xl h-[20px] btn bg-transparent border border-spacing-1 border-white hover:bg-white mb-2"
          />
          <img ref={nextRef}
            src="./Quality/right-arrow.svg"
            alt=""
            className="w-[45px] rounded-xl h-[20px] btn bg-transparent border border-spacing-1 border-white hover:bg-white mb-2"
          />
        </div>
        <div className="p-4 w-[1000px]">
        
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={0}
            navigation ={{
                nextEl: nextRef.current,
                prevEl: prevRef.current,
            }}
            onSwiper={(swiper) => {
                // Delay execution for the refs to be available
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/1.jpg" alt="" />
                <p className="font-bold mt-2">Carpet Cleaning</p>
                <p className="text-sm mt-2">Say Goodbye To Stains & Odors</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/2.jpg" className=" rounded-lg" alt="" />
                <p className="font-bold mt-2">Upholstery Cleaning</p>
                <p className="text-sm mt-2">Like New When We Finish</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/4.jpg" className=" rounded-lg" alt="" />
                <p className="font-bold mt-2">Upholstery Cleaning</p>
                <p className="text-sm mt-2">Like New When We Finish</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/3.jpg" className=" rounded-lg" alt="" />
                <p className="font-bold mt-2">Upholstery Cleaning</p>
                <p className="text-sm mt-2">Like New When We Finish</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[200px]  sCale  h-[258px]">
                <img src="./Quality/5.jpg" className=" rounded-lg" alt="" />
                <p className="font-bold mt-2">Upholstery Cleaning</p>
                <p className="text-sm mt-2">Like New When We Finish</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </div>
  );
};

export default QualityServices;
