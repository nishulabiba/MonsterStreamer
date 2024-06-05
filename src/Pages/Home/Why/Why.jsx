import CardStack from "./CardStack";

const Why = () => {
  return (
    <div className="grid grid-cols-2 mx-40 py-28">
      <div className="flex flex-col gap-10">
        <h1 className=" font-extrabold text-7xl text-[#153339] uppercase ">
          Why <br /> choose us?
        </h1>
        <p className="w-[400px] h-[150px] text-justify text-[#5B757D] ">
          Our reputation has been built by word-of-mouth referrals since the
          very beginning in 2010, and we’re committed to providing the same
          level of quality service to you. <br /> <br />
          We have also developed our own green and eco-friendly product line
          under the name <span className="text-[#86D88B]">Monsterchems</span>.
        </p>
        <div className="btn border-none pb-2 w-[28vh] h-[7vh] rounded-3xl bg-[#00CCF8] text-white text-center pt-2">
          Book Now - 10% Off
        </div>
      </div>
      <div className="h-[100vh]">
        <CardStack />
      </div>
    </div>
  );
};

export default Why;
