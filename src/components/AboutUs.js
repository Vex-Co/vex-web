import React from "react"
import target from '../images/pic/target image.png'
import zafeer from '../images/pic/zafeer.png'
import zaheer from '../images/pic/zaheer.png'
import instagram from '../images/pic/Instagram.png'
import TwitterX from '../images/pic/TwitterX.png'
import GitHub from '../images/pic/GitHub.png'
import LinkedIn from '../images/pic/LinkedIn Circled.png'

const AboutUs = (props) => {
  return (
    <div>
        {/* max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 */}
      <section className="mb-10 mt-10">
        <div className="grid grid-cols-3 justify-between items-center">
            <div className="space-y-5 col-span-2 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 ">
                <p className="text-3xl md:text-5xl lg:text-7xl font-semibold">Meet our team of <i>creators, designers</i> and word-class <i>problem solvers</i></p>
                <p className="italic md:text-xl lg:text-2xl">Our team  of professionals is passionate and consistent when it comes to provide the services to our clients throughout the journey they have with us. </p>
            </div>
            <div className="flex justify-end">
                <img src={target} className="h-fit md:w-96"/>
            </div>
        </div>
      </section>
      <section className="mb-20 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 mt-24 max-xmd:space-y-20 xmd:grid xmd:gap-10 xmd:grid-cols-2">
        <div className="border-2 border-black rounded-2xl flex flex-col">
            <div className="h-80 flex justify-center border-black border-b-2 w-full -mt-20">
              <img src={zafeer} className="h-[318px]"/>
            </div>
            <div className="flex flex-col justify-between w-full h-full py-8 space-y-5 px-5">
              <div>
                <p className="text-3xl font-bold">MR. ZAFEER HAFEEZ</p>
                <p className="text-gray-900 text-md">Founder, CEO & CFO</p>
                <p className="text-justify mt-5 text-black text-lg">He leads our company with a strategic vision, unwavering dedication to excellence, and a passion for driving innovation in our industry. Under his leadership, we continue to thrive and redefine the future of our business.</p>
              </div>
              <div className="flex justify-around">
                <a  target="_blank" className="cursor-pointer" href="https://www.linkedin.com/in/zafeer-hafeez/">
                <img src={LinkedIn} className="w-20"/>
                </a>
                <a  target="_blank" className="cursor-pointer" href="https://github.com/IIvexII">
                <img src={GitHub} className="w-20"/>
                </a>

                <a  target="_blank" className="cursor-pointer" href="https://twitter.com/Zafeer_Hafeez">
                <img src={TwitterX} className="w-20"/>
                </a>
              </div>
            </div>
        </div>
        <div className="border-2 border-black rounded-2xl flex flex-col">
            <div className="h-80 flex justify-center border-black border-b-2 w-full -mt-20">
              <img src={zaheer} className="h-[318px]"/>
            </div>
            <div className="flex flex-col justify-between w-full h-full py-8 space-y-5 px-5">
              <div>
                <p className="text-3xl font-bold">MR. ZAHEER UD DIN AKRAM</p>
                <p className="text-gray-900 text-md">Co-Founder & CTO</p>
                <p className="text-justify mt-5 text-black text-lg">He brings creativity, technical skills, and an entrepreneurial spirit to our team. Together, we're working to make our business even better for the future, provides best solution for the existing problems.</p>
              </div>
              <div className="flex justify-around">
                <a  target="_blank" className="cursor-pointer" href="https://www.linkedin.com/in/zaheer-ud-din-akram-503bb9255/">
                <img src={LinkedIn} className="w-20"/>
                </a>
                <a  target="_blank" className="cursor-pointer" href="https://github.com/ZaheerAkram">
                <img src={GitHub} className="w-20"/>
                </a>
                
                <a  target="_blank" className="cursor-pointer" href="https://www.instagram.com/zaheer.akram78/">
                <img src={instagram} className="w-20"/>
                </a>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
};

export default AboutUs;
