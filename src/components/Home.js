import React from "react"
import ContactUs from "./ContactUs"
import HeroSection from "./HeroSection"
import PricingSection from "./PricingSection"
import TemplateSection from "./TemplateSection"

const Home = (props) => {
  return (
    <div>
      <HeroSection/>
      <PricingSection/>
      <TemplateSection/>
      <ContactUs/>

    </div>
  )
};

export default Home;
