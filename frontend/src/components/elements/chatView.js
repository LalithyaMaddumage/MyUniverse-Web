import React from 'react'
import Chat from './chat'

const ChatView = () => {
  return (
    <div>
         <div className="absolute box-border    w-[456px] h-[779px]   bg-[#42F7CC] bg-opacity-[5%]">
         <div className="flex flex-col   ">
          
         <div className='mb-[94px]'> <Chat/></div> 
         <div className='mb-[94px]'> <Chat/></div> 
         <div className='mb-[94px]'> <Chat/></div> 
            </div>
         </div>
    </div>
  )
}

export default ChatView