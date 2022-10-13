import React from "react";
import Ranganathan from "../../assets/img/landingPage/team-1.png";
import Arvind from "../../assets/img/landingPage/team-2.png";
import Ashima from "../../assets/img/landingPage/team-3.png";
import Kiran from "../../assets/img/landingPage/team-4.png";
import Priyangshu from "../../assets/img/landingPage/team-5.png";
import Keerthana from "../../assets/img/landingPage/team-6.png";
import Indicator1 from "../../assets/img/ourStory/Indicator1.png";
// import Krishna from "../../assets/img/landingPage/team-7.png";

const OurStoryPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-start md:justify-center md:items-center text-3xl pt-[150px]">
      <div className="flex  flex-col justify-center items-start md:flex-row md:flex-wrap md:justify-center md:items-center gap-5   min-h-[80vh]  transition-all w-[85%] fade-in-text ">
        <div className=" flex-1 min-w-[150px]  w-full relative">
          <div className="flex md:flex-col justify-start items-start gap-5 md:gap-1">
            <div className=" flex-1 md:flex-1   ">
              <img
                src={Ranganathan}
                alt="Ranganathan"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            {/* For mobile only */}
            <div className="flex  justify-center items-start flex-1 md:hidden gap-2 min-h-[250px] ml-[5.6rem] sm:ml-[8rem] sm:mt-[2rem]  mt-[1rem] absolute top-0 left-0 right-0 bottom-0">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1  ">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Ranganathan
                </div>
                <div className="text-[12px] sm:text-[14px] font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
            {/* Mobile view End */}
            {/* Medium and Large screen */}
            <div className="hidden md:flex ">
              <div className="flex flex-col justify-center items-center text-center text-[16px] font-semibold">
                {/* <div className="w-full flex flex-col justify-end gap-0">
                  <div className="flex justify-center items-center">
                    <div className="w-[1px] h-[2rem] border border-[#ACACAC] rotate-45 ml-8 "></div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-[1px]  h-[3rem] border border-[#ACACAC] "></div>
                  </div>
                </div> */}
                <div>
                  <img src={Indicator1} alt="Arvind" />
                </div>
                <div className="w-full">Arvind</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 min-w-[150px]  w-full ">
          <div className="flex flex-row-reverse md:flex-col-reverse justify-start items-start gap-5 ">
            <div className=" flex-1 md:flex-1 absolute md:relative">
              <img
                src={Arvind}
                alt="Arvind"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            <div className="flex flex-row-reverse justify-start items-start flex-1 md:hidden gap-2 min-h-[250px] mt-5 relative  mr-[6rem] sm:mr-[8rem] sm:mt-[2rem]">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1 justify-end items-end text-right">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Arvind
                </div>
                <div className="text-[12px] sm:text-[14px] font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 min-w-[150px]  w-full relative">
          <div className="flex justify-start items-start gap-5 ">
            <div className=" flex-1 md:flex-1   ">
              <img
                src={Ashima}
                alt="Ashima"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            <div className="flex  justify-start items-start flex-1 md:hidden gap-2 min-h-[250px] ml-[5.6rem] sm:ml-[8rem] sm:mt-[2rem]  mt-[1rem] absolute top-0 left-0 right-0 bottom-0">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1  ">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Ashima
                </div>
                <div className="text-[12px] sm:text-[14px] font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 min-w-[150px]  w-full ">
          <div className="flex flex-row-reverse md:flex-col-reverse justify-start items-start gap-5 ">
            <div className=" flex-1 md:flex-1 absolute md:relative">
              <img
                src={Kiran}
                alt="Kiran"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            <div className="flex flex-row-reverse justify-start items-start flex-1 md:hidden gap-2 min-h-[250px] mt-5 relative  mr-[6rem] sm:mr-[8rem] sm:mt-[2rem]">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1 justify-end items-end text-right">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Kiran
                </div>
                <div className="text-[12px] sm:text-[14px]  font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 min-w-[150px]  w-full relative">
          <div className="flex justify-start items-start gap-5 ">
            <div className=" flex-1 md:flex-1   ">
              <img
                src={Priyangshu}
                alt="Priyangshu"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            <div className="flex  justify-start items-start flex-1 md:hidden gap-2 min-h-[250px] ml-[5.6rem] sm:ml-[8rem] sm:mt-[8rem]   mt-[3.5rem] absolute top-0 left-0 right-0 bottom-0">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1  ">
                <div className="text-[14px] sm:text-[16px]  font-semibold">
                  Priyangshu
                </div>
                <div className="text-[12px] sm:text-[14px]  font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 min-w-[150px]  w-full mb-[6rem]">
          <div className="flex flex-row-reverse md:flex-col-reverse justify-start items-start gap-5 ">
            <div className=" flex-1 md:flex-1 absolute md:relative ">
              <img
                src={Keerthana}
                alt="Keerthana"
                className=" md:mx-auto mb-5 w-[100px] min-w-[100px] sm:w-[150px] md:w-[200px] 3xl:w-[220px] 4xl:w-[250px] 5xl:w-[300px] transition-all duration-700 hover:scale-125"
              />
            </div>
            <div className="flex flex-row-reverse justify-start items-start flex-1 md:hidden gap-2 min-h-[250px] mt-5 relative  mr-[6rem]  mr-[6rem] sm:mr-[8rem] sm:mt-[2rem]">
              <div className="flex justify-start items-start mt-4">
                <div className="w-[2rem] h-[2px] border rounded bg-white"></div>
                <div className="w-2 h-2 border rounded bg-white mt-[-3px]"></div>
              </div>
              <div className="flex flex-col flex-1 justify-end items-end text-right">
                <div className="text-[14px] sm:text-[16px] font-semibold">
                  Keerthana
                </div>
                <div className="text-[12px] sm:text-[14px] font-semibold text-[#ACACAC] text-sm">
                  We help our clients across the globe to enhance ROI, build
                  customer loyalty and enhance business goals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
