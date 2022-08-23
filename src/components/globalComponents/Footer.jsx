import React from "react";
import { Link } from "react-router-dom";
import AllTeam from "../../assets/img/landingPage/all-team.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-[85%] mx-auto py-5 flex justify-between items-center">
        <img src={AllTeam} alt="All team" className="" />
        <div className=" ">
          <ul>
            <Link to="/our-story">
              <li className="text-[#868686] text-sm mb-2 hover:text-white transition">
                Our Story
              </li>
            </Link>
            <Link to="about-us">
              <li className="text-[#868686] text-sm mb-2 hover:text-white transition">
                About Us
              </li>
            </Link>

            <Link to="join-grothaa">
              <li className="text-[#868686] text-sm mb-2 hover:text-white transition">
                Join Grothaa
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
