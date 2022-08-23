import React from "react";
import Cuboids from "../../assets/img/landingPage/landing-section-3.png";

const ThirdSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] 2xl:w-[25%] ">
        <img src={Cuboids} alt=".." className="mb-5 w-full" />
        <p className="text-center text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold">
          Once upon a time, three{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            {" "}
            hard-workers{" "}
          </span>{" "}
          lived in a{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            {" "}
            fast-changing{" "}
          </span>{" "}
          world but worked in a slow-changing industry.
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
