import React from "react";
import Growthaa from "../../assets/img/landingPage/growthaaLogo2.png";
import InstagramLogo from "../../assets/img/landingPage/instagram-dark.png";
import LinkedinLogo from "../../assets/img/landingPage/linkedin-dark.png";

const SocialMedia = () => {
  return (
    <div className="py-10 gradient-bg hidden md:block ">
      <div className="w-[85%] mx-auto  flex justify-between items-center flex-wrap gap-5">
        <div>
          <img src={Growthaa} alt="Growthaa" className="mx-auto mb-5" />
          <div className="rounded-md p-3 px-5 text-center bg-[#101010] text-white font-medium min-w-[150px] transition active:scale-95 cursor-pointer">
            info@grothaa.com
          </div>
        </div>

        <div>
          <img
            src={LinkedinLogo}
            alt="LinkedinLogo"
            className="mx-auto mb-5 w-[50px]"
          />
          <div className="rounded-md p-3 px-5 text-center bg-[#101010] text-white font-medium min-w-[150px] transition active:scale-95 cursor-pointer">
            Linkedin
          </div>
        </div>

        <div>
          <img
            src={InstagramLogo}
            alt="InstagramLogo"
            className="mx-auto mb-5 w-[50px]"
          />
          <div className="rounded-md p-3 px-5 text-center bg-[#101010] text-white font-medium min-w-[150px] transition active:scale-95 cursor-pointer">
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
