import React from "react"
import cosmos1 from '../images/templates/cosmos1.png' 
import simp1 from '../images/templates/simp1.jpg' 
import attari1 from '../images/templates/attari1.jpg' 
import MD1 from '../images/templates/MD1.jpg' 

const TemplateSection = (props) => {
  return (
    <div>
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

              <a href="#">
              <div className="overlay rounded-2xl">
                <p>Click To Preview</p>
              </div>
              </a>

              <div>
                <img src={cosmos1} className='w-full rounded-t-2xl'/>
              </div>
              <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
            </div>
            <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>
              
            <a href="#">
              <div className="overlay rounded-2xl">
                <p>Click To Preview</p>
              </div>
              </a>
              <div>
                <img src={simp1} className='w-full rounded-t-2xl'/>
              </div>
              <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
            </div>
            <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>
              
            <a href="#">
              <div className="overlay rounded-2xl">
                <p>Click To Preview</p>
              </div>
              </a>

              <div>
                <img src={attari1} className='w-full rounded-t-2xl'/>
              </div>
              <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
            </div>
            <div className='w-full border-black border-2 rounded-2xl mt-5 relative'>
              
            <a href="#">
              <div className="overlay rounded-2xl">
                <p>Click To Preview</p>
              </div>
              </a>
              
              <div>
                <img src={MD1} className='w-full rounded-t-2xl'/>
              </div>
              <p className="py-7 px-7 border-t-2 text-xl font-bold">Simp Template</p>
            </div>
            
          </div>
          
          <div className='flex justify-center'>
            <button className='btnButton bg-black text-white px-10 font-medium blackHover cursor-not-allowed'>More Comming Soon</button>
          </div>
        </aside>
    </div>
  )
};

export default TemplateSection;
