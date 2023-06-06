import React from 'react'
import SendMsg from './sendMsg'
import RecievedMsg from './recievedMsg'

const SingleChatView = () => {
  return (
    <div>
        <div className="flex flex-col ml-[455px] ">
        <div className="box-border    w-[1140px] h-[685px]   bg-[#F8F8FF]">
        <div className="   leading-[26px] text-[#707070] mt-[30px] mr-[130px] font-[Open Sans] text-[15px] font-normal text-left ml-[30px]">
            Chat with 
          </div>
          <div className=" ml-[30px] mt-[8px] leading-[30px]  font-[Open Sans] text-[38px] font-semibold ">
            James Potter
          </div>
          <div className=" ml-[40px] mt-[45px] ">
           <RecievedMsg/>
           
          </div>
          <div className=" ml-[30px]  ">
           <SendMsg/>
           
          </div>
        </div>
        <div className="box-border    w-[1140px] h-[90px]    border-solid border-[#E0E0E0] bg-[#42F7CC] bg-opacity-[35%]">
        <div className="flex flex-row  ">
        <div className="box-border    w-[1000px] h-[60px] mt-[15px] ml-[15px] rounded-[5px] bg-[#FFFFFF]  bg-opacity-[35%]">
        </div>
        <img className='w-[40px] h-[40px] mt-[15px] ml-[10px]' src="assets/images/Plane.png" alt="msg" />
        </div>
        </div>



        </div>
    </div>
  )
}

export default SingleChatView