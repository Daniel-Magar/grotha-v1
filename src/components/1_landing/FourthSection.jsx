import React from "react";
import handWithBulb from "../../assets/img/landingPage/landing-section-4.png";

const FourthSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] 2xl:w-[25%] ">
        <img src={handWithBulb} alt=".." className="mb-5 w-[90%] mx-auto" />
        <p className="text-center text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold">
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            Brand agencies
          </span>{" "}
          were saying all the right things, but doing little to answer the
          systematic shifts knocking at their expensive doors.
        </p>
      </div>
    </div>
  );
};

export default FourthSection;
