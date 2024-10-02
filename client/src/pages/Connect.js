import React, { useState } from 'react'
import bg from "../assets/images/back.jpg"
import toast from 'react-hot-toast'

const Connect = () => {
    const [ formData, serFormData ] = useState({})

    const handleChange = (e) => {
        serFormData({ ...formData, [e.target.id]: e.target.value })
    }

    
    const sendMessage = (e) => {
        e.preventDefault()
        
        if(!formData.firstName){
            toast.error('Enter First Name')
            return
        }
        if(!formData.lastName){
            toast.error('Enter Last Name')
            return
        }
        if(!formData.email){
            toast.error('Enter Email Address')
            return
        }
        if(!formData.phoneNumber){
            toast.error('Enter Phone Number')
            return
        }
        if(!formData.typeOfEnquiry){
            toast.error('Please type of Enquiry')
            return
        }
        if(!formData.companyName){
            toast.error('Enter Company Name')
            return
        }
        if(!formData.message){
            toast.error('Enter Message')
            return
        }
    }
  return (
   <div className=" flex justify-center pad1 min-h-screen" style={{backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <form onSubmit={sendMessage} className=" sm:px-4 ">
                <p className="text-center font-normal text-5xl leading-[78px]">Connect</p>
                <p className='text-center font-normal text-lg leading-[52px]'>Say hello to us for a free consultation</p>
                <div className='flex justify-end  px-20'>
                    <p className='font-normal text-[18.23px] leading-[24px] tracking-[0.5px] text-red-600'>* indicates required</p>
                </div>

                <div className='xs:hidden lg:flex justify-center space-x-4 py-6 '>
                    <div className=''>
                        <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                            <label htmlFor="">First Name<span className='text-red-600'>*</span></label>
                        </div>
                        <input onChange={handleChange} id="firstName" type="text" className='border-2 pl-2 lg:px-4 py-2 lg:text-2xl focus:outline-none focus:border-blue-500' />
                    </div>
                    <div className=''>
                        <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                            <label htmlFor="">Last Name<span className='text-red-600'>*</span></label>
                        </div>
                        <input onChange={handleChange} id="lastName" type="text" className='border-2 pl-2 lg:px-4 py-2 lg:text-2xl focus:outline-none focus:border-blue-500' />
                    </div>
                </div>
                {/* MOBILE */}
                <div className='flex flex-col gap-3'>
                <div className='lg:hidden xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">First Name<span className='text-red-600'>*</span></label>
                    </div>
                    <input onChange={handleChange} id="firstName" type="text" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='lg:hidden xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Last Name<span className='text-red-600'>*</span></label>
                    </div>
                    <input onChange={handleChange} id="lastName" type="text" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                {/* END MOBILE */}
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Email Address<span className='text-red-600'>*</span></label>
                    </div>
                    <input onChange={handleChange} id="email" type="email" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="phoneNumber">Phone Number<span className='text-red-600'>*</span></label>
                    </div>
                    <input onChange={handleChange} id="phoneNumber" type="number" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Type of Enquiry<span className='text-red-600'>*</span></label>
                    </div>
                    <select
                      id='typeOfEnquiry' c
                      lassName="rounded border-2 pl-2  py-2 text-[18.23px] w-full focus:outline-none focus:border-blue-500"
                      onChange={handleChange}
                    >
                      <option value="">Select a Project</option>
                      <option value="Medical Sysytem">Med SYS</option>
                      <option value="Health">Health</option>
                      <option value="Fin-tech">Fin-tech</option>
                    </select>
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Company Name<span className='text-red-600'>*</span></label>
                    </div>
                    <input onChange={handleChange} id='companyName' type="text" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full focus:outline-none focus:border-blue-500' />
                </div>
                <div className='xs:mx-2'>
                    <div className='py-2 font-normal text-[18.23px] leading-[24px] tracking-[0.5px]'>
                        <label htmlFor="">Message<span className='text-red-600'>*</span></label>
                    </div>

                    <textarea
                          rows="4"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
                          placeholder="Type your message here..."
                          id='message'
                        />

                    {/* <input type="text" className='rounded border-2 pl-2 lg:px-4 py-2 lg:text-2xl w-full' /> */}
                </div>
                <div className='py-6 xs:mx-2'>
                    <input type="button" onClick={sendMessage} value="Submit" className='py-3 px-20 bg-primary btn ' />
                </div>
                </div>
            </form>
        </div>
  )
}

export default Connect