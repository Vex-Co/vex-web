import whiteLogo from '../images/whiteLogo.png' 
import React,{useState} from 'react'

function NavBar()
{
  const [data,setData] = useState(false)

  function toggle(){
    setData(!data)
  }
  return(
    <div>
      <nav class="bg-black py-10 sm:py-12 md:py-16 max-sm:h-10 max-sm:px-8 sm:h-16 sm:px-16 lg:h-24 lg:px-24 2xl:px-52 w-full flex justify-between items-center text-white">
          <div>
            <img src={whiteLogo} className='max-sm:w-14 sm:w-20'/>
          </div>  
          <div className='max-lg:hidden visible'>
            <ul className='flex text-lg font-semibold space-x-10'> 
              <a href='#'><li>Home</li></a>
              <a href='#'><li>Pricing Plans</li></a>
              <a href='#'><li>Templates</li></a>
              <a href='#'><li>Contact Us</li></a>
            </ul>
          </div> 
          <div className='space-y-1 lg:hidden' onClick={toggle}>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
          </div> 
      </nav>
          
        {
          data?
          <div className='z-10 absolute w-full flex justify-center'>
            <ul className='bg-white max-sm:py-16 sm:py-20 w-full text-center text-lg font-semibold'>
              <a href='#'><li>Home</li></a>
              <div className='bg-black mx-auto w-4/5 h-[2px] my-3 rounded-full'></div>
              <a href='#'><li>About Us</li></a>
              <div className='bg-black mx-auto w-4/5 h-[2px] my-3 rounded-full'></div>
              <a href='#'><li>Contact Us</li></a>
              <div className='bg-black mx-auto w-4/5 h-[2px] my-3 rounded-full'></div>
              <a href='#'><li>Templates</li></a>
              <div className='bg-black mx-auto w-4/5 h-[2px] my-3 rounded-full'></div>
            </ul>
          </div>
          :null
        }
    </div>
  )
};

export default NavBar;