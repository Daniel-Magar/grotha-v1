import React from "react";

const Step4 = ({ formData, setFormData, setStep }) => {
  return (
    <div className="w-full md:ml-[8rem] lg:ml-[10rem]">
      <div>
        <p className="text-[20px] md:text-[23px] font-semibold">
          4. Company Business Model *
        </p>
        <p className="text-[18px] text-[#ACACAC]">Make between 1 to 2 choice</p>
      </div>
      <div className="py-10 flex flex-col gap-5 w-[85%] md:w-[60%] lg:w-[52%] dd">
        {/* <div>
          <label className="step4 p-5 text-[20px] md:text-[20px] font-semibold">
            <input type="checkbox" />
            B2B
          </label>
        </div>
        <div>
          <label className="step4 p-5 text-[20px] md:text-[20px] font-semibold">
            <input type="checkbox" />
            B2C
          </label>
        </div>
        <div>
          <label className="step4 p-5 text-[20px] md:text-[20px] font-semibold">
            <input type="checkbox" />
            B2B2C
          </label>
        </div>
        <div>
          <label className="step4 p-5 text-[20px] md:text-[20px] font-semibold">
            <input type="checkbox" />
            C2C
          </label>
        </div>
        <div>
          <label className="step4 p-5 text-[20px] md:text-[20px] font-semibold">
            <input type="checkbox" />
            B2G
          </label>
        </div> */}
        <div className="flex justify-center items-center">
          <div className="border p-1 ">A</div>
          <div>B2B</div>
        </div>
      </div>
      <div className="flex gap-5 justify-start items-center py-1">
        <button
          type="Submit"
          className="px-12 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
          onClick={() => {
            setStep((currStep) => currStep + 1);
          }}
        >
          OK
        </button>
        <div className="text-[14px]">
          Press <b> Enter </b>
        </div>
      </div>
    </div>
  );
};

export default Step4;
