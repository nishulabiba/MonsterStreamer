import TextTransition, { presets } from "react-text-transition";
import "./HeroSection.css";
import { useEffect,  useState } from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from 'react-countup';
// import { useFollowPointer } from "./mouse-follow";
// import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const TEXTS = ["carpet", "upholstery", "tile&grout", "commercial"];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("up");
  const [isForward, setIsForward] = useState(true);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = isForward ? prevIndex + 1 : prevIndex - 1;
        if (newIndex >= TEXTS.length) {
          newIndex = TEXTS.length - 1;
          setIsForward(false);
          setDirection("up");
        } else if (newIndex < 0) {
          newIndex = 0;
          setIsForward(true);
          setDirection("down");
        }

        return newIndex;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isForward, TEXTS.length]);
  return (
    <div className=" heroNoise ">
      {/* <motion.div
        ref={ref}
        className="box  opacity-70 bg-[#00CCF8] m-0 p-0 "
        animate={{ x, y }}
        transition={{
          type: "tween",
          bounce: 0.5,
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          timing: "ease",
          whileHover: "hover",
        }}
      /> */}

      <div className="flex justify-end me-20 -mb-20 pt-20">
        <img
          className="glowing-image hover:scale-150   "
          src="./Hero/glowing.svg"
          alt=""
        />
      </div>
      <div className="flex justify-center items-baseline mt-[120px]">
        <div className="gradient-background">
          <img
            className={`glowing-image hover:scale-150 -mb-24 me-20`}
            src="./Hero/glowing-small.svg"
            alt=""
          />
        </div>
        <div  className="box h-[12vh] w-[25vh] me-5 overflow-hidden rounded-lg relative ">
          <img
            className=" w-[28vh] h-auto absolute -top-[120px]"
            src="./Hero/Video.gif"
            alt=""
          />
        </div>

        <span className="uppercase font-bold text-[#00CCF8] text-8xl w-[100vh] -mt-24">
          <TextTransition direction={direction} springConfig={presets.wobbly}>
            {TEXTS[index]}
          </TextTransition>
        </span>
      </div>
      <div className="uppercase font-bold text-[#00CCF8] text-8xl text-center">
        Cleaning{" "}
        <span className="uppercase font-bold text-[#153339] text-8xl">
          in SAN
        </span>
      </div>
      <div className="uppercase font-bold text-[#153339] text-8xl ms-[42vh]">
        Diego.
        <div className="">
          <img
            className="glowing-image p-5 bg-opacity-10 bg-blend-luminosity ms-[57vh] -mt-12"
            src="./Hero/glowing.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex gap-52 ms-[42vh]">
        <p className="w-[450px] h-[100px] text-[#6d6f70]  ">
          Elevate your living environment to new heights of <br />
          cleanliness and hygiene. We serve both{" "}
          <span className="font-bold text-[#153339]">residential</span> and <br />{" "}
          <span className="font-bold text-[#153339]">commercial</span> clients.
        </p>
        <div className="-ms-50">
          <img src="./Hero/callustoday.svg" alt="" className=" w-[158px] cta-button " />
          <img src="./Hero/callicon.svg" alt="" className=" bg-[#00CCF8] p-10 rounded-full -mt-[130px] ms-6 " />
          
        </div>
      </div>

      <div className="h-[70vh] pb-20 grid grid-cols-2 ms-[34vh] mt-[15vh] justify-items-center align-middle">
        <div className="grid grid-cols-2 gap-10 mt-16">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className=" text-sm text-[#153339]">Since</p>
                    <h1 className="font-extrabold text-4xl text-[#153339]"><CountUp end={2010} duration={1} delay={3}/></h1>
                    <p className="text-sm" >Providing the same level of <br /> quality service</p>

                </div>
                <div className="flex flex-col gap-3">
                <p className=" text-sm text-[#153339]">Over</p>
                    <h1 className="font-extrabold text-4xl text-[#153339]"><CountUp end={8000} duration={1} delay={3}/>+</h1>
                    <p className="text-sm" >Home & Businesses trust us for <br /> cleaning services</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className=" text-sm text-[#153339]">Operate</p>
                    <h1 className="font-extrabold text-4xl text-[#153339]"><CountUp end={3} duration={1} delay={3}/></h1>
                    <p className="text-sm" >Trucks for fast & reliable <br /> cleaning servicee</p>

                </div>
                <div className="flex flex-col gap-3">
                <p className=" text-sm text-[#153339]">4.9 stars</p>
                    <h1 className="font-extrabold text-4xl text-[#153339]"><CountUp end={1200} duration={1} delay={3}/>+</h1>
                    <p className="text-sm">Homeowners reviewed us on <br /> internet.</p>
                </div>
            </div>

        </div>
        <div className="-ms-16">
          
          <img className=" rounded-lg w-[45vh]" src="./Hero/Video.gif" alt="" />
          <img className="w-[10vh] -mt-[50vh] -ms-7" src="./Bubble.png" alt="" />
        </div>
        

      </div>

    </div>
  );
};

export default HeroSection;
