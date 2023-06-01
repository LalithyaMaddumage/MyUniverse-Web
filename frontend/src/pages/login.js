import React from "react";
import Header from "../components/common/header";
import Background from '../components/common/background';

const Login = () => {
  return (
    <div className="relative">
          <div className="absolute  inset-0 z-0">
        <Background />
      </div>
      <Header />
      <div className="flex ">
        <div className="absolute mt-[220px] ml-[205px] mb-[256px]">
          <img src="assets/images/phone2.png" alt="Logo" />
        </div>
        <div className="absolute h-[45px] ml-[1403px] mt-[220px] mr-[79px] leading-[44px] font-Montserrat font-semibold	text-3xl/[25px]">
          Login
        </div>

        <div class="flex flex-col z-10 ...">
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] ml-[881px] mt-[428px]">
            <input
              className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-xs-[12px] leading-[15px]"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] ml-[881px] mt-[120px]  ">
            <input
              className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-xs-[12px] leading-[15px]"
              placeholder="Enter Your Email Password"
            />
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] ml-[881px] mt-[120px]  ">
            <button className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat  leading-[22px]">
              TAKE ME IN!
            </button>
          </div>
          <div className="absolute ml-[1160px] mt-[734px] mr-[64px] h-[45px] ">
            <div className="text-black font-semibold font-Montserrat text-2xl/[20px] leading-[44px]">
              Don't you have an account ?
            </div>
          </div>
          <div className="absolute ml-[1287px] mt-[784px] mr-[64px] h-[45px] ">
            <div className="text-[#01B3BB] font-semibold font-Montserrat text-2xl/[24px] leading-[44px] ">
              Register Here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
