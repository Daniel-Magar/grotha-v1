import React, { useState, useEffect } from "react";

const Step2 = ({ formData, setFormData, setStep }) => {
  const name = React.useRef("");
  const [isValid, setIsValid] = useState(true);

  const nameBlurData = (name) => {
    console.log("name", name);
    setIsValid(!!name);
    console.log(isValid);
  };
  return (
    // <div className="w-full md:ml-[8rem] lg:ml-[10rem]  border">
    //   <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
    //     <div className="flex flex-col lg:flex-row ">
    //       <div className="text-[20px] md:text-[23px] font-semibold"> 2.</div>
    //       <div className="hidden lg:flex p-5"></div>
    //     </div>

    //     <div className="flex  flex-col lg:flex-row justify-start items-center">
    //       <div>
    //         <p className="text-[20px] md:text-[23px] font-semibold">
    //           Brief description of your company (500-1000 char)*This question is
    //           required. *
    //         </p>
    //         <p className="text-[18px] text-[#ACACAC]">
    //           Separate names with a comma
    //         </p>
    //         <div className="py-10">
    //           <input
    //             type="text"
    //             className="w-full md:w-[96%] bg-transparent outline-none border border-b-white border-l-0 border-t-0 border-r-0 text-[19px]"
    //             placeholder="Type the Answer here"
    //             // onBlur={() => nameBlurData(name.current.value)}
    //             value={formData.company_descp}
    //             onChange={(event) => {
    //               setFormData({
    //                 ...formData,
    //                 company_descp: event.target.value,
    //               });
    //               setIsValid(true);
    //             }}
    //             name={formData.company_descp}
    //           />
    //           <br />
    //           {!isValid && (
    //             <span className="text-[16px] text-yellow-500 fade-in-text">
    //               {" "}
    //               This field is required!
    //             </span>
    //           )}
    //         </div>
    //         <div className="flex gap-5 justify-start items-center py-1">
    //           <button
    //             type="Submit"
    //             className="px-12 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
    //             onClick={(e) => {
    //               e.preventDefault();
    //               if (formData.company_descp == "") {
    //                 setIsValid(!isValid);
    //               } else {
    //                 setIsValid(true);
    //                 setStep((currStep) => currStep + 1);
    //               }
    //             }}
    //           >
    //             OK
    //           </button>
    //           <div className="text-[14px]">
    //             Press <b> Enter </b>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-black">2</div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full md:ml-[8rem] lg:ml-[10rem] fade-in-text">
      <div className="flex flex-col lg:flex-row justify-start items-start gap-8 ">
        <div className="flex flex-col lg:flex-row ">
          <div className="text-[20px] md:text-[23px] font-semibold"> 2.</div>
          <div className="hidden lg:flex p-5"></div>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div>
            <p className="text-[20px] md:text-[23px] font-semibold">
              Brief description of your company (500-1000 char)*This question is
              required. *
            </p>
            <p className="text-[18px] text-[#ACACAC]">
              Separate names with a comma
            </p>
            <div className="py-10">
              <input
                type="text"
                className="w-full md:w-[96%] bg-transparent outline-none border border-b-white border-l-0 border-t-0 border-r-0 text-[19px]"
                placeholder="Type the Answer here"
                value={formData.company_descp}
                // onBlur={() => nameBlurData(name.current.value)}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    company_descp: event.target.value,
                  });
                  setIsValid(true);
                }}
                name={formData.company_descp}
              />
              <br />
              {!isValid && (
                <span className="text-[16px] text-yellow-500 fade-in-text">
                  {" "}
                  This field is required!
                </span>
              )}
            </div>
            <div className="flex gap-5 justify-start items-center py-1">
              <button
                type="Submit"
                className="px-12 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  if (formData.company_descp == "") {
                    setIsValid(!isValid);
                  } else {
                    setIsValid(true);
                    setStep((currStep) => currStep + 1);
                  }
                }}
              >
                OK
              </button>
              <div className="text-[14px]">
                Press <b> Enter </b>
              </div>
            </div>
          </div>
          <div className="text-black">2</div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
