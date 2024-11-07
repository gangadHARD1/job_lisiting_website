{/* event these are compnents essentially */}
import Hero from '../components/Hero.jsx'
import React from 'react'
import HomeCard from '../components/HomeCard.jsx'
import Joblistings from '../components/Joblistings.jsx'
import ViewAll from '../components/ViewAll.jsx'

const HomePages = () => {
  return (<>
    <Hero/>
    <HomeCard/>
    <Joblistings isHome={true} />
    <ViewAll/>
    </>
  )
}  
export default HomePages