import * as React from 'react'
import favicon from './images/favicon.png'  
import whiteLogo from './images/whiteLogo.png' 
import rightArrow from './images/pic/rightArrow.png' 
import guyImage from './images/pic/guyImage.png' 
import whiteOk from './images/pic/whiteOk.png' 
import blackOk from './images/pic/blackOk.png' 
import Instagram from './images/pic/Instagram.png' 
import GitHub from './images/pic/GitHub.png' 
import LinkedIn from './images/pic/LinkedIn Circled.png' 
import TwitterX from './images/pic/TwitterX.png' 


// 1. import `ChakraProvider` component
import { ChakraProvider, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <nav class="absolute max-sm:h-10 max-sm:px-8 sm:h-16 mt-7 sm:px-16 lg:h-24 lg:px-24 2xl:px-52 w-full flex justify-between items-center text-white">
          <div>
            <img src={whiteLogo} className='max-sm:w-14 sm:w-20'/>
          </div>  
          <div className='max-lg:hidden visible'>
            <ul className='flex text-lg font-semibold space-x-10'> 
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Templates</li>
            </ul>
          </div> 
          <div className='space-y-1 lg:hidden'>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
          </div> 
        </nav>
        <main className='w-full overflow-hidden'>
          <div className='bg-gradient-to-r from-black to-black max-md:h-[500px] max-md:w-[180%] max-md:ml-[-40%] max-md:pl-[40%] md:w-[160%] md:ml-[-30%] md:pl-[30%] md:h-[530px] lg:w-[120%] lg:pl-[10%] lg:ml-[-10%] lg:h-[600px] rounded-b-[100%] text-white'>

            <div className='absolute grid max-sm:px-8 max-sm:mt-28 max-sm:grid-cols-1 grid-cols-3 sm:px-16 sm:mt-16 lg:px-24 lg:mt-20 2xl:px-52 w-full text-white'>
              <div className='col-span-2 sm:pt-20'>
                  <div className='sm:space-y-5 max-sm:space-y-5 lg:space-y-8'>
                    <h1 className='max-sm:text-3xl sm:text-3xl lg:text-4xl lg:font-light font-extralight xl:w-[80%] 2xl:w-[70%] w-[90%] leading-snug'>Unlock Your Future with a Powerful Personal Portfolio</h1>

                    <p className='max-sm:text-clip max-sm:text-md sm:text-md lg:text-xl font-extralight xl:w-[80%] 2xl:w-[70%] w-[90%] leading-relaxed break-words'>Create Your Stunning Portfolio with VEX. Easy Templates, Hassle-Free Hosting.Discover Beautiful Templates and Seamless Hosting to Make Your Portfolio Shine.</p>
                  </div>
                  <button className='bg-white max-sm:py-3 max-sm:px-3 max-sm:text-sm mt-10 sm:px-3 sm:py-3 lg:px-5 lg:py-4 flex justify-center items-center text-black sm:text-md lg:text-lg font-bold border-0 rounded-full'>
                    <div className='flex sm:items-center'>
                      Get Started <img src={rightArrow} className='ml-3 max-sm:w-5 sm:w-9'/>
                    </div>
                  </button>
              </div>
              <div className='max-sm:hidden flex w-full items-center justify-center'>
                  <img src={guyImage} className='sm:h-fit sm:pt-10 lg:w-[286px] 2xl:w-80'/>
              </div>
            </div>
          </div>
        </main>

        <section className='mt-10 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
          <div className='text-center max-sm:text-3xl text-5xl font-bold'>Pricing Plans</div> 
          <div className='mt-10 max-md:block lg:flex lg:space-x-9 lg:justify-center grid grid-cols-2 gap-10'>
            <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 rounded-3xl shadow-black shadow-lg'>
              <div className='flex space-x-3'>
                <div className='w-7 h-7 p-2 border-black border-[0.5px] rounded-full'>
                  <img src={favicon}/>
                </div>
                <button className='px-4 py-1 rounded-full bg-gradient-to-r from-gray-950 to-gray-600 text-white font-medium text-xs'>STANDARD PLAN</button>
              </div>
              <div className='space-y-3'>
                <p className='text-xl font-bold my-2'>900 PKR</p>
                <p className='text-sm text-justify my-2'>
                This plan provides you a professional look in the industry by designing and hosting your personal portfolio on our light weight and fast servers. </p>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={blackOk} className='w-6 h-6'/>
                  <span>6-month service</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={blackOk} className='w-6 h-6'/>
                  <span>Domain name ending with <a href='#' className='font-bold'>portfolio.com.pk</a></span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={blackOk} className='w-6 h-6'/>
                  <span>Hosting on our servers</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={blackOk} className='w-6 h-6'/>
                  <span>Free Email Service</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={blackOk} className='w-6 h-6'/>
                  <span>5 editing permissions of the data in portfolio </span>
                </div>
              </div>
              <div className='text-xs text-justify'>* charges applies after 5 editing permissions are utilized. To avoid this, please verify the data before sending it to our team, Thank you!</div>
            </div>
            
            <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 bg-[#141010] rounded-3xl shadow-black shadow-lg text-white'>
              <div className='flex space-x-3'>
                <div className='w-7 h-7 p-2 border-black border-[0.5px] bg-white rounded-full'>
                  <img src={favicon}/>
                </div>
                <button className='px-4 py-1 rounded-full bg-white text-black font-medium text-xs'>STANDARD PLAN</button>
              </div>
              <div className='space-y-3'>
                <p className='text-xl font-bold my-2'>900 PKR</p>
                <p className='text-sm text-justify my-2'>
                This plan provides you a professional look in the industry by designing and hosting your personal portfolio on our light weight and fast servers. </p>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={whiteOk} className='w-6 h-6'/>
                  <span>12-month service</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={whiteOk} className='w-6 h-6'/>
                  <span>All Services in STANDARD PLAN</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={whiteOk} className='w-6 h-6'/>
                  <span>Customization according to skills</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={whiteOk} className='w-6 h-6'/>
                  <span>Free 1 Option to change the template</span>
                </div>
                <div className='flex space-x-3 text-xs items-center'>
                  <img src={whiteOk} className='w-6 h-6'/>
                  <span>15 editing permissions of the data in portfolio</span>
                </div>
              </div>
              <div className='text-xs text-justify'>* charges applies after 15 editing permissions are utilized. To avoid this, please verify the data before sending it to our team, Thank you!</div>
            </div>

          </div>
          
        </section>

        <footer className='mt-10 h-20 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
          <div className='flex h-20 justify-between items-center'>
            <div>© Vex Co. 2023</div>
            <div className='flex space-x-3'>
              <img src={LinkedIn} className='w-10 sm:w-16'/>
              <img src={Instagram} className='w-10 sm:w-16'/>
              <img src={GitHub} className='w-10 sm:w-16'/>
              <img src={TwitterX} className='w-10 sm:w-16'/>
            </div>
          </div>
        </footer>

      </div>
    </ChakraProvider>
  );
}

export default App;
