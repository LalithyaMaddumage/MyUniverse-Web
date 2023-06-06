import React,{useState} from 'react'

const NavBar = () => {
    const [homeHover, setHomeHover] = useState(false);
    const [aboutUsHover, setAboutUsHover] = useState(false);
    const [featuresHover, setFeaturesHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);
  
    const handleHomeHover = () => {
      setHomeHover(true);
    };
  
    const handleHomeLeave = () => {
      setHomeHover(false);
    };
  
    const handleAboutUsHover = () => {
      setAboutUsHover(true);
    };
  
    const handleAboutUsLeave = () => {
      setAboutUsHover(false);
    };
  
    const handleFeaturesHover = () => {
      setFeaturesHover(true);
    };
  
    const handleFeaturesLeave = () => {
      setFeaturesHover(false);
    };
    
    const handleContactHover = () => {
        setContactHover(true);
      };
    
      const handleContactLeave = () => {
        setContactHover(false);
      };

  return (
    <div className='relative'>
        <div className=" flex  h-[87px]  bg-[#2A302E]">
        <div className="absolute mt-[20px] ml-[52px]">
        <img src='assets/images/myUniverseLogo.png' alt="Logo" />
      </div>

      <div className="flex flex-row items-center space-x-[100px] ml-[800px]">
        <div className='mt-[5px]'
         onMouseEnter={handleHomeHover}
         onMouseLeave={handleHomeLeave}
        >
          <div
            className={`font-bold text-[14px] leading-[17px] text-[#A8A8A8]  ${
              homeHover ? 'text-[#D3FDFF] text-opacity-500' : ''
            }`}
           
          >
            Home
          </div>

        </div>
        <div className='mt-[5px]'
         onMouseEnter={handleAboutUsHover}
         onMouseLeave={handleAboutUsLeave}
        >
          <div
            className={`font-bold text-[14px] leading-[17px] text-[#A8A8A8]${
              aboutUsHover ? 'text-[#D3FDFF] text-opacity-500' : ''
            }`}
           
          >
            About
          </div>
         
        </div>
        <div className='mt-[5px]'
        onMouseEnter={handleFeaturesHover}
        onMouseLeave={handleFeaturesLeave}
        >
          <div
            className={`font-bold text-[14px] leading-[17px] text-[#A8A8A8]  ${
              featuresHover ? 'text-[#D3FDFF] text-opacity-500' : ''
            }`}
            
          >
           Features
          </div>
         
        </div>
        <div className='mt-[5px]'
        onMouseEnter={handleContactHover}
        onMouseLeave={handleContactLeave}
        >
          <div
            className={`font-bold text-[14px] leading-[17px] text-[#A8A8A8]  ${
              contactHover ? 'text-[#D3FDFF] text-opacity-500' : ''
            }`}
            
          >
           Contact
          </div>
         
        </div>
        <div className="box-border  p-[14px 75px 14px 20px]  mt-[-35px] ml-[93px]   ">
            <button className="absolute w-[132px] h-[38px]  border-[1px] border-solid border-[#42F7CC] rounded-[23px] hover: border-[1px] border-solid border-[#42F7CC] rounded-[23px] bg-[#42F7CC] text-[#2A302E] font-semibold font-Montserrat text-[14px] leading-[17px]">
            Register
            </button>
            </div>
      </div>
		
		</div>
    </div>
  )
}

export default NavBar