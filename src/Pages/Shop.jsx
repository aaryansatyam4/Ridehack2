import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FooterComponent from '../Components/FooterComponent/FooterComponent'
import Hero from '../Components/Hero/Hero'
import ShopCardHome from '../Components/ShopCardHome/ShopCardHome'
import './css/Shop.css'
const Shop = () => {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <ShopCardHome/>
   <FooterComponent/>
    </div>
  )
}

export default Shop
