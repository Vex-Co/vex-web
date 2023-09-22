import * as React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutUs from './components/AboutUs'
import Home from './components/Home'
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
          <Route path='/templates' element = {<TemplateSection/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;