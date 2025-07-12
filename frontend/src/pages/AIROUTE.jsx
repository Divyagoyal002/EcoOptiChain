import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import AIRouteMapLeaflet from '../components/AI route Optimizer/AIRouteMapLeaflet'
import AIDashbaord from '../components/AI route Optimizer/AIDashbaord'
const AIROUTE = () => {
  return (
    <div>

        <Navbar/>
        <AIRouteMapLeaflet/>
        <AIDashbaord/>
    </div>
  )
}

export default AIROUTE