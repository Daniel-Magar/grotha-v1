import React from "react";
import Doughnut from "../../assets/img/landingPage/landing-section-8.png";

const EightSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[85%] flex flex-col md:flex-row-reverse md:justify-between md:items-center ">
        <div className="md:flex-[0.4] ">
          <img
            src={Doughnut}
            alt=".."
            className="mb-5 md:mb-0 w-[60%] sm:w-[50%] md:w-[75%] 3xl:w-[65%]   mx-auto md:mx-0 md:ml-auto  "
          />
        </div>

        <p className="text-center md:text-left text-xl sm:text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem] font-semibold md:flex-[0.55] ">
          We grew tired of feeling trapped in the past.So we{" "}
          <span className="bg-gradient-to-r from-[#FFC700] to-[#EB08FF] text-transparent bg-clip-text">
            broke out.
          </span>
        </p>
      </div>
    </div>
  );
};

export default EightSection;
