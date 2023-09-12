import * as React from 'react'
import favicon from './images/favicon.png'  
import logoAbrev from './images/logo with abbriviation.png'  
import whiteLogo from './images/whiteLogo.png' 
import rightArrow from './images/pic/rightArrow.png' 
import guyImage from './images/pic/guyImage.png' 
import whiteOk from './images/pic/whiteOk.png' 
import blackOk from './images/pic/blackOk.png' 
import Instagram from './images/pic/Instagram.png' 
import GitHub from './images/pic/GitHub.png' 
import LinkedIn from './images/pic/LinkedIn Circled.png' 
import TwitterX from './images/pic/TwitterX.png' 
import Email from './images/pic/Email.png' 
import whiteInstagram from './images/pic/whiteInstagram.png' 
import whiteWhatsApp from './images/pic/WhatsApp.png' 
import whiteLinkedIn from './images/pic/LinkedIn.png' 
import whitePhone from './images/pic/Phone.png' 
import blackDiscount from './images/pic/discount.png' 
import whiteDiscount from './images/pic/whiteDiscount.png' 
import Dom from './images/pic/Dom.png' 
import threeGuys from './images/pic/3 guys photo.png' 
import threeD from './images/pic/thumb guy.png' 
import blackLeftCloud from './images/pic/black left cloud.png' 
import blackRightCloud from './images/pic/black right cloud_m_vertical.png' 
import template1 from './images/pic/template card (1).png' 
import template2 from './images/pic/template card (2).png' 
import template3 from './images/pic/template card (3).png' 


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
                  <button className='btn hover:bg-black hover:border-white hover:border-[1px] hover:text-white'>
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

        <article className='mt-10 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>

          <div className='text-center max-sm:text-3xl text-5xl font-bold'>Pricing Plans</div> 
          <div className='mt-10 max-md:block lg:flex lg:space-x-9 lg:justify-center grid grid-cols-2 gap-10'>

            <div>
              <div className='float-right'>
                <img src={blackDiscount} className='md:mt-10 h-28'/>
              </div>
              <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 rounded-3xl shadow-black shadow-lg'>
                <div className='flex space-x-3'>
                  <div className='w-7 h-7 p-2 border-black border-[0.5px] rounded-full'>
                    <img src={favicon}/>
                  </div>
                  <button className='px-4 py-1 rounded-full bg-gradient-to-r from-gray-950 to-gray-600 text-white font-medium text-xs'>STANDARD PLAN</button>
                </div>
                <div className='space-y-3'>
                  <p className='text-3xl font-bold tracking-tight leading-7'>PKR 150<span className='text-base font-light'>  /mo</span>
                  <br/>
                  <span className='line-through text-base font-light -pt-20'>PKR 300 /mo</span>
                  </p>

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
            </div>


            <div>
                <div className='float-right'>
                  <img src={whiteDiscount} className='md:mt-10 h-28'/>
                </div>
              <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 bg-[#141010] rounded-3xl shadow-black shadow-lg text-white'>
                <div className='flex space-x-3'>
                  <div className='w-7 h-7 p-2 border-black border-[0.5px] bg-white rounded-full'>
                    <img src={favicon}/>
                  </div>
                  <button className='px-4 py-1 rounded-full bg-white text-black font-medium text-xs'>STANDARD PLAN</button>
                </div>
                <div className='space-y-3'>
                  <p className='text-3xl font-bold tracking-tight leading-7'>PKR 125<span className='text-base font-light'>  /mo</span>
                  <br/>
                  <span className='line-through text-base font-light -pt-20'>PKR 450 /mo</span>
                  </p>

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

          </div>
          
        </article>

        <aside className='max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
          <div className='flex justify-center'>
            <button className='btn bg-black text-white px-10 font-medium'>Get a Custom Quote</button>
          </div>
          
          <div className='text-white flex justify-center w-full h-fit'>
            <div className=' bg-[#353535] w-3/4 h-1 mt-16 rounded-full'></div>
          </div>

          <div className='text-center max-sm:text-3xl text-5xl font-bold my-14'>Templates</div>
          <div className='grid justify-center bg-blue-600'>
            <div className='bg-red-500 w-fit  flex justify-center items-center'>
              <img src={template1} className='w-fit mt-5'/>h
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='btn bg-black text-white px-10 font-medium'>Show More</button>
          </div>

          
        </aside>
        <div className='-mt-10 xl:mt-2 h-fit flex justify-between items-end w-full'>
          <div className='relative top-2'>
            <img src={blackLeftCloud} className='w-52 lg:w-72 2xl:w-96'/>
          </div>
          <div className='relative top-16'>
            <img src={Dom} className='w-56 lg:w-72 2xl:w-96'/>
          </div>
          <div className='relative top-2'>
            <img src={blackRightCloud} className='w-52 lg:w-72 2xl:w-96'/>
          </div>
        </div>

        <section className='relative max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 bg-black w-full h-fit py-20'>
          <h1 className='text-center text-white font-bold text-4xl md:text-6xl'>CONTACT US</h1>
          <div className='flex justify-center pt-20'>
            <form className='w-4/5 md:w-full md:grid md:grid-cols-3'>
              <div className='md:col-span-2 space-y-7 lg:space-y-16'>
                <div className='space-y-7 md:flex md:justify-between md:space-y-0'>
                  <div className='w-full md:w-[46%]'>
                    <label className='text-white text-lg lg:text-2xl'>Name</label><br/>
                    <input type='text' placeholder='e.g. Abdullah' className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white'/>
                    <div className='h-[2px] w-full bg-white mt-1'></div>
                  </div>
                  <div className='w-full md:w-[46%]'>
                    <label className='text-white text-lg lg:text-2xl'>Email</label><br/>
                    <input type='email' placeholder='foo@example.com' className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white'/>
                    <div className='h-[2px] w-full bg-white mt-1'></div>
                  </div>
                </div>

                <div>
                  <label className='text-white text-lg lg:text-2xl'>Message</label><br/>
                  <input type='text' placeholder="e.g. Hey I am interested in...." className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white'/>
                  <div className='h-[2px] w-full bg-white mt-1'></div>
                </div>
                <div className='lg:flex lg:justify-center'>
                  <button className='btn py-3 w-full lg:py-5 lg:text-2xl lg:px-14 lg:w-fit'>
                    <div className='flex sm:items-center'>
                      <img src={Email} className='mr-3 max-sm:w-5 sm:w-9'/>Send
                    </div>
                  </button>
                </div>
              </div>
              <div className='hidden md:visible md:-mt-10 md:flex md:justify-center'>
                <img src={threeD} className='md:p-5 h-fit max-md:ml-20'/>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className='text-white w-full h-fit'>
            <div className=' bg-[#353535] w-full h-1 mt-16 rounded-full'></div>
          </div>

          <div className='md:grid md:grid-cols-3'>
            <div className='flex text-white md:col-span-2'>
              <div className='flex justify-center w-1/2 pt-16 pb-5 sm:order-1'>
                <div>
                  <h1 className='lg:text-2xl 2xl:text-3xl'>NAVIGATION LINKS</h1>
                  <ul className='space-y-3 2xl:space-y-5 2xl:mt-8 mt-5'>
                    <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="#">Browse Templates</a></li>
                    <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="#">Pricing Plans</a></li>
                    <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="#">About us</a></li>
                    <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className='w-1/2 pt-6 lg:pt-4 pb-5 space-y-2 lg:space-y-4'>
                <div className='flex justify-center'>
                  <img src={logoAbrev} className='w-52 lg:w-64 2xl:w-72'/>
                </div>
                <div className='flex justify-center space-x-1'>
                  <img className='w-10 lg:w-12 2xl:w-16' src={whiteWhatsApp}/>
                  <img className='w-10 lg:w-12 2xl:w-16' src={whiteLinkedIn}/>
                  <img className='w-10 lg:w-12 2xl:w-16' src={whiteInstagram}/>
                </div>
                <div className='flex justify-center space-x-1'>
                  <img className='w-7 lg:w-9 2xl:w-12' src={whitePhone}/>
                  <div className='text-sm lg:text-md 2xl:text-base'>+92 321-2346435</div>
                </div>
              </div>
            </div>
            <div className='hidden md:visible md:order-2 md:flex md:items-center md:justify-end'>
                <img className='h-fit -mr-10' src={threeGuys}/>
              </div>
          </div>
        </section>

        {/* Copy Rights */}
        <footer className='mt-10 h-20 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
          <div className='max-sm:space-y-5 sm:space-y-0 sm:flex h-20 justify-between items-center'>
            <div>Copyright Ⓒ 2023  VEX - Versatile<br/>
            E-portfolio Experts</div>
            <div className='flex space-x-3'>
              <a href='#'>
                <div className='underline underline-offset-2'>privacy policy</div>
              </a>
              <a href='#'>
                <div className='underline underline-offset-2'>Terms and Conditions</div>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </ChakraProvider>
  );
}

export default App;
