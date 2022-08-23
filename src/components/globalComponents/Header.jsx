import React from "react";
import { Link, NavLink } from "react-router-dom";
import GrothaaLogo from "../../assets/img/global/grothaaHeaderLogo.png";

const Header = () => {
  return (
    <div className="bg-[#171717] md:bg-black text-white fixed top-0 left-0 right-0  z-50">
      {/* header contents */}

      <div className="">
        <div className="flex justify-between items-center w-[85%] mx-auto py-5 md:py-0 ">
          {/* logo */}
          <div>
            {/* <Link to={{ pathname: "/", hash: "#heroSection" }}> */}
            <Link to="/">
              <img src={GrothaaLogo} alt="Grothaa" />
            </Link>
          </div>

          {/* hamburger menu */}
          <div className="h-[25px] w-[25px]  flex justify-around items-center flex-col md:hidden cursor-pointer">
            <div className="bg-white h-[2px] w-[25px]"></div>
            <div className="bg-white h-[2px] w-[25px]"></div>
            <div className="bg-white h-[2px] w-[25px]"></div>
          </div>

          {/* header links */}
          <ul className="hidden md:flex justify-between items-center gap-10 font-medium text-[20px]   ">
            <li className="py-5 xl:py-8  transition text-center">
              <NavLink
                to="/our-story"
                className={({ isActive }) =>
                  isActive
                    ? " py-2 cursor-pointer text-[#fbd109]"
                    : " py-2 cursor-pointer  "
                }
              >
                Our Story
              </NavLink>
            </li>

            <li className="py-5 xl:py-8  transition text-center">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? " py-2 cursor-pointer text-[#fbd109]"
                    : " py-2 cursor-pointer  "
                }
              >
                About Us
              </NavLink>
            </li>

            <li className="py-5 xl:py-8  transition text-center">
              <NavLink
                to="/join-grothaa"
                className={({ isActive }) =>
                  isActive
                    ? " py-2 cursor-pointer text-[#fbd109]"
                    : " py-2 cursor-pointer  "
                }
              >
                Join Grothaa
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
