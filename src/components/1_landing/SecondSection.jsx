import React from "react";
import Cubes from "../../assets/img/landingPage/landing-section-2.png";

const SecondSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] 2xl:w-[25%] ">
        <img src={Cubes} alt=".." className="mb-5 w-full" />
        <p className="text-center text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold">
          We are a{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            Bangalore
          </span>{" "}
          based{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            idea + design
          </span>{" "}
          collective that believes purpose is worth searching for.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
