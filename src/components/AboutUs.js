import React from "react"
import target from '../images/pic/target image.png'
import zafeer from '../images/pic/zafeer.png'
import zaheer from '../images/pic/zaheer.png'

const AboutUs = (props) => {
  return (
    <div>
        {/* max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52 */}
      <section className="mb-20 mt-10">
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
    </div>
  )
};

export default AboutUs;
