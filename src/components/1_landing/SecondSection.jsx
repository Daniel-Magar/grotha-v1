import React from "react";
import Cubes from "../../assets/img/landingPage/landing-section-2.png";

const SecondSection = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center ">
      <div className="border w-[70%] sm:w-[50%]">
        <img src={Cubes} alt=".." className="mb-5" />
        <p className="text-center text-2xl ">
          We are a <span>Bangalore</span> based <span>idea + design</span>{" "}
          collective that believes purpose is worth searching for.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
