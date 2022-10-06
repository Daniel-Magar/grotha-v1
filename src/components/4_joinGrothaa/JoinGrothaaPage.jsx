import React from "react";
import prev from "../../assets/img/joinGrotha/prev.png";
import next from "../../assets/img/joinGrotha/next.png";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";

const JoinGrothaaPage = () => {
  const [step, setStep] = useState(0);
  const formtSteps = [
    "Step1",
    "Step2",
    "Step3",
    "Step4",
    "Step5",
    "Step6",
    "Step7",
    "Step8",
    "Step9",
    "Step10",
  ];

  const PageDisplay = () => {
    if (step == 0) {
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 1) {
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 2) {
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 3) {
      return (
        <Step4
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 4) {
      return (
        <Step5
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 5) {
      return (
        <Step6
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 6) {
      return (
        <Step7
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 7) {
      return (
        <Step8
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 8) {
      return (
        <Step9
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    } else if (step == 9) {
      return (
        <Step10
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
  };

  const [formData, setFormData] = useState({
    // step1: {
    //   name: "John Doe",
    //   mobile_no: "7898787676",
    //   emial: "abc@gmail.com",
    //   company: "abc",
    // },
    name: "",
    company_descp: "",
    company_business_model: "",
    company_business_model2: "",
    revenue_stream: "",
    month_revenue: "",
    funding_details: "",
    competitor: "",
    finalized: "",
  });
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center text-3xl  relative">
      <div className=" w-[75%] sm:w-[70%] md:w-[85%] flex flex-col ">
        <div className="form   ">
          <div className="form-container md:w-[70%]">
            {/* <div className="">{formtSteps[step]}</div> */}
            <div className="body">
              <form action="">{PageDisplay()}</form>
            </div>
          </div>

          <div className="footer absolute bottom-0 right-0 mb-[3rem] mr-[2rem] md:mr-[9rem]">
            <div className="flex gap-[1px] float-right">
              <div className="flex justify-center items-center">
                {step === formtSteps.length - 1 ? (
                  ""
                ) : (
                  <button
                    className="px-5 py-3 md:px-9 md:py-4 border rounded-l-lg bg-[#FFFFFF]"
                    onClick={() => {
                      setStep((currStep) => currStep - 1);
                    }}
                    disabled={step == 0}
                  >
                    <img src={prev} alt="" className="w-3 md:w-full" />
                  </button>
                )}
              </div>
              <div className="flex justify-center items-center">
                {step === formtSteps.length - 1 ? (
                  <button className="px-6 py-1 md:px-8 md:py-2 border bg-[#FFFFFF] text-black">
                    OK
                  </button>
                ) : (
                  <button
                    className="px-5 py-3 md:px-9 md:py-4   border rounded-r-lg bg-[#FFFFFF]"
                    onClick={() => {
                      setStep((currStep) => currStep + 1);
                    }}
                    disabled={step == formtSteps.length - 1}
                  >
                    <img src={next} alt="" className="w-3 md:w-full" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGrothaaPage;
