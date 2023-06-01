import React from 'react'
import Background from '../components/common/background'


const RegTypeSelection = () => {
  return (
    <div className='relative'>

         <div className="absolute  inset-0 z-0">
        <Background/>
      </div>
       
        <div className='flex relative flex-col items-center justify-center z-20'>
            <div className=' h-[45px]   mt-[132px] leading-[44px] text-4xl font-Montserrat font-semibold'>
                How are you planning to use MyUniverse.com
            </div>
            <div className=' h-[45px] ml-[28.44%] mr-[28.44%]  mt-[25px] leading-[26px] text-sm font-[Open Sans] font-normal text-center text-[#707070]'>
            Distinctively grow go forward manufactured products and optimal networks. Enthusiastically disseminate user-centric outsourcing through revolutionary
            </div>
            <div className="flex flex-row justify-center space-x-[35px]">
            <div className="box-border    w-[278px] h-[351px]  mt-[130px] border-[1px] border-solid border-[#E0E0E0] bg-white">
            <input type="radio" className="checked:bg-[#01B3BB] mt-[10px] ml-[248px]" />
            <div className="flex flex-row justify-center items-center w-[111px] h-[94px] mt-[70px] ml-[84px]">
          <img src="assets/images/image9.png" alt="Logo" />
        </div>
        <div className='  mt-[28px] leading-[26px]  font-[Open Sans] text-[18px] font-normal text-center'>
           Individual
            </div>
            <div className='  mt-[12px] ml-[12px] mr-[12px] leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            </div>
            
            <div className="box-border items-center  w-[278px] h-[351px]  mt-[130px] border-[1px] border-solid border-[#E0E0E0] bg-white ">
            <input type="radio" className="checked:bg-[#01B3BB] mt-[10px] ml-[248px] border-[#292929] border-solid borde-[1px]" />
            <div className="flex flex-row justify-center items-center w-[111px] h-[94px] mt-[70px] ml-[84px]">
          <img src="assets/images/image11.png" alt="Logo" />
        </div>
        <div className='  mt-[28px] leading-[26px]  font-[Open Sans] text-[18px] font-normal text-center'>
           Company
            </div>
            <div className='  mt-[12px] ml-[12px] mr-[12px]  leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </div>
            </div>
           
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[98px] mb-[98px] ">
            <button className=" w-[371px] h-[58.28px]  border-[1px] border-solid border-[#01B3BB] rounded-[23px] uppercase hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-[#FEFCFE] font-semibold font-Montserrat text-2xl/[18px] leading-[22px]">
              Continue
            </button>
          </div>
          
             </div>
          
          


    </div>
  )
}

export default RegTypeSelection