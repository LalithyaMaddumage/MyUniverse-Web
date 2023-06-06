import React, { useState } from 'react';
import Header from '../components/common/header';
import Background from '../components/common/background';

const RegCompany = () => {
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
                <div className='h-[45px] mt-[28px] ml-[1145px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] ' >Register as Company</div>
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
                <div className='h-[45px] mt-[28px] ml-[1130px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-3xl/[25px] '>Register as Company </div>
                <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[35px]  ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Enter Business Name"
               
                />
                
              </div>
              
              <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px] mt-[75px]   ml-[881px]  ">
                
                <input
                  className="absolute w-[588px] h-[50px] border-[1px] border-solid border-[#01B3BB] rounded-[10px] pl-[20px]  leading-[15px] placeholder:text-[rgba(30, 30, 30, 0.7)] font-normal font-inter text-[12px] leading-[15px]"
                  placeholder="Company Number"
               
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
                <div className='h-[45px] mt-[28px] ml-[1192px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-[25px] '>Identify Verification </div>
                <div className='h-[45px] mt-[9px] ml-[1192px]  font-Montserrat font-semibold leadding-[44px] font-[25px] text-[20px] '>Upload Image of ID Card </div>
                <div className='absolute top-[295px] left-[1192px] mt-[60px] w-[10px] h-[10px]'>
                <img src="assets/images/image15.png" alt="Logo" /> 
                </div>
                <div className='  ml-[1208px]  font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>Government - Issued </div>
             
                <div className='absolute  left-[1192px] mt-[8px]  w-[10px] h-[10px]'>
                <img src="assets/images/image15.png" alt="Logo" /> 
                </div>
                <div className=' ml-[1208px] mr-[240px] font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>Original full sized, unedited documents</div>
                <div className='absolute  left-[1192px] mt-[8px]  w-[10px] h-[10px]'>
                <img src="assets/images/image15.png" alt="Logo" /> 
                </div>
                <div className=' ml-[1208px] mr-[240px] font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>Place documents against a single coloured background</div>
                <div className='absolute  left-[1192px] mt-[8px]  w-[10px] h-[10px]'>
                <img src="assets/images/image15.png" alt="Logo" /> 
                </div>
                <div className=' ml-[1208px] mr-[240px] font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>Readable, well lit coloured images</div>
                <div className='absolute  left-[1192px] mt-[8px]  w-[10px] h-[10px]'>
                <img src="assets/images/image19.png" alt="Logo" /> 
                </div>
                <div className=' ml-[1208px] mr-[240px] font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>No edited or expired documents</div>
                <div className='absolute  left-[1192px] mt-[8px]  w-[10px] h-[10px]'>
                <img src="assets/images/image19.png" alt="Logo" /> 
                </div>
                <div className=' ml-[1208px] mr-[240px] font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#B4B4B4] text-left '>No black and white images</div>
                <div className=' ml-[938px] mt-[36px]  font-[Open Sans] font-semibold leadding-[26.25px] font-[25px] text-[15px] text-[#959595] text-left '>File sizes must be between 10KB and 5120KB in jpg/jpeg/png format.</div>
                <div className=' className="flex flex-row justify-center  '>
                <div className="box-border ml-[938px] w-[252px] h-[158px] mt-[11px]  border-[1px] border-solid border-[#E0E0E0] bg-[#F9F9F9]">
                <div className="flex flex-row justify-center items-center w-[192px] h-[90px] mt-[34px] ml-[30px]">
          <img src="assets/images/image13.png" alt="Logo" />
        </div>
                </div>
                <div className="box-border ml-[1212px] w-[252px] h-[158px] mt-[-158px]  border-[1px] border-solid border-[#E0E0E0] bg-[#F9F9F9]">
                <div className="flex flex-row justify-center items-center w-[192px] h-[90px] mt-[34px] ml-[30px]">
          <img src="assets/images/image13.png" alt="Logo" />
        </div>
                </div>
                </div>

                <div className=' ml-[990px] mt-[20px] mr-[228px]  font-[Open Sans] font-normal leadding-[26.25px] font-[25px] text-[15px] text-[#959595] text-right '>This information is used for personal verification only, and is kept private and confidential by MyUnivers.com</div>

                <div className="box-border flex flex-row items-center p-[14px 75px 14px 20px] gap-[10px]  mt-[65px] ml-[881px]  ">
            <button className="absolute w-[588px] h-[84px]  border-[1px] border-solid border-[#01B3BB] rounded-[10px] hover: border-[1px] border-solid border-[#01B3BB] rounded-[10px] bg-[#01B3BB] text-white font-semibold font-Montserrat  leading-[22px]"  onClick={handleNextStep}>
              CONTINUE
            </button>
            </div>
               



           
            </div>
          )}
        </div>
      </div>
  

       
        </div>
      
    </div>
  )
}

export default RegCompany