import React from 'react'
import bg from "../assets/images/back.jpg"

const Connect = () => {
  return (
   <div className=" flex justify-center py-5 px-10 sm:px-0 min-h-screen" style={{backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className=" sm:px-4 ">
                <p className="text-center font-normal text-5xl leading-[78px]">Connect</p>
                <p className='text-center font-normal text-lg leading-[52px]'>Say hello to us for a free consultation</p>
                <div className='flex justify-end  px-20'>
                    <p className='font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>* indicates required</p>
                </div>

                <div className='xs:hidden lg:flex justify-center space-x-4 py-6 '>
                    <div className=''>
                        <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                            <label htmlFor="">First Name*</label>
                        </div>
                        <input type="text" className='border-2 pl-2 lg:px-4 py-2 lg:text-2xl focus:outline-none focus:border-blue-500' />
                    </div>
                    <div className=''>
                        <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                            <label htmlFor="">Last Name*</label>
                        </div>
                        <input type="text" className='border-2 pl-2 lg:px-4 py-2 lg:text-2xl focus:outline-none focus:border-blue-500' />
                    </div>
                </div>
                {/* MOBILE */}
                <div className='flex flex-col gap-3'>
                <div className='lg:hidden xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">First Name*</label>
                    </div>
                    <input type="email" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='lg:hidden xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Last Name*</label>
                    </div>
                    <input type="email" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                {/* END MOBILE */}
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Email Address*</label>
                    </div>
                    <input type="email" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Phone Number*</label>
                    </div>
                    <input type="number" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Type of Enquiry*</label>
                    </div>
                    <select
                      className="rounded border-2 pl-2  py-2 text-[18.23px] w-full focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select a Project</option>
                      <option value="option1">Med SYS</option>
                      <option value="option2">Health</option>
                      <option value="option3">Fin-tech</option>
                    </select>
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Company Name*</label>
                    </div>
                    <input type="number" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Message*</label>
                    </div>

                    <textarea
                          rows="4"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Type your message here..."
                        />

                    {/* <input type="text" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full' /> */}
                </div>
                <div className='py-6 xs:mx-2'>
                    <input type="button" value="Submit" className='py-3 px-20 bg-primary btn ' />
                </div>
                </div>
            </div>
        </div>
  )
}

export default Connect