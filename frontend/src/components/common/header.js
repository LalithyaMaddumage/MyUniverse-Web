import React from 'react';


const Header = () => {
  return (
    <div className='flex ' >
      <div  className="absolute mt-[34px] ml-[72px] w-[145px] h-[52px]">
        <img  src='assets/images/myUniverseLogo.png' alt="Logo"  />
      </div>
      <div className="absolute ml-[1403px] mt-[58px] ">   <img className='w-[44px] ' src='assets/images/leftArrow.png' alt="Arrow"  /> </div>
    </div>
  );
};

export default Header;