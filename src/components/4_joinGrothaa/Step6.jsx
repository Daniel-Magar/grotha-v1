import React, { useEffect, useState } from "react";
// import userData from "./step5Data";

const userData = [
  { choice: "A", value: "Advertising" },
  { choice: "B", value: "Affiliate Marketing" },
  { choice: "C", value: "Commission on transaction" },
  { choice: "D", value: "Donation" },
  { choice: "E", value: "E-Commerce-Product" },
  { choice: "F", value: "E-Commerce-Service" },
  { choice: "G", value: "Free-For-Service" },
  { choice: "H", value: "Freemium" },
  { choice: "I", value: "Interest" },
  { choice: "J", value: "Landing" },
  { choice: "K", value: "Licensing" },
  { choice: "L", value: "Physical Commerce" },
  { choice: "M", value: "Renting/Leasing" },
  { choice: "N", value: "Selling Data" },
  { choice: "O", value: "Sponsorship" },
  { choice: "P", value: "Subscribstion" },
  { choice: "Q", value: "Other" },
];

const Step6 = ({ formData, setFormData, setStep }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [users, setUsers] = useState([]);

  const [selected, setSelected] = useState(false);

  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  function handleChange(data) {
    console.log(data);
    let selectedData = users.map((user) =>
      user.value === data ? { ...user, isChecked: true } : user
    );

    setUsers(selectedData);
  }

  const [groupUsers, setGroupUsers] = useState([]);

  useEffect(() => {
    var newArray = users.filter(function (el) {
      return el.isChecked === true;
    });
    console.log(newArray);
    setGroupUsers(newArray);
    setFormData({
      ...formData,
      revenue_stream: newArray,
    });
  }, [users]);

  useEffect(() => {
    console.log(formData);

    console.log(isClicked);
  }, [users, formData]);

  const [groupOfusers, setGroupofUsers] = useState([]);

  const save = (e) => {
    let selectUsers = groupUsers.map((user) => {
      return { ...user };
    });
    setGroupofUsers(selectUsers);
    e.preventDefault();
    let tempUser = users.map((user) => {
      return { ...user, isChecked: false };
    });
    setUsers(tempUser);
  };
  return (
    <div>
      <div className="w-full md:ml-[8rem] lg:ml-[10rem]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col ">
            <div className="text-[20px] md:text-[23px] font-semibold ">6.</div>
            <div className="hidden lg:flex p-5  "></div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-[20px] md:text-[23px] font-semibold">
                What is your revenue stream? (max 4)This question is required. *
              </p>
              <p className="text-[18px] text-[#ACACAC]">
                Make between 1 to 2 choice
              </p>
            </div>
            <div className="py-10 ">
              <div className="flex flex-col gap-1 md:gap-5  dd h-[16.8rem]  lg:h-[21rem] overflow-y-scroll overflow-x-hidden w-[100%] md:w-[70%] lg:w-[100%] xl:w-[100%]">
                {users.map((data, index) => (
                  <div
                    key={index}
                    className="w-[100%] md:w-[100%] lg:w-[90%] xl:w-[80%] lg:pr-[5rem] xl:pr-[10rem]"
                    // className="w-[50%]  lg:pr-[10rem]"
                    onClick={(e) => handleChange(data.value)}
                  >
                    <div
                      className={`${
                        data.isChecked === true
                          ? " bg-transparent  flex gap-3 md:gap-3 lg:gap-5 border border-[#828282]  hover:bg-transparent cursor-pointer  rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold"
                          : "flex gap-3 md:gap-3 lg:gap-5 border-[#828282] hover:bg-transparent cursor-pointer  rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold custCheckbox "
                      }`}
                    >
                      <div className="flex justify-center items-center border rounded text-[12px] md:text-[20px] lg:text-[22px]  w-[2.5rem] h-[2rem] md:w-[2rem] lg:w-[2.5rem] text-center font-semibold custCheckbox_letter">
                        {data.choice}
                      </div>

                      <div className="w-full text-[12px] md:text-[20px] lg:text-[22px] font-semibold">
                        {data.value}
                      </div>
                      {/* <div
                      className={`${
                        isClicked === true
                          ? "bg-red-600 text-[16px] md:text-[22px]"
                          : "text-[16px] md:text-[22px]"
                      }`}
                    >
                      Checked
                    </div> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-5 justify-start items-center py-1 mt-8">
                <button
                  type="Submit"
                  className="px-12 py-1 md:px-14 md:py-2 bg-[#FFFFFF] text-black border rounded text-[22px] md:text-[25px] font-semibold md:font-bold"
                  onClick={() => {
                    setStep((currStep) => currStep + 1);
                  }}
                >
                  OK
                </button>
                {/* <div className="text-[14px]">
                Press <b> Enter </b>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-[93%] md:w-[70%] lg:w-[50%] xl:w-[40%] ">
          <div className="flex gap-3 md:gap-3 lg:gap-5 border-[#828282] hover:bg-transparent cursor-pointer rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold custCheckbox ">
            <div className="flex justify-center items-center border rounded text-[18px] w-[4rem] h-[2rem]  text-center font-semibold custCheckbox_letter">
              B
            </div>

            <div className="w-full text-[16px] md:text-[22px] font-semibold">
              {" "}
              B2B
            </div>
            <div className="text-[16px] md:text-[22px] ">Checked</div>
          </div>
        </div> */}

        {/* <div className="w-[93%] md:w-[70%] lg:w-[50%] xl:w-[40%] ">
          <div className="flex gap-3 md:gap-3 lg:gap-5 border-[#828282] hover:bg-transparent cursor-pointer rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold custCheckbox ">
            <div className="flex justify-center items-center border rounded text-[18px] w-[4rem] h-[2rem]  text-center font-semibold custCheckbox_letter">
              C
            </div>

            <div className="w-full text-[16px] md:text-[22px] font-semibold">
              {" "}
              B2Bs
            </div>
            <div className="text-[16px] md:text-[22px] ">Checked</div>
          </div>
        </div> */}
        {/* <div className="w-[93%] md:w-[70%] lg:w-[50%] xl:w-[40%] ">
          <div className="flex gap-3 md:gap-3 lg:gap-5 border-[#828282] hover:bg-transparent cursor-pointer  rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold custCheckbox ">
            <div className="flex justify-center items-center border rounded text-[18px] w-[4rem] h-[2rem]  text-center font-semibold custCheckbox_letter">
              D
            </div>

            <div className="w-full text-[16px] md:text-[22px] font-semibold">
              {" "}
              B2Bs
            </div>
            <div className="text-[16px] md:text-[22px] ">Checked</div>
          </div>
        </div> */}
        {/* <div className="w-[93%] md:w-[70%] lg:w-[50%] xl:w-[40%] ">
          <div className="flex gap-3 md:gap-3 lg:gap-5 border-[#828282] hover:bg-transparent cursor-pointer rounded px-[3px] py-[6px] pl-[8px] justify-center items-center text-[20px] md:text-[20px] font-semibold custCheckbox ">
            <div className="flex justify-center items-center border rounded text-[18px] w-[4rem] h-[2rem]  text-center font-semibold custCheckbox_letter">
              E
            </div>

            <div className="w-full text-[16px] md:text-[22px] font-semibold">
              {" "}
              B2Bs
            </div>
            <div className="text-[16px] md:text-[22px] ">Checked</div>
          </div>
        </div> */}

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
      </div>
    </div>
  );
};

export default Step6;
