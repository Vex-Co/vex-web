import React from "react"
import cosmos1 from '../images/templates/cosmos1.png'
import simp1 from '../images/templates/simp1.jpg'
import attari1 from '../images/templates/attari1.jpg'
import MD1 from '../images/templates/MD1.jpg'
import { useState } from "react"
import { Link } from "react-router-dom"
// import CosmosView from "./templatesView.js/CosmosView.js"

const TemplateSection = (props) => {
  const [temp1, setTemp1] = useState(false)
  const [temp2, setTemp2] = useState(false)
  const [temp3, setTemp3] = useState(false)
  const [temp4, setTemp4] = useState(false)

  var templatesValue = [setTemp1, setTemp2, setTemp3, setTemp4]
  function setHoverLayer(value) {
    if (value == '1')
      setTemp1(true)
    else if (value == '2')
      setTemp2(true)
    else if (value == '3')
      setTemp3(true)
    else if (value == '4')
      setTemp4(true)
  }
  function desetHoverLayer() {
    setTemp1(false)
    setTemp2(false)
    setTemp3(false)
    setTemp4(false)
  }

  return (
    <div id="templates-section">
      <aside className='max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
        <div className='flex justify-center'>
          <a href="https://wa.link/xwmj6i" target="_blank">
            <button className='btnButton bg-black text-white px-10 font-medium blackHover'>Get a Custom Quote</button>
          </a>
        </div>

        <div className='text-white flex justify-center w-full h-fit'>
          <div className=' bg-[#353535] w-3/4 h-1 mt-16 rounded-full'></div>
        </div>

        <div className='text-center max-sm:text-3xl text-5xl font-bold my-14'>Templates</div>
        <div className='grid sm:space-y-5 md:grid-cols-2 gap-5 justify-center'>
          <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>


            <Link to="/templates/cosmosView" target="_blank" className="cursor-pointer">
              <div className="overlay rounded-2xl border-white border-2" onMouseEnter={() => setHoverLayer("1")} onMouseLeave={desetHoverLayer}>
                {
                  temp1 ?
                    <p>Click To Preview</p>
                    :
                    <div></div>
                }
              </div>
            </Link>

            <div>
              <img src={cosmos1} className='w-full rounded-t-2xl md:h-52 lg:h-60 xl:h-72 2xl:h-96' />
            </div>
            <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
          </div>
          <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>

            <Link to="/templates/simpView" target="_blank" className="cursor-pointer">
              <div className="overlay rounded-2xl border-white border-2" onMouseEnter={() => setHoverLayer("2")} onMouseLeave={desetHoverLayer}>
                {
                  temp2 ?
                    <p>Click To Preview</p>
                    :
                    <div></div>
                }
              </div>
            </Link>
            <div>
              <img src={simp1} className='w-full rounded-t-2xl md:h-52 lg:h-60 xl:h-72 2xl:h-96' />
            </div>
            <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
          </div>
          <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>

            <Link to="/templates/attariView" target="_blank" className="cursor-pointer">
              <div className="overlay rounded-2xl border-white border-2" onMouseEnter={() => setHoverLayer("3")} onMouseLeave={desetHoverLayer}>
                {
                  temp3 ?
                    <p>Click To Preview</p>
                    :
                    <div></div>
                }
              </div>
            </Link>

            <div>
              <img src={attari1} className='w-full rounded-t-2xl md:h-52 lg:h-60 xl:h-72 2xl:h-96' />
            </div>
            <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
          </div>
          <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>


            <Link to="/templates/MDView" target="_blank" className="cursor-pointer">

              <div className="overlay rounded-2xl border-white border-2" onMouseEnter={() => setHoverLayer("4")} onMouseLeave={desetHoverLayer}>
                {
                  temp4 ?
                    <p>Click To Preview</p>
                    :
                    <div></div>
                }
              </div>
            </Link>

            <div>
              <img src={MD1} className='w-full rounded-t-2xl md:h-52 lg:h-60 xl:h-72 2xl:h-96'/>
            </div>
            <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
          </div>

        </div>

        <div className='flex justify-center'>
          <button className='btnButton bg-black text-white px-10 font-medium blackHover cursor-not-allowed'>More Templates Comming Soon</button>
        </div>
      </aside>
    </div>
  )
};

export default TemplateSection;
