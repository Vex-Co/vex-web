import whiteLogo from '../images/whiteLogo.png' 

function NavBar()
{
  return(
    <div>
      <nav class="bg-black py-10 sm:py-12 md:py-16 relative max-sm:h-10 max-sm:px-8 sm:h-16 sm:px-16 lg:h-24 lg:px-24 2xl:px-52 w-full flex justify-between items-center text-white">
          <div>
            <img src={whiteLogo} className='max-sm:w-14 sm:w-20'/>
          </div>  
          <div className='max-lg:hidden visible'>
            <ul className='flex text-lg font-semibold space-x-10'> 
              <a href='#'><li>Home</li></a>
              <a href='#'><li>About Us</li></a>
              <a href='#'><li>Contact Us</li></a>
              <a href='#'><li>Templates</li></a>
            </ul>
          </div> 
          <div className='space-y-1 lg:hidden'>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
            <div className='bg-white w-8 h-1 rounded-full'></div>
          </div> 
        </nav>
    </div>
  )
};

export default NavBar;