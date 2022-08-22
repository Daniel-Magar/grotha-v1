import React from "react";
import GrothaaLogo from "../../assets/img/global/grothaaHeaderLogo.png";

const Header = () => {
  return (
    <div className="bg-[#171717] md:bg-black text-white fixed top-0 left-0 right-0 ">
      {/* header contents */}

      <div className="">
        <div className="flex justify-between items-center w-[85%] mx-auto py-5 md:py-0 ">
          {/* logo */}
          <div>
            <img src={GrothaaLogo} alt="Grothaa" />
          </div>

          {/* hamburger menu */}
          <div className="h-[25px] w-[25px]  flex justify-around items-center flex-col md:hidden cursor-pointer">
            <div className="bg-white h-[2px] w-[25px]"></div>
            <div className="bg-white h-[2px] w-[25px]"></div>
            <div className="bg-white h-[2px] w-[25px]"></div>
          </div>

          {/* header links */}
          <ul className="hidden md:flex justify-between items-center gap-10 font-medium text-[20px]   ">
            <li className="py-5 xl:py-8 cursor-pointer border-b border-b-transparent hover:border-b-[#fbd109] transition text-center">
              Our Story
            </li>
            <li className="py-5 xl:py-8 cursor-pointer border-b border-b-transparent hover:border-b-[#fbd109] transition text-center">
              About Us
            </li>
            <li className="py-5 xl:py-8 cursor-pointer border-b border-b-transparent hover:border-b-[#fbd109] transition text-center">
              Join Grothaa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
