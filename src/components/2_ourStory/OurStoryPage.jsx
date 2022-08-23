import React from "react";
import Ranganathan from "../../assets/img/landingPage/team-1.png";
import Arvind from "../../assets/img/landingPage/team-2.png";
import Ashima from "../../assets/img/landingPage/team-3.png";
import Kiran from "../../assets/img/landingPage/team-4.png";
import Priyangshu from "../../assets/img/landingPage/team-5.png";
import Keerthana from "../../assets/img/landingPage/team-6.png";
import Krishna from "../../assets/img/landingPage/team-7.png";

const OurStoryPage = () => {
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center text-3xl pt-[150px]">
      <div className="flex justify-center items-center gap-5 flex-wrap  min-h-[80vh]  transition-all w-[85%]">
        <div className=" flex-1 min-w-[150px]">
          <img
            src={Ranganathan}
            alt="Ranganathan"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Arvind}
            alt="Arvind"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Ashima}
            alt="Ashima"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Kiran}
            alt="Kiran"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Priyangshu}
            alt="Priyangshu"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Keerthana}
            alt="Keerthana"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>

        <div className=" flex-1 min-w-[150px]">
          <img
            src={Krishna}
            alt="Krishna"
            className="mx-auto mb-5 w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
