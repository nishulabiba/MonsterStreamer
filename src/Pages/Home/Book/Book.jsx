import { useEffect } from "react";
import "./Book.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Book = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex mx-auto w-[1200px] ">
      <div className="flex flex-col gap-4">
        <h1 className=" font-extrabold absolute  text-7xl text-[#153339]  uppercase ">
          Book Online <br /> And get 10% <br /> Off.
        </h1>
        <div className="btn mt-60 border-none pb-2 w-[28vh] h-[7vh] rounded-3xl bg-[#00CCF8] text-white text-center pt-2">
          Book Us Today
        </div>
      </div>

      <img
        className=" ms-28 w-[900px]"
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
        data-aos-anchor-placement="right-down"
        src="./van.png"
        alt=""
      />
    </div>
  );
};

export default Book;
