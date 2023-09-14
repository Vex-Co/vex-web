import React from "react"
import template1 from '../images/pic/template card (1).png' 
import template2 from '../images/pic/template card (2).png' 
import template3 from '../images/pic/template card (3).png' 

const TemplateSection = (props) => {
  return (
    <div>
      <aside className='max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
          <div className='flex justify-center'>
            <button className='btn bg-black text-white px-10 font-medium'>Get a Custom Quote</button>
          </div>
          
          <div className='text-white flex justify-center w-full h-fit'>
            <div className=' bg-[#353535] w-3/4 h-1 mt-16 rounded-full'></div>
          </div>

          <div className='text-center max-sm:text-3xl text-5xl font-bold my-14'>Templates</div>
          <div className='grid sm:space-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 justify-center'>
            <div className='w-fit mt-5'>
              <img src={template1} className='w-full'/>
            </div>
            <div className='w-fit'>
              <img src={template2} className='w-full'/>
            </div>
            <div className='w-fit'>
              <img src={template3} className='w-full'/>
            </div>

            <div className='w-fit mt-5'>
              <img src={template1} className='w-full'/>
            </div>
            <div className='flex justify-center 2xl:col-span-2 '>
              <div className='w-fit'>
                <img src={template2} className='w-full'/>
              </div>
            </div>
            <div className='flex justify-center 2xl:col-span-2 '>
              <div className='w-fit'>
                <img src={template3} className='w-full'/>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button className='btn bg-black text-white px-10 font-medium'>Show More</button>
          </div>
        </aside>
    </div>
  )
};

export default TemplateSection;
