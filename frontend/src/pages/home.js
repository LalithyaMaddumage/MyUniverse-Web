import React from 'react'
import NavBar from '../components/common/navBar'
import HomeSectionOne from '../components/layout/homeSectionOne'
import HomeSectionTwo from '../components/layout/homeSectionTwo'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HomeSectionOne/>
        <HomeSectionTwo/>
    </div>
  )
}

export default Home