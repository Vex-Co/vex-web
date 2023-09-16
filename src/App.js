import * as React from 'react'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutUs from './components/AboutUs'
import Home from './components/Home'

import Instagram from './images/pic/Instagram.png' 
import GitHub from './images/pic/GitHub.png' 
import LinkedIn from './images/pic/LinkedIn Circled.png' 
import TwitterX from './images/pic/TwitterX.png' 
import TemplateSection from './components/TemplateSection'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Home/>
      {/* <TemplateSection/> */}
      {/* <AboutUs/> */}
      <Footer/>
    </div>
  );
}

export default App;
