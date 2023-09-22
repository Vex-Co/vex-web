import React from "react"
import whitePhone from '../images/pic/Phone.png'
import logoAbrev from '../images/logo with abbriviation.png'
import whiteInstagram from '../images/pic/whiteInstagram.png'
import whiteWhatsApp from '../images/pic/WhatsApp.png'
import whiteLinkedIn from '../images/pic/LinkedIn.png'
import threeGuys from '../images/pic/3 guys photo.png'
import { Link } from "react-router-dom"

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  else{
    window.location.href = '/';
  }
}


const Footer = (props) => {
  return (
    <div>


      <div className='bg-black py-10 -mt-10 md:grid md:grid-cols-3'>
        <div className='flex text-white md:col-span-2'>
          <div className='flex justify-center w-1/2 pt-16 pb-5 sm:order-1'>
            <div>
              <h1 className='lg:text-2xl 2xl:text-3xl'>NAVIGATION LINKS</h1>
              <ul className='space-y-3 2xl:space-y-5 2xl:mt-8 mt-5'>
                <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('templates-section'); }} >Browse Templates</a></li>

                <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('pricing-section'); }} >
                  Pricing Plans</a></li>

                
                  <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><Link to="/about" className="cursor-pointer">About us</Link></li>
                

                <li className='text-sm lg:text-lg 2xl:text-xl underline underline-offset-8'><a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }} >
                  Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className='w-1/2 pt-6 lg:pt-4 pb-5 space-y-2 lg:space-y-4'>
            <div className='flex justify-center'>
              <img src={logoAbrev} className='w-52 lg:w-64 2xl:w-72' />
            </div>
            <div className='flex justify-center space-x-1'>

              <a target="_blank" href='https://wa.link/xwmj6i' className="cursor-pointer"><img className='w-10 lg:w-12 2xl:w-16' src={whiteWhatsApp} /></a>

              <a target="_blank" href="https://www.linkedin.com/company/vex-co"><img className='w-10 lg:w-12 2xl:w-16' src={whiteLinkedIn} /></a>

              <a target="_blank" href="https://instagram.com/vex_co?igshid=OGQ5ZDc2ODk2ZA==" className="cursor-pointer"><img className='w-10 lg:w-12 2xl:w-16' src={whiteInstagram} /></a>
            </div>
            <div className='flex justify-center space-x-1'>
              <img className='w-7 lg:w-9 2xl:w-12' src={whitePhone} />
              <div className='text-sm lg:text-md 2xl:text-base'>+92 321-2346435</div>
            </div>
          </div>
        </div>
        <div className='hidden md:visible md:order-2 md:flex md:items-center md:justify-end'>
          <img className='h-fit mr-10' src={threeGuys} />
        </div>
      </div>

      {/* Copy Rights */}
      <footer className='mt-10 h-20 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>
        <div className='max-sm:space-y-5 sm:space-y-0 sm:flex h-20 justify-between items-center'>
          <div>Copyright Ⓒ 2023  VEX - Versatile<br />
            E-portfolio Experts</div>
          <div className='flex space-x-3'>
            <a href='#' className="cursor-not-allowed">
              <div className='underline underline-offset-2'>privacy policy</div>
            </a>
            <a href='#' className="cursor-not-allowed">
              <div className='underline underline-offset-2'>Terms and Conditions</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
