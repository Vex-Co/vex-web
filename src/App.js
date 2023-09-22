import * as React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutUs from './components/AboutUs'
import Home from './components/Home'

import Instagram from './images/pic/Instagram.png' 
import GitHub from './images/pic/GitHub.png' 
import LinkedIn from './images/pic/LinkedIn Circled.png' 
import TwitterX from './images/pic/TwitterX.png' 
import TemplateSection from './components/TemplateSection'
import CosmosView from './components/templatesView.js/CosmosView'
import AttariView from './components/templatesView.js/AttariView'
import SimpView from './components/templatesView.js/SimpView'
import MDView from './components/templatesView.js/MDView'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cosmosView' element = {<CosmosView/>}/>
          <Route path='/attariView' element = {<AttariView/>}/>
          <Route path='/MDView' element = {<MDView/>}/>
          <Route path='/simpView' element = {<SimpView/>}/>
          <Route path='/about' element = {<AboutUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
// export default function App() {
//   const handleClick = () => {
//     window.location.replace('https://api.whatsapp.com/send?phone=923034212419&text=hello');
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click to redirect</button>
//     </div>
//   );
// }