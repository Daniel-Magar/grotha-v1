import React, { useRef, useState, useEffect } from "react";

const Step1 = ({ formData, setFormData, step, setStep }) => {
  // const nameRef = useRef();
  // const errRef = useRef();

  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);
  // useEffect(() => {
  //   setErrMsg("");
  // }, [formData]);
  const name = React.useRef("");
  const [isValid, setIsValid] = useState(true);

  const nameBlurData = (name) => {
    console.log("name", name);

    setIsValid(!!name);
    console.log(isValid);
  };

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
        {/* <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p> */}
        <input
          type="text"
          className="w-full md:w-[96%] bg-transparent outline-none border border-b-white border-l-0 border-t-0 border-r-0 text-[19px]"
          placeholder="Type the Answer here"
          value={formData.name}
          onBlur={() => nameBlurData(name.current.value)}
          ref={name}
          autoComplete="off"
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
            setIsValid(true);
          }}
          name={formData.name}
          // required
        />
        <br />
        {!isValid && (
          <span className="text-[16px] text-yellow-500 transition-all ease-in-out duration-500 fade-in-text">
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
            if (formData.name == "") {
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
  );
};

export default Step1;
