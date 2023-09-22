import React from "react"
import favicon from '../images/favicon.png'
import whiteOk from '../images/pic/whiteOk.png'
import blackOk from '../images/pic/blackOk.png'
import blackDiscount from '../images/pic/discount.png'
import whiteDiscount from '../images/pic/whiteDiscount.png'

const PricingSection = (props) => {
    return (
        <div id="pricing-section">
            <article className='mt-10 max-sm:px-8 sm:px-16 lg:px-24 2xl:px-52'>

                <div className='text-center max-sm:text-3xl text-5xl font-bold'>Pricing Plans</div>
                <div className='mt-10 max-md:block lg:flex lg:space-x-9 lg:justify-center grid grid-cols-2 gap-10'>

                    <div>
                        <div className='float-right'>
                            <img src={blackDiscount} className='md:mt-10 h-28' />
                        </div>
                        <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 rounded-3xl shadow-black shadow-lg'>
                            <div className='flex space-x-3'>
                                <div className='w-7 h-7 p-2 border-black border-[0.5px] rounded-full'>
                                    <img src={favicon} />
                                </div>
                                <button className='px-4 py-1 rounded-full bg-gradient-to-r from-gray-950 to-gray-600 text-white font-medium text-xs'>STANDARD PLAN</button>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-3xl font-bold tracking-tight leading-7'>PKR 150<span className='text-base font-light'>  /mo</span>
                                    <br />
                                    <span className='line-through text-base font-light -pt-20'>PKR 300 /mo</span>
                                </p>

                                <p className='text-sm text-justify my-2'>
                                    This plan provides you a professional look in the industry by designing and hosting your personal portfolio on our light weight and fast servers. </p>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={blackOk} className='w-6 h-6' />
                                    <span>6-month service</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={blackOk} className='w-6 h-6' />
                                    <span>Domain name ending with <a href='#' className='font-bold'>portfolio.com.pk</a></span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={blackOk} className='w-6 h-6' />
                                    <span>Hosting on our servers</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={blackOk} className='w-6 h-6' />
                                    <span>Customer Support</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={blackOk} className='w-6 h-6' />
                                    <span>5 editing permissions of the data in portfolio </span>
                                </div>
                            </div>
                            <div className='text-xs text-justify'>* charges of Rs. 30/edit applies after 5 editing permissions are utilized.
                                To avoid this, please verify the data before sending it to our team, Thank
                                you!</div>
                        </div>
                    </div>


                    <div>
                        <div className='float-right'>
                            <img src={whiteDiscount} className='md:mt-10 h-28' />
                        </div>
                        <div className='lg:w-[400px] w-full my-10 space-y-3 p-8 bg-[#141010] rounded-3xl shadow-black shadow-lg text-white'>
                            <div className='flex space-x-3'>
                                <div className='w-7 h-7 p-2 border-black border-[0.5px] bg-white rounded-full'>
                                    <img src={favicon} />
                                </div>
                                <button className='px-4 py-1 rounded-full bg-white text-black font-medium text-xs'>PREMIUM PLAN</button>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-3xl font-bold tracking-tight leading-7'>PKR 125<span className='text-base font-light'>  /mo</span>
                                    <br />
                                    <span className='line-through text-base font-light -pt-20'>PKR 450 /mo</span>
                                </p>

                                <p className='text-sm text-justify my-2'>
                                    This plan provides you a professional look in the industry by designing and hosting your personal portfolio on our light weight and fast servers. </p>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={whiteOk} className='w-6 h-6' />
                                    <span>12-month service</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={whiteOk} className='w-6 h-6' />
                                    <span>All Services in STANDARD PLAN</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={whiteOk} className='w-6 h-6' />
                                    <span>Customization according to skills</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={whiteOk} className='w-6 h-6' />
                                    <span>Free 1 Option to change the template</span>
                                </div>
                                <div className='flex space-x-3 text-xs items-center'>
                                    <img src={whiteOk} className='w-6 h-6' />
                                    <span>15 editing permissions of the data in portfolio</span>
                                </div>
                            </div>
                            <div className='text-xs text-justify'>* charges of Rs. 30/edit applies after 15 editing permissions are utilized.
                                To avoid this, please verify the data before sending it to our team, Thank
                                you!</div>
                        </div>
                    </div>

                </div>


                <div className='flex justify-center'>
                    <a href="https://wa.link/xwmj6i" target="_blank">
                        <button className='btnButton bg-black text-white px-10 font-medium blackHover'>Get a Custom Quote</button>
                    </a>
                </div>

                <div className='text-white flex justify-center w-full h-fit'>
                    <div className=' bg-[#353535] w-3/4 h-1 mt-16 rounded-full'></div>
                </div>

            </article>
        </div>
    )
};

export default PricingSection;
