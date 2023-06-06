import React,{useState} from 'react'


const HeaderAndNavAdmin = () => {
    const [dashboardHover, setDashboardHover] = useState(false);
    const [packagesHover, setPackagesHover] = useState(false);
    const [accountHover, setAccountHover] = useState(false);
  
    const handleDashboardHover = () => {
      setDashboardHover(true);
    };
  
    const handleDashboardLeave = () => {
      setDashboardHover(false);
    };
  
    const handlePackagesHover = () => {
      setPackagesHover(true);
    };
  
    const handlePackagesLeave = () => {
      setPackagesHover(false);
    };
  
    const handleAccountHover = () => {
      setAccountHover(true);
    };
  
    const handleAccountLeave = () => {
      setAccountHover(false);
    };
  return (
    <div className='relative'>
    <div className="absolute mt-[50px] ml-[72px]">
      <img src='assets/images/myUniverseLogo.png' alt="Logo" />
    </div>

    <div className='flex'>
    <div className="absolute ml-[1480px] mt-[75.5px]">
    <div className='font-bold text-[18px] font-[Open Sans] leading-[26px]'>Admin</div>
  </div>
  </div>
    <hr className='absolute w-full border-[2px] solid bg-[#DADBD8] mt-[186px]' />
   
  </div>
  )
}

export default HeaderAndNavAdmin