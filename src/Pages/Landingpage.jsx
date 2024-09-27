import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import ConfidenceSection from '../Components/ConfidenceSection/ConfidenceSection'
import FitnessTextImageSection from '../Components/FitnessTextImageSection/FitnessTextImageSection'
import ServicesComponent from '../Components/ServicesComponent/ServicesComponent'
import PlansComponent from '../Components/PlansComponent/PlansComponent'

import FooterComponent from '../Components/FooterComponent/FooterComponent'

const Landingpage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyChooseUs/>
        <ConfidenceSection/>
        <FitnessTextImageSection/>
        <ServicesComponent/>
        <PlansComponent/>
       
        <FooterComponent/>
    </div>
  )
}

export default Landingpage
