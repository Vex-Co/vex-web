import React from "react"
import rightArrow from '../images/pic/rightArrow.png'
import guyImage from '../images/pic/guyImage.png'
import whiteArrow from '../images/pic/white Right Arrow.png'
import { useState } from "react"
import { Link } from "react-router-dom"


const HeroSection = (props) => {
  const [hoverData, setHoverData] = useState(false)
  function hoverIn() {
    setHoverData(true)
  }
  function hoverOut() {
    setHoverData(false)
  }


  return (
    <div>
      <main className='w-full max-sm:-mt-20 sm:-mt-28 py-10 md:-mt-32 lg:-mt-40 overflow-hidden'>
        <div className='bg-black max-md:h-[500px] max-md:w-[180%] max-md:ml-[-40%] max-md:pl-[40%] md:w-[160%] md:ml-[-30%] md:pl-[30%] md:h-[530px] lg:w-[120%] lg:pl-[10%] lg:ml-[-10%] lg:h-[600px] rounded-b-[100%] text-white'>

          <div className='absolute z-0 grid max-sm:px-8 max-sm:mt-28 max-sm:grid-cols-1 grid-cols-3 sm:px-16 sm:mt-16 lg:px-24 lg:mt-20 2xl:px-52 w-full text-white'>
            <div className='col-span-2 max-sm:-mt-10 sm:pt-16 md:pt-20'>
              <div className='sm:space-y-5 max-sm:space-y-5 lg:space-y-8'>
                <h1 className='max-sm:text-3xl sm:text-3xl lg:text-4xl lg:font-light font-extralight xl:w-[80%] 2xl:w-[70%] w-[90%] leading-snug'>Unlock Your Future with a Powerful Personal Portfolio</h1>

                <p className='max-sm:text-clip max-sm:text-md sm:text-md lg:text-xl font-extralight xl:w-[80%] 2xl:w-[70%] w-[90%] leading-relaxed break-words'>Create Your Stunning Portfolio with VEX. Easy Templates, Hassle-Free Hosting.Discover Beautiful Templates and Seamless Hosting to Make Your Portfolio Shine.</p>
              </div>

              <Link to="templates" target="_blank">
                <button onMouseEnter={hoverIn} onMouseLeave={hoverOut} className='btnButton whiteHover'>
                  {
                    hoverData ?
                      <div className='flex sm:items-center'>
                        View Templates <img src={whiteArrow} className='ml-3 max-sm:w-5 sm:w-9' />
                      </div>
                      :
                      <div className='flex sm:items-center'>
                        View Templates <img src={rightArrow} className='ml-3 max-sm:w-5 sm:w-9' />
                      </div>
                  }
                </button>
              </Link>
            </div>
            <div className='max-sm:hidden flex w-full items-center justify-center'>
              <img src={guyImage} className='sm:h-fit sm:pt-10 lg:w-[286px] 2xl:w-80' />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default HeroSection;
