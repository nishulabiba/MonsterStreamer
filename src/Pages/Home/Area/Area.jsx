import  { useState } from "react";

const Area = () => {
  const [showBgImage, setShowBgImage] = useState(false);
  const [showiconImage, setShowiconImage] = useState(false);



  return (
    <div className="relative flex flex-col p-10 w-[1200px] h-[600px] mx-auto justify-center rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{
          backgroundImage: showBgImage ? "url(./Service/San.jpg)" : "none",
        }}
      ></div>
      <div
        className={`absolute inset-0 ${
          showBgImage ? "bg-[#00CCF8]/50" : " bg-gradient-to-t from-teal-200 to-[#00CCF8] "
        } transition-opacity duration-300`}
      ></div>
      <div className="relative z-10">
        <h1 className="text-white font-extrabold text-7xl text-center mb-20">
          Area We Serve
        </h1>
        <div className="mt-8 flex gap-5 justify-center">
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
            onMouseEnter={()=> setShowBgImage(true)}
            onMouseLeave={()=> setShowBgImage(false)}
            onClick={()=> setShowBgImage(true)}
          >
            San Diego
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Oceanside
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Escondido
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Del Mar
          </button><button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Miramar
          </button>
        </div>
        <div className="mt-8 flex gap-5 justify-center">
          
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
            onMouseEnter={()=>setShowiconImage(true)}
            onMouseLeave={()=>setShowiconImage(false)}
          >
            {
                showiconImage? (<img className="" src="./Service/pin_drop.svg" alt="" />): (<></>)
            }
            Rancho Bernardo
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
           Carlsbad
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            El Cajon
          </button><button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Fallbrook
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Miramesa
          </button>
        </div>
        <div className="mt-8 flex gap-5 justify-center">
          
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
            
          >
            National City
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
           Vista
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            El Cajon
          </button><button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Fallbrook
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
            Miramesa
          </button>
        </div>
        <div className="mt-8 flex gap-5 justify-center">
          
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
            
          >
            Ramuna
          </button>
          <button
            className="btn text-[#153339] bg-white hover:bg-white border-none uppercase font-semibold"
          >
           chula Vista
          </button>
        </div>
      </div>
    </div>
  );
};

export default Area;
