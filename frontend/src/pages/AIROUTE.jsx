import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import AIRouteMapLeaflet from '../components/AI route Optimizer/AIRouteMapLeaflet'
import AIDashbaord from '../components/AI route Optimizer/AIDashbaord'
import Deliverypartner from '../components/AI route Optimizer/Dileverypartner2'
const AIROUTE = () => {
  return (
    <div>

        <Navbar/>
        <AIRouteMapLeaflet/>
        <Deliverypartner/>
    </div>
  )
}

export default AIROUTE