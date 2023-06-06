import React from 'react'
import HeaderAndNav from '../components/common/headerAndNav'
import MessageIcon from '../components/elements/messageIcon'
import PopUpMessage from '../components/elements/popUpMessage'
import MessageIconTwo from '../components/elements/messageIconTwo'

const Dashboard = () => {
  return (
    <div className='absolute mb-[25px]' >
        <HeaderAndNav/>
        <div className='  mt-[28px] ml-[99px] leading-[26px]  font-[Open Sans] text-[#3264F5] underline underline-offset-4  font-semibold text-[18px] font-normal'>
        LOG OUT
        </div>
        <div className='mt-9 ml-[99px] leading-26 font-open-sans text-black font-semibold text-18 font-normal'>
            From your account dashboard you can view 
            <span className="text-[#3264F5] text-500 underline underline-offset-4"> your packages</span> and edit your
            <span className="text-[#3264F5] text-500 underline underline-offset-4"> edit your password account details</span> 

        </div>
        <div className='ml-[1240px] mt-[-199px] shadow-lg'>
            <PopUpMessage/>
        </div>
        {/* <MessageIcon /> */}
        {/* <MessageIconTwo/> */}
        <div> <MessageIconTwo/></div>
    </div>
  )
}

export default Dashboard 