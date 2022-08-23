import React from "react";
import ManWithBasket from "../../assets/img/landingPage/landing-section-5.png";

const FifthSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[33%] 2xl:w-[25%] ">
        <img src={ManWithBasket} alt=".." className="mb-5 w-[85%] mx-auto" />
        <p className="text-center text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold">
          We believe we’re all{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            worthy
          </span>{" "}
          of the a New Story it’s time we stepped Into one.
        </p>
      </div>
    </div>
  );
};

export default FifthSection;
