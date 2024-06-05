const BeforeAfter = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col justify-center items-center text-[#153339] mt-20">
        <h1 className=" font-extrabold text-7xl  uppercase ">Before & after</h1>
        <div className="flex items-baseline gap-12 mt-5">
          <p className=" flex gap-2">
            Our Services
            <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
          </p>
          <p className=" flex gap-2">
            Call Us (619) 201-9480
            <img className="-mt-2 w-2" src="./Quality/upper-top.svg" alt="" />
          </p>
        </div>
      </div>
      <div className="mx-auto w-[1020px] mt-20">
        <div className="flex justify-center gap-5">
        <div className="flex  h-[20vh] items-center">
          <img className="w-[200px] rounded-md" src="./Before&After/Before1.jpg" alt="" />
          <div className="h-[220px] w-[2px] bg-[#00CCF8]"></div>
          <img className="w-[200px] rounded-md" src="./Before&After/After1.jpg" alt="" />
        </div>
        <div className="flex h-[20vh] items-center">
          <img className="w-[200px] rounded-md" src="./Before&After/Before2.jpg" alt="" />
          <div className="h-[220px] w-[2px] bg-[#00CCF8]"></div>
          <img className="w-[200px] rounded-md" src="./Before&After/After2.jpg" alt="" />
        </div>
        </div>
        <div className="flex justify-center gap-4 mt-16">
            <div className="w-[200px] h-[4px] bg-[#153339]"></div>
            <div className="w-[200px] h-[4px] bg-[#00CCF8]"></div>
            <div className="w-[200px] h-[4px] bg-[#153339]"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
