import React from "react";
import Pencil from "../../assets/img/landingPage/heroImage.png";
import heroLogo from "../../assets/img/landingPage/heroGrothaaLogo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="h-screen bg-black text-white flex justify-center items-center"
    >
      {/* landing contents */}
      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 justify-between w-[80%] items-center  ">
        <div className=" flex-[0.4]">
          <img src={Pencil} alt=".." className=" ml-auto xl:w-[70%]" />
        </div>
        <div className="  flex-[0.6] ">
          <img
            src={heroLogo}
            alt="grothaa"
            className="hidden md:block mx-auto w-[75px] lg:w-[85px] xl:w-[95px] 3xl:w-[105px] mb-5"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl  md:leading-[50px] xl:leading-[70px]   font-semibold text-center  lg:w-[80%] lg:mx-auto">
            A Full service Digital Agency.
          </h1>

          <p className="text-[#C1C1C1] text-sm md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-extralight my-8 text-center">
            We've got the wheels to get your brand moving.
          </p>

          {/* CTA */}
          <Link to="/join-grothaa">
            <div className=" p-3 px-10 xl:p-5 xl:px-12 w-fit rounded-3xl text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl mx-auto font-bold bg-gradient-to-r from-[#ffc700] to-[#eb08ff] text-black active:scale-95 transition cursor-pointer">
              Join Grothaa
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
