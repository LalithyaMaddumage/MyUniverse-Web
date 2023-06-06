import React from 'react'
import HeaderAndNav from '../components/common/headerAndNav'
import SideNavBar from '../components/elements/sideNavBar'
import ChatView from '../components/elements/chatView'
import SingleChatView from '../components/elements/singleChatView'
import HeaderAndNavAdmin from '../components/common/headerAndNavAdmin'

const MessangingPage = () => {
  return (
    <div>
        <HeaderAndNavAdmin/>
        <div className="flex flex-row mt-[200px] ">
        <SideNavBar/>
        <div >
            <ChatView/>
        </div>
        <div>
            <SingleChatView/>
        </div>
        </div>
    </div>
  )
}

export default MessangingPage