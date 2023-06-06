import React from 'react'

const Chat = () => {
  return (
    <div>
                <div className=" absolute box-border    w-[456px] h-[90px]   border-none border-solid border-[#E0E0E0] bg-[#42F7CC] bg-opacity-[15%]">
                <div className="flex flex-row   ">
                <img className='mt-[20px] ml-[25px] w-[50px] h-[50p] rounded-full' src="assets/images/profile1.jpg" alt="msg" />
                <div className="flex flex-col ">
                <div className="   leading-[26px] text-[#707070] mt-[20px] font-[Open Sans] text-[14px] font-bold text-left ml-[30px]">
                   James Potter
                </div>
                <div className="   leading-[26px] text-[#707070]  font-[Open Sans] text-[12px] font-normal text-left ml-[30px]">
                    Typically replies in a few hours
                </div>
                </div>
                <div className="flex flex-col ">
                <div className="   leading-[26px] text-[#707070] mt-[20px]  font-[Open Sans] text-[10px] font-bold text-left ml-[100px]">
                   11.35 am
                </div>
                <img className='mt-[5px] ml-[109px] w-[20px] h-[20p] rounded-full' src="assets/images/read.png" alt="msg" />
                </div>
                </div>
                </div>
    </div>
  )
}

export default Chat