import React from "react"
import Email from '../images/pic/Email.png'
import whiteEnvelope from '../images/pic/whiteEnvelope.png'
import Dom from '../images/pic/Dom.png'
import threeD from '../images/pic/thumb guy.png'
import blackLeftCloud from '../images/pic/black left cloud.png'
import blackRightCloud from '../images/pic/black right cloud_m_vertical.png'
import { useState } from "react"
import { useEffect } from "react"
const ContactUs = (props) => {
  const [hoverData, setHoverData] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  var url = ""
  var concatenateForm = ""

  function hoverIn() {
    setHoverData(true)
  }
  function hoverOut() {
    setHoverData(false)
  }
  function submitForm(e) {
    console.log("form submitted")
    e.preventDefault()
    // concatenateForm = "Name: " + name +"\n" + "Email: " + email + "\n" + "Message: " + message + "\n" 
    // console.log(concatenateForm)
  }
  url = "https://api.whatsapp.com/send?phone=923212346435&text=" + encodeURIComponent("Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message + "\n");
  // console.log(url)

  const handleClick = () => {
    window.location.replace(url);
  };
  return (

    <div id="contact-section">
      <div className='-mt-10 xl:mt-2 h-fit flex justify-between items-end w-full'>
        <div className='relative top-2'>
          <img src={blackLeftCloud} className='w-52 lg:w-72 2xl:w-96' />
        </div>
        <div className='relative top-16'>
          <img src={Dom} className='w-56 lg:w-72 2xl:w-96' />
        </div>
        <div className='relative top-2'>
          <img src={blackRightCloud} className='w-52 lg:w-72 2xl:w-96' />
        </div>
      </div>

      <section className='relative max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 bg-black w-full h-fit pt-20'>
        <h1 className='text-center text-white font-bold text-4xl md:text-6xl'>CONTACT US</h1>
        <div className='flex justify-center pt-20'>
          <form className='w-4/5 md:w-full md:grid md:grid-cols-3' onSubmit={submitForm}>
            <div className='md:col-span-2 space-y-7 lg:space-y-16'>
              <div className='space-y-7 md:flex md:justify-between md:space-y-0'>
                <div className='w-full md:w-[46%]'>
                  <label className='text-white text-lg lg:text-2xl'>Name :</label><br />
                  <input type='text' placeholder='e.g. Abdullah' className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white focus:outline-none' onChange={(e) => setName(e.target.value)} />
                  <div className='h-[2px] w-full bg-white mt-1 rounded-full'></div>
                </div>
                <div className='w-full md:w-[46%]'>
                  <label className='text-white text-lg lg:text-2xl'>Email</label><br />
                  <input type='email' placeholder='foo@example.com' className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white focus:outline-none' onChange={(e) => setEmail(e.target.value)} />
                  <div className='h-[2px] w-full bg-white mt-1 rounded-full'></div>
                </div>
              </div>

              <div>
                <label className='text-white text-lg lg:text-2xl'>Message</label><br />
                <input type='text' placeholder="e.g. Hey I am interested in...." className='pt-3 pb-1 lg:mt-2 bg-black w-full border-none text-lg lg:text-xl text-white focus:outline-none' onChange={(e) => setMessage(e.target.value)} />
                <div className='h-[2px] w-full bg-white mt-1 rounded-full'></div>
              </div>
              <div className='lg:flex lg:justify-center'>

                <button type="submit" onClick={handleClick} onMouseEnter={hoverIn} onMouseLeave={hoverOut} className='btnButton py-3 w-full lg:py-5 lg:text-2xl lg:px-14 lg:w-fit whiteHover'>

                  {
                    hoverData ?
                      <div className='flex sm:items-center'>
                        <img src={whiteEnvelope} className='mr-3 max-sm:w-5 sm:w-10' />Send
                      </div>
                      :
                      <div className='flex sm:items-center'>
                        <img src={Email} className='mr-3 max-sm:w-5 sm:w-9' />Send
                      </div>
                  }

                </button>
              </div>
            </div>
            <div className='hidden md:visible md:-mt-10 md:flex md:justify-center'>
              <img src={threeD} className='md:p-5 h-fit max-md:ml-20' />
            </div>
          </form>
        </div>

        <div className='text-white w-full'>
          <div className=' bg-[#353535] w-full h-1 mt-10 rounded-full'></div>
        </div>
      </section>
    </div>
  )
};

export default ContactUs;
