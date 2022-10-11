import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Step10 = ({ formData, setFormData, setStep }) => {
  const [showMsg, setShowMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    if (formData.name === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.company_descp === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.socialnetwork === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.company_business_model === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.company_business_model2 === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.revenue_stream === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.month_revenue === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.funding_details === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.competitor === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }
    if (formData.competitor === "") {
      setValidationMsg(
        "*Fields are required! Please fill all required fields."
      );
      return;
    }

    emailjs
      .send(
        "service_nm433gh",
        "template_eqwgxol",
        formData,
        "q6yVnf9mQo16AMr9k"
      )

      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setShowMsg(true);
          setSuccessMsg("Data has been submitted succesfully!");
          setTimeout(() => {
            setShowMsg(false);
          }, 4000);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    setFormData({
      name: "",
      company_descp: "",
      socialnetwork: "",
      company_business_model: "",
      company_business_model2: "",
      revenue_stream: "",
      month_revenue: "",
      funding_details: "",
      competitor: "",
      finalized: "",
    });
    navigate("/join-grothaa");
  };

  return (
    <div className="w-full ">
      {showMsg ? (
        <span className="text-green-400 text-[16px] fade-in-text">
          {successMsg}
        </span>
      ) : (
        ""
      )}
      {validationMsg && (
        <span className="text-yellow-400 text-[12px] md:text-[16px] fade-in-text ">
          {validationMsg}
        </span>
      )}
      <div className="flex flex-col lg:flex-row justify-start items-start gap-8 ">
        <div className="flex  flex-col lg:flex-row justify-start items-center ">
          <div>
            <div className="py-10">
              <p className="text-[20px] md:text-[23px] font-semibold">
                Form Finalised?
              </p>
            </div>
            <div className="flex gap-5 justify-start items-center py-1 mt-12">
              <button
                type="Submit"
                className="px-10 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
                onClick={(e) => sendEmail(e)}
              >
                OK
              </button>
            </div>
          </div>
          <div className="text-black">2</div>
        </div>
      </div>
    </div>
  );
};

export default Step10;
