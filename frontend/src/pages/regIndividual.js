import React, { useState } from 'react';
import Header from '../components/common/header';
import Background from '../components/common/background';

const RegIndividual = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="relative">
       
       <div className="absolute  inset-0 z-0">
        <Background />
      </div>
      <Header />
      
      
      <div className="flex z-10 ">
        <div className="absolute mt-[220px] ml-[205px] mb-[256px]">
          <img src="assets/images/phone2.png" alt="Logo" />
        </div>

        <div className=' mt-[170px] z-10'>
          <div>
           {/* Progress Bar */}
          <div className="flex justify-between items-center ml-[1068px] mb-4 w-[358px]">
            {Array.from(Array(totalSteps), (_, index) => (
              <div
                key={index}
                className={`w-[51px] h-[51px] flex justify-center items-center rounded-full border-2 ${
                  index < currentStep ? 'border-[#01B3BB] boarde-500 bg-[#01B3BB] border-500' : 'border-[#D9D9D9] border-300 bg-[#D9D9D9]'
                }`}
              >
                {index < currentStep ? (
                  <span className="text-white">{index + 1}</span>
                ) : (
                  <span className="text-gray-500">{index + 1}</span>
                )}
              </div>
            ))}
          </div>

            {/* Step content */}
            {currentStep === 1 && (
              <div>
                {/* Form fields for step 1 */}
                <div className='h-[45px] mt-[28px] ml-[1145px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] ' >Register as Individual</div>
                {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNextStep}
                >
                  Next
                </button> */}

                
        <div class="flex flex-col mt-[190px] ...">
         
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[120px] ml-[881px]  ">
            <input
              className="absolute w-[588px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-xs-[12px] leading-[15px]"
              placeholder="Enter Your Email Password"
            />
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[120px] ml-[881px]  ">
            <button className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat  leading-[22px]"  onClick={handleNextStep}>
              CONTINUE
            </button>
          </div>
          <div className="absolute ml-[1160px]  mt-[300px]  mr-[64px] h-[45px] ">
            <div className="text-black font-semibold font-Montserrat text-2xl/[20px] leading-[44px]">
              Don't you have an account ?
            </div>
          </div>
          <div className="absolute  mt-[350px] ml-[1287px] mr-[64px] h-[45px] ">
            <div className="text-[#01B3BB] font-semibold font-Montserrat text-2xl/[24px] leading-[44px] ">
              Login Here
            </div>
          </div>
        </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                {/* Form fields for step 2 */}
                <div className='h-[45px] mt-[28px] ml-[1200px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] '>Verify Your Email </div>
                
                <div className=' h-[45px] ml-[1055px]  mr-[260px]  mt-[19px] leading-[26px] text-sm font-[Open Sans] font-normal text-right  text-[#707070]'>
                we have sent you a code into your email ****@gmail.com please type it below and confirm
            </div>

                <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[275px] ml-[881px]  ">
                
            <input
              className="absolute w-[84px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px]"
           
            />
            
          </div>
          <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1007px]  ">
                
                <input
                  className="absolute w-[84px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px]"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1133px]  ">
                
                <input
                  className="absolute w-[84px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px]"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1259px]  ">
                
                <input
                  className="absolute w-[84px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px]"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1385px]  ">
                
                <input
                  className="absolute w-[84px] h-[84px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px]"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[120px] ml-[881px]  ">
            <button className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat  leading-[22px]"  onClick={handleNextStep}>
              CONTINUE
            </button>
          </div>
          <div className="absolute ml-[1249px]  mt-[50px]  mr-[64px] h-[45px] ">
            <div className="text-black font-semibold font-Montserrat text-2xl/[20px] leading-[44px]">
              Don't recieve code ?
            </div>
          </div>
          <div className="absolute  mt-[90px] ml-[1317px] mr-[64px] h-[45px] ">
            <div className="text-[#01B3BB] font-semibold font-Montserrat text-2xl/[24px] leading-[44px] ">
             Resend Code
            </div>
          </div>
                
                
            
              </div>
            )}
            {currentStep === 3 && (
              <div>
                {/* Form fields for step 3 */}
                <div className='h-[45px] mt-[28px] ml-[1130px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] '>Register as Individual </div>
                <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[35px]  ml-[881px]  ">
                
                <input
                  className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Enter Your First Name"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1185px]  ">
                
                <input
                  className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Enter Your Last name"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Your Phone Number"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Address Line 1"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Address Line 1"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]  ml-[881px]  ">
                
                <input
                  className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="State"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]   ml-[1185px]  ">
                
                <input
                  className="absolute w-[284px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Postal Code"
               
                />
                
              </div>
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Country"
               
                />
                
              </div>

              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[95px] ml-[881px]  ">
            <button className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat  leading-[22px]"  onClick={handleNextStep}>
              CONTINUE
            </button>
            </div>
               
               
               
              </div>
            )}
            {currentStep === 4 && (
              <div>
                {/* Form fields for step 4 */}
                <input type="text" className="w-full mb-4" placeholder="Field 4" />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleNextStep}
                >
                  Submit

              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handlePreviousStep}
              >
                Previous
              </button>
            </div>
          )}
        </div>
      </div>
  

       
        </div>
      
    </div>
  )
}

export default RegIndividual