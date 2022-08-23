import React from "react";
import GrowthaaLogo from "../../assets/img/aboutUsPage/heroGrothaaLogo.png";
import LinkedInLogo from "../../assets/img/aboutUsPage/linkedin.png";
import InstaGramLogo from "../../assets/img/aboutUsPage/instagram.png";

const AboutPage = () => {
  return (
    <div className="h-screen  bg-black text-white flex flex-col justify-center items-center ">
      <div className=" w-[75%] sm:w-[70%] md:w-[85%] flex flex-col md:flex-row-reverse md:justify-between md:items-center ">
        <div className="md:flex-[0.3]">
          <img
            src={GrowthaaLogo}
            alt=".."
            className="mb-5 md:mb-0 w-[25%] sm:w-[30%] md:w-[40%] 3xl:w-[45%] mx-auto md:mx-0 md:ml-auto"
          />
        </div>

        <p className="text-center md:text-left text-xl sm:text-2xl lg:text-3xl  3xl:text-5xl leading-10  lg:leading-[3rem] 3xl:leading-[4rem]  md:flex-[0.7] ">
          Our agency is about people who love creating, designing and developing
          wow projects. At the same time we are a unique agency that is more
          than the collective. We learn and grow, win and celebrate together.
        </p>
      </div>
      <div className="w-[85%] mt-10 absolute bottom-[50px] md:bottom-[100px]">
        <div className="flex justify-center md:justify-start items-end gap-5 h-[20%]  ">
          <img src={LinkedInLogo} alt="linkedin" className="w-10 md:w-14" />
          <img src={InstaGramLogo} alt="instagram" className="w-10 md:w-14" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
