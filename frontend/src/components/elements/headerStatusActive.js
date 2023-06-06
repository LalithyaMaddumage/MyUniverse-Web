import React from 'react'

const HeaderStatusActive = () => {
  return (
    <div className='flex'>
    <div className="absolute ml-[1380px] mt-[75.5px]">
    <div className='font-bold text-[18px] font-[Open Sans] leading-[26px]'>Status{''} :</div>
  </div>
  <div className="absolute ml-[1460px] mt-[83px]">
    <div className='font-bold text-[18px] font-[Open Sans] leading-[26px]'><img src='assets/images/circle1.png' alt="Logo" /></div>
  </div>
  <div className="absolute ml-[1490px] mt-[75.5px]">
    <div className='font-bold text-[18px] font-[Open Sans] leading-[26px] text-[#A8A8A8]'>Active</div>
  </div>
  </div>
  )
}

export default HeaderStatusActive