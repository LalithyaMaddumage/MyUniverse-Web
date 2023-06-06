import React from 'react'

const SendMsg = () => {
  return (
    <div className="flex flex-col items-end mr-[120px] ">
        <div className="flex flex-row   ">
        <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mr-[5px] mt-[-50px]  ">
            <button className=" w-[52px] h-[28px]  border-[1px] border-solid border-[#01B3BB] rounded-[15px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[15px] bg-[#01B3BB] text-white font-semibold font-Montserrat text-[15px] l">
              <span role="img" className='text-[15px]' >😍</span> 1
             
            </button>
            </div>
         <div className="  box-border  w-[456px] h-[90px]   border-none border-solid border-[#E0E0E0] rounded-br-none rounded-[35px] bg-[#42F7CC] bg-opacity-[35%]">
         <div className="   leading-[26px] text-[#707070] mt-[20px] mr-[30px] font-[Open Sans] text-[15px] font-normal text-right ml-[30px]">
            We make it simple to connect with us. Ask us anything, or share your
            feedback.
          </div>
         </div>
        
         </div>
         <div className="  leading-[26px] text-[#707070]  font-[Open Sans] text-[12px] font-normal  ">
            2.09 pm
          </div>

    </div>
  )
}

export default SendMsg