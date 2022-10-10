import React from "react";
import emailjs from "@emailjs/browser";

const Step10 = ({ formData, setFormData, setStep }) => {
  console.log("Lst step:", formData);
  const sendEmail = () => {
    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    debugger;
    emailjs
      .send(
        "service_nm433gh",
        "template_eqwgxol",
        formData,
        "q6yVnf9mQo16AMr9k"
      )

      .then(
        function (response) {
          debugger;
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          debugger;
          console.log("FAILED...", error);
        }
      );
    debugger;
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
        <div className="flex  flex-col lg:flex-row justify-start items-center">
          <div>
            <div className="py-10">
              <p className="text-[20px] md:text-[23px] font-semibold">
                Form Finalised?
              </p>
            </div>
            <div className="flex gap-5 justify-start items-center py-1 mt-12">
              <button
                type="Submit"
                className="px-12 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
                onClick={sendEmail}
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
