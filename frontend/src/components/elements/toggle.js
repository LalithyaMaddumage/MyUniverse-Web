import React,{useState} from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  return (
    <div>
          <div className='  mt-[55px] ml-[541px] leading-[44.3px] font-[Open Sans] text-[#868686]   font-semibold text-[18px] font-normal'>
        Please Select Payment Plan
        </div>
        <div className="flex flex-row justify-center space-x-[25px] mt-[18px]">
        <div className='   leading-[26px]  font-[Open Sans] text-[#3264F5]font-semibold text-[12px] font-normal'>
        Yearly
        </div>
        <div
      className={`relative inline-block items-center w-12 h-6 ${
        isOn ? 'bg-[#01B3BB]' : 'bg-gray-200'
      } rounded-full cursor-pointer`}
      onClick={handleToggle}
    >
      <div
        className={`absolute left-0 top-0 w-6 h-6 bg-[#A8A8A8] rounded-full transform transition-transform duration-300 ease-in-out ${
          isOn ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>
    </div>
    <div className='   leading-[26px]  font-[Open Sans] text-[#3264F5]font-semibold text-[12px] font-normal'>
        Monthly
        </div>
    </div>
    </div>
  )
}

export default Toggle