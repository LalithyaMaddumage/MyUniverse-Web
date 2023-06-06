import React from 'react'
import HomeSectionOneImageView from '../elements/homeSectionOneImageView'

const HomeSectionOne = () => {
  return (
    <div className='relative'>
        <div className="flex flex-row ">
          <div
            className={`flex flex-col text-left mt-[140px] ml-[90px]`}>
            <div className=' font-semibold text-[44px] leading-[56px] text-[#000000] mr-[950px]'>
                The Ultimate Advertising Platform for Business
            </div>
            <div className=' font-normal text-[22px] mt-[10px] leading-[140.26%] text-[#969696] mr-[900px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="box-border  p-[14px 75px 14px 20px]  mt-[65px]  ">
            <button className=" w-[192px] h-[52px]  border-[1px] border-solid border-[#01B3BB] rounded-[23px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[23px] bg-[#01B3BB] text-[#FEFCFE] font-semibold font-Montserrat text-[16px] leading-[22px]">
            ABOUT US
            </button>
            </div>
            <div className="flex flex-row space-x-[70px] ">
            <div className=" mt-[95px] ">
            <img className='w-[100px] h-[50px]' src='assets/images/fedex.png' alt="section1" />
            </div>
            <div className=" mt-[95px] ">
            <img className='w-[150px] h-[70px]' src='assets/images/ferrarie.png' alt="section1" />
            </div>
            <div className=" mt-[95px] ">
            <img className='w-[120px] h-[60px]' src='assets/images/ibm.png' alt="section1" />
            </div>
            <div className=" mt-[95px] ">
            <img className='w-[120px] h-[60px]' src='assets/images/lacoste.png' alt="section1" />
            </div>
            </div>
          
         
     
        <div className='ml-[1100px] mt-[-620px]'>
            <HomeSectionOneImageView/>
        </div>
        </div>
        </div>
        <div className=" mt-[500px] ">
            <img className=' w-[1700px]' src='assets/images/vector.png' alt="section1" />
            </div>
    </div>
  )
}

export default HomeSectionOne