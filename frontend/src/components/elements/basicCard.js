import React from 'react'

const BasicCard = () => {
  return (
    <div>
       
        
        <div className="box-border    w-[278px] h-[351px] mb-[40px] mt-[130px] border-[1px] border-solid border-[#E0E0E0] bg-white">
        <input type="radio" className="checked:bg-[#01B3BB] mt-[10px] ml-[248px]" />

        <div className='  mt-[28px] leading-[26px]  font-[Open Sans] text-[18px] font-normal text-center'>
     Basic
        </div>
        <div className='  mt-[18px] leading-[26px]  font-[Open Sans] text-[32px] font-bold text-center'>
        $0
        <span className="text-[18px]"></span> 
        </div>
        <div className='  mt-[28px] leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-left ml-[30px]'>
            <span className="text-[18px] "> *   </span>Lorem ipsum dolor  
            </div>
            <div className='  leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-left ml-[30px]'>
            <span className="text-[18px] "> *   </span>Lorem ipsum dolor  
            </div>
            <div className=' leading-[26px] text-[#707070]  font-[Open Sans] text-[15px] font-normal text-left ml-[30px]'>
            <span className="text-[18px] "> *   </span>Lorem ipsum dolor  
            </div>
            <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[47px] ml-[73px]   ">
            <button className="absolute w-[132px] h-[38px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat text-[12px] leading-[15px]">
             SELECT
            </button>
            </div>
        </div>
        

    </div>
  )
}

export default BasicCard