
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

const FeedBack = () => {
  const nextRef = useRef();
  const prevRef = useRef();

  return (
    <div className="bg-[#153339] rounded-t-3xl h-[737px] ">
      <div className="flex flex-col w-[145vh] gap-10 pt-20 mx-auto items-center ">
        <h1 className="text-6xl font-bold text-[#E2EFF2]">Clients FeedBack</h1>
        <div>
          <p className="text-sm">
            We have{" "}
            <span className="font-bold text-[#E2EFF2]">1200+ reviews</span> from
            Yelp and Google with a combined result of 4.9 <br /> star rating,
            welcome to read our clients{`'`} feedback.
          </p>
          <div className="flex items-baseline text-[#00CCF8] gap-32 mt-5">
            <p className=" flex gap-2">
              See All Google Reviews
              <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
            </p>
            <p className=" flex gap-2">
              See All Yelp Reviews
              <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col-reverse justify-center items-baseline w-[1224px] rounded-lg mt-5 pt-8">
        <div className="mx-auto flex gap-5 items-center justify-center">
          <img
            ref={prevRef}
            src="./Quality/left.svg"
            alt=""
            className=" w-[45px] rounded-xl h-[20px] btn bg-transparent border border-spacing-1 border-white hover:bg-white mb-2"
          />
          <img
            ref={nextRef}
            src="./Quality/right-arrow.svg"
            alt=""
            className="w-[45px] rounded-xl h-[20px] btn bg-transparent border border-spacing-1 border-white hover:bg-white mb-2"
          />
        </div>
        <div className="p-4 w-[850px] mx-auto flex justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            navigation={{
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
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Jared B.
                    </p>
                    <div className="flex w-[50px] gap-2">
                        <img src="./Reviews/y.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                David was an amazing tech when I moved into my new place! {`Can't`} wait to schedule my next appointment.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Lesly Q. </p>
                    <div className="flex w-[50px] gap-2">
                        <img src="./Reviews/g.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone..
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Tom K.
                    </p>
                    <div className="flex w-[50px] gap-2">
                        <img src="./Reviews/g.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Jared B.
                    </p>
                    <div className="flex w-[50px]">
                        <img src="./Reviews/y.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Jared B.
                    </p>
                    <div className="flex w-[50px]">
                        <img src="./Reviews/y.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[250px] rounded-lg bg-white p-4  sCale  h-[158px]">
                <p className=" text-sm">
                I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.
                </p>
                <div className="flex justify-between mt-3 pe-5">
                    <p className=" italic text-xs">
                    Jared B.
                    </p>
                    <div className="flex w-[50px]">
                        <img src="./Reviews/y.svg" alt="" />
                        <img src="./Reviews/5.svg" alt="" />
                    </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
