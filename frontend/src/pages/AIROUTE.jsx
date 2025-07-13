import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import AIRouteMapLeaflet from '../components/AI route Optimizer/AIRouteMapLeaflet'
import AIDashbaord from '../components/AI route Optimizer/AIDashbaord'
import Deliverypartner from '../components/AI route Optimizer/Dileverypartner2'
import NavbarAdmin from '../components/Admin/Navbaradmin'
const AIROUTE = () => {
  return (
    <div>

        <NavbarAdmin/>
        <AIRouteMapLeaflet/>
        <Deliverypartner/>
    </div>
  )
}

export default AIROUTE