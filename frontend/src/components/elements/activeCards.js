import React from "react";

const ActiveCards = () => {
  return (
    <div>
      <div className="box-border   w-[599px] h-[76px]   border-[1px] border-solid border-[#E0E0E0]  bg-white">
        <div className=" ml-[30px] mt-[8px] leading-[26px]  font-[Open Sans] text-[18px] font-normal ">
          Standard
        </div>
        <div className="   leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-left ml-[30px]">
          Lorem ipsum dolor
        </div>
      </div>
      <div className="box-border   w-[143px] h-[76px] ml-[456px] mt-[-76px] border-[1px] border-solid border-[#E0E0E0]  bg-[#F1FEFF]">
        <div className="  mt-[20px] leading-[26px]  font-[Open Sans] text-[18px] font-bold text-center">
          $99
          <span className="text-[12px]">/month</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveCards;
