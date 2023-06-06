
import React, { useState } from 'react';
import HeaderStatusPending from '../elements/headerStatusPending';
import HeaderStatusVerifiying from '../elements/headerStatusVerifiying';
import HeaderStatusAwaiting from '../elements/headerStatusAwaiting';
import HeaderStatusActive from '../elements/headerStatusActive';

const HeaderAndNav = () => {
  const [dashboardHover, setDashboardHover] = useState(false);
  const [packagesHover, setPackagesHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);

  const handleDashboardHover = () => {
    setDashboardHover(true);
  };

  const handleDashboardLeave = () => {
    setDashboardHover(false);
  };

  const handlePackagesHover = () => {
    setPackagesHover(true);
  };

  const handlePackagesLeave = () => {
    setPackagesHover(false);
  };

  const handleAccountHover = () => {
    setAccountHover(true);
  };

  const handleAccountLeave = () => {
    setAccountHover(false);
  };

  return (
    <div className='relative'>
      <div className="absolute mt-[50px] ml-[72px]">
        <img src='assets/images/myUniverseLogo.png' alt="Logo" />
      </div>

      <HeaderStatusActive/>
      <hr className='absolute w-full border-[2px] solid bg-[#DADBD8] mt-[186px]' />
      <div className="flex flex-row justify-center space-x-[50px]">
        <div className='mt-[240px]'
         onMouseEnter={handleDashboardHover}
         onMouseLeave={handleDashboardLeave}
        >
          <div
            className={`flex flex-col justify-center font-bold text-[18px] leading-[26px] text-[#A8A8A8] text-center ${
              dashboardHover ? 'text-blue-500' : ''
            }`}
           
          >
            DASHBOARD
          </div>
          {/* <hr
            className={`w-[100px] ml-[6px] border-[2px] solid bg-[#DADBD8] mt-[9px] ${
              dashboardHover ? 'bg-blue-500' : ''
            }`}
          /> */}
            <img className='ml-[2px] mt-[9px]' src='assets/images/line3.png' alt="Logo" />
        </div>
        <div className='mt-[240px]'
         onMouseEnter={handlePackagesHover}
         onMouseLeave={handlePackagesLeave}
        >
          <div
            className={`flex flex-col justify-center font-bold text-[18px] leading-[26px] text-[#A8A8A8] text-center ${
              packagesHover ? 'text-blue-500' : ''
            }`}
           
          >
            YOUR PACKAGES
          </div>
          {/* <hr
            className={`w-[100px] ml-[25px] border-[2px] solid bg-[#DADBD8] mt-[9px] ${
              packagesHover ? 'bg-blue-500' : ''
            }`}
          /> */}
            <img className='ml-[20px] mt-[9px]' src='assets/images/line5.png' alt="Logo" />
        </div>
        <div className='mt-[240px]'
        onMouseEnter={handleAccountHover}
        onMouseLeave={handleAccountLeave}
        >
          <div
            className={`flex flex-col justify-center font-bold text-[18px] leading-[26px] text-[#A8A8A8] text-center ${
              accountHover ? 'text-blue-500' : ''
            }`}
            
          >
            ACCOUNT DETAILS
          </div>
          <img className='ml-[25px] mt-[9px]' src='assets/images/line5.png' alt="Logo" />
          {/* <hr
            className={`w-[100px] ml-[30px] border-[2px] solid bg-[#DADBD8] mt-[9px] ${
              accountHover ? 'bg-blue-500' : ''
            }`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderAndNav;
