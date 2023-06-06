import React from "react";

const PopUpMessage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center  ">
        <div className="box-border    w-[435px] h-[209px]   border-[1px] border-solid border-[#E0E0E0] bg-white">
          <div className=" ml-[30px] mt-[28px] leading-[26px]  font-[Open Sans] text-[25px] font-semibold ">
            Hi there !
          </div>
          <div className="   leading-[26px] text-[#707070] mt-[30px] mr-[130px] font-[Open Sans] text-[15px] font-normal text-left ml-[30px]">
            We make it simple to connect with us. Ask us anything, or share your
            feedback.
          </div>
        </div>
        <div className="box-border    w-[435px] h-[477px]   border-[1px] border-solid border-[#E0E0E0] border-t-0 bg-[#42F7CC] bg-opacity-[35%]">
          <div className=" ml-[30px] mt-[326px] leading-[26px]  font-[Open Sans] text-[25px] font-semibold ">
            We are online !
          </div>
          <div className="   leading-[26px] text-[#707070] mt-[5px] mr-[130px] font-[Open Sans] text-[12px] font-normal text-left ml-[30px]">
            Typically replies in a few hours
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[47px] ml-[24px]  ">
            <button className="absolute w-[385px] h-[52.82px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat text-[13px] leading-[16px]">
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMessage;
