import React from "react";

const Step1 = ({ formData, setFormData, step, setStep }) => {
  return (
    <div className="w-full">
      <div>
        <p className="text-[20px] md:text-[23px] font-semibold">
          Hello/Namaste, what's your name, mobile number, email & company
          name?This question is required. *
        </p>
        <p className="text-[18px] text-[#ACACAC]">
          Separate names with a comma
        </p>
      </div>
      <div className="py-10">
        <input
          type="text"
          className="w-full md:w-[96%] bg-transparent outline-none border border-b-white border-l-0 border-t-0 border-r-0 text-[19px]"
          placeholder="Type the Answer here"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          name={formData.name}
        />
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

export default Step1;
