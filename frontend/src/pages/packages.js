import React,{useState} from 'react'
import HeaderAndNav from '../components/common/headerAndNav'
import MessageIcon from '../components/elements/messageIcon'
import PackageMsg from '../components/elements/packageMsg'
import Cards from '../components/elements/cards'
import BasicCard from '../components/elements/basicCard'
import Toggle from '../components/elements/toggle'
import ActiveCards from '../components/elements/activeCards'


  
const Packages = () => {
   
    
  return (
    <div>
            <HeaderAndNav/>
        <div className='  mt-[-28px] ml-[1499px] leading-[26px]  font-[Open Sans] text-[#3264F5] underline underline-offset-4  font-semibold text-[18px] font-normal'>
        LOG OUT
        </div>
       
        <div className="flex flex-row items-center space-x-[322px] mt-[30px]">
        <div className='  mt-[55px] ml-[556px] leading-[44.3px] font-[Open Sans] text-[#868686]   font-semibold text-[18px] font-normal'>
        My Current Active Packages
        </div>
        <div className=" box-border mt-[50px]   w-[40px] h-[40px] border-[1px] border-solid border-[#E0E0E0] rounded-full bg-[#01B3BB]">
        <div className='font-bold text-[32px] mt-[-9px] ml-[8px] text-white'>+</div>
        </div>
        </div>

         <div className="flex flex-col items-center gap-10 mt-[40px]">
        
        <ActiveCards/>
        <ActiveCards/>
        <ActiveCards/>
        </div>


        {/* <Toggle/> */}
   
    

        {/* <PackageMsg/> */}

        {/* <div className="flex flex-row justify-center space-x-[35px] mt-[-60px]">
       
        <BasicCard/>
        <Cards />
        </div> */}
       
       
        <div>{''}</div>
    </div>
  )
}

export default Packages