import React from 'react'

const CompanyProfileForm = () => {
  return (
    <div className='mr-[600px] mt-[28px] mb-[20px] flex flex-col  items-center'>
    {/* Form fields for step 3 */}
    {/* <div className='h-[45px] mt-[28px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] '>Register as Company </div> */}
    <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[35px]   ">
    
    <input
      className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Enter Business Name"
   
    />
    
  </div>
  
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ">
    
    <input
      className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Company Number"
   
    />
    
  </div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]    ">
    
    <input
      className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Address Line 1"
   
    />
    
  </div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ">
    
    <input
      className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Address Line 1"
   
    />
    
  </div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ">
    
    <input
      className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="State"
   
    />
    
  </div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[600px]  ">
    
    <input
      className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Postal Code"
   
    />
    
  </div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]     ">
    
    <input
      className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="Country"
   
    />
    
  </div>
  <div className=' flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[55px] ml-[95px]'>  <label className='text-[#1E1E1E] text-[12px] leading-[15px]'>Current Password</label></div>
  <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]     ">
 
    <input
      className="absolute mt-[75px]  w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
      placeholder="*****"
      type='password'
   
    />
  </div>
  <div className=' flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px] ml-[130px]'>
    <input type='checkbox'/>
   <label className='text-[#1E1E1E] text-[12px] leading-[15px]'>Change Password</label>
   </div>

  

   
   
   
  </div>
  )
}

export default CompanyProfileForm