// import React from 'react'
// import '../../src/index.css';
// import homebanner from "../assets/images/homebanner.png"
// import service1 from "../assets/images/service1.png"
// import service2 from "../assets/images/service2.png"
// import service3 from "../assets/images/service3.png"
// import service4 from "../assets/images/service4.png"


// const Home = () => {

//   return (
//     <div>
   
//    <div
//       className="flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${homebanner})`,
//         width: '',
//         height: '579.6px', }}
//     >
//     <div className=' text-center text-white max-w-[50%]'>
//         <h1 className="font-normal text-[63.0899px] leading-[72px] text-center tracking-[-0.27671px]">
//         Shaping Brand Experiences Through Storytelling
//       </h1>
//       <p>Businesses come to us as their starting point to innovate, shape, reimagine ideas, and create unforgettable experiences and products pushing beyond the limits of what's possible with storytelling.</p>
//       <button className="btn btn-primary">Primary</button>
//     </div>
    
//     </div>
//     {/*  */}
//     <div className='p-20 flex flex-col justify-center items-center '>
//     <div className='text-center max-w-[60%]'>
//          <p className='font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#282828]'> Our Ideology</p>
//         <p className='font-normal text-[24px] leading-[38px] text-[#484848]'>We partner with businesses to create great brands, to create stories for themselves, to shape their brand experiences.</p>
   
//     </div>
//       </div>

//       {/*  */}
//       <div className='flex flex-col  p-2 bg-[rgba(249,241,221,0.5)] '>
//         <p className='font-normal text-[45px] leading-[52px] text-[#282828]'>Our Services</p>
//         <p className='font-normal text-[24px] leading-[38px] text-[#484848]'>We partner with clients to develop memorable brands that create connection and inspire change.</p>
//        <div className='flex flex-col justify-center items-center'>
//           <div className=' grid lg:grid-cols-4 grid-cols-1 lg:px-6  justify-center items-center'>
//                   <div className='w-full h-full flex lg:p-8 p-2 bg-[rgba(64,123,255,0.2)] shadow-xl'>
//                     <div className='flex flex-col justify-center items-center w-full h-full'>
//                         <img src={service1} alt="service1" className='w-[200px]' />
//                         <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding</p>
//                     </div>
//                   </div>
//                   <div className='w-full h-full flex lg:p-8 p-2 bg-[rgba(255,189,26,0.2)] shadow-xl'>
//                   <div className='flex flex-col justify-center items-center w-full h-full'>
//                         <img src={service1} alt="service1" className='w-[200px]' />
//                         <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding</p>
//                     </div>
//                   </div>
//                   <div className='w-full h-full flex lg:p-8 p-2 bg-[rgba(64,123,255,0.2)] shadow-xl'>
//                   <div className='flex flex-col justify-center items-center w-full h-full'>
//                         <img src={service1} alt="service1" className='w-[200px]' />
//                         <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding</p>
//                     </div>
//                   </div>
//                   <div className='w-full h-full flex lg:p-8 p-2 bg-[rgba(255,189,26,0.2)] shadow-xl'>
//                   <div className='flex flex-col justify-center items-center w-full h-full'>
//                         <img src={service1} alt="service1" className='w-[200px]' />
//                         <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding</p>
//                     </div>
//                   </div>

//                 </div>
//        </div>
       
//       </div>
 

//   </div>
//   )
// }

// export default Home

import React from 'react'
import '../../src/index.css';
import homebanner from "../assets/images/homebanner.png"
import footbanner from "../assets/images/footerbanner.png"
import service1 from "../assets/images/service1.png"
import service2 from "../assets/images/service2.png"
import service3 from "../assets/images/service3.png"
import service4 from "../assets/images/service4.png"


const Home = () => {

  return (
    <div className='flex flex-col'>
   
   <div
      className="flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${homebanner})`,
        width: '',
        height: '579.6px', }}
    >
    <div className=' text-center text-white max-w-[50%] small-pc:max-w-full pad1 flex flex-col gap-6'>
        <h1 className="font-normal text-[63.0899px] tablet:text-[48px] phone:text-[32px] leading-[72px] text-center tracking-[-0.27671px]">
        Shaping Brand Experiences Through Storytelling
      </h1>
      <p className='phone:text-[20px]'>Businesses come to us as their starting point to innovate, shape, reimagine ideas, and create unforgettable experiences and products pushing beyond the limits of what's possible with storytelling.</p>
      <div>
        <button className="btn btn-primary">Let's Talk</button>

      </div>
    </div>
    
    </div>
    {/*  */}
    <div className='pt-20 pb-20 flex flex-col justify-center items-center '>
    <div className='text-center  small-pc:max-w-full pad1'>
         <p className='font-normal text-center text-[57px] leading-[64px] tracking-[-0.25px] text-[#282828]'> Our Ideology</p>
        <p className='font-normal text-center text-[24px] leading-[38px] text-[#484848]'>We partner with businesses to create great brands, to create stories for themselves, to shape their brand experiences.</p>
   
    </div>
      </div>

      <div className='pad1 flex flex-col gap-[120px] bg-[rgba(249,241,221,0.5)]'>
        {/*  */}
        <div className='flex flex-col gap-12 items-center justify-center pt-8 pb-8 '>
          <div className='flex flex-col gap-8 w-full'>
            <div className='flex flex-col gap-2 mr-auto w-[777px] small-pc:w-[85%]' >
              <p className='font-semibold text-[45px] leading-[52px] text-[#282828]'>Our Services</p>
              <p className='font-normal text-[24px] leading-[38px] text-[#484848]'>We partner with clients to develop memorable brands that create connection and inspire change.</p>
            </div>

            <div className='flex small-pc:flex-col small-pc:gap-6 justify-center items-center h-[600px] tablet:h-auto w-full'>
              <div className='flex justify-center items-center h-full w-full small-pc:gap-6 phone:flex-col'>
                    <div className='w-full h-full flex-1 flex lg:p-8 p-2 bg-[rgba(64,123,255,0.2)] shadow-xl'>
                      <div className='flex flex-col justify-center items-center w-full h-full'>
                          <img src={service1} alt="service1" className='w-[200px]' />
                          <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding</p>
                      </div>
                    </div>
                    <div className='w-full h-full flex-1 flex lg:p-8 p-2 bg-[rgba(255,189,26,0.2)] shadow-xl'>
                      <div className='flex flex-col justify-center items-center w-full h-full'>
                          <img src={service2} alt="service1" className='w-[200px]' />
                          <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Strategy</p>
                      </div>
                    </div>
              </div>
              <div className='flex justify-center items-center h-full w-full small-pc:gap-6 phone:flex-col'>
                    <div className='w-full h-full flex-1 flex lg:p-8 p-2 bg-[rgba(64,123,255,0.2)] shadow-xl'>
                      <div className='flex flex-col justify-center items-center w-full h-full'>
                          <img src={service3} alt="service1" className='w-[200px]' />
                          <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Development</p>
                      </div>
                    </div>
                    <div className='w-full h-full flex-1 flex lg:p-8 p-2 bg-[rgba(255,189,26,0.2)] shadow-xl'>
                      <div className='flex flex-col justify-center items-center w-full h-full'>
                          <img src={service4} alt="service1" className='w-[200px]' />
                          <p className='font-normal text-[24px] leading-[38px] text-center text-[#282828]'>Branding Engagment</p>
                      </div>
                    </div>
              </div>

            </div>
          </div>

          <div>
            <button className="btn btn-primary">Let's Talk</button>
          </div>
        
        </div>

        {/*  */}
        <div className=' flex flex-col justify-center items-center gap-8'>
            <div className='flex flex-col gap-2 w-[753px] small-pc:w-[85%]'>
              <p className='font-semibold text-[45px] leading-[52px] text-[#282828] text-center '>Featured Work</p>
              <p className='font-normal text-[24px] leading-[32px] text-center text-[#484848]'>We believe that brands are more than just products; they're stories waiting to be told.</p>
            </div>
            <div
              className="w-full  flex items-center justify-center bg-cover bg-center rounded-[16px] relative"
              style={{ backgroundImage: `url(${footbanner})`,
                width: '',
                height: '579.6px', }}
            >
              <div className=' text-white mr-auto p-8 phone:p-4'>
                  <h1 className="font-normal text-[63px] small-pc:text-[50px] tablet:text-[30px] leading-[72px] tracking-[-0.27671px]">
                  Footprint World AI
                </h1>
                <p>Innovating Today For A Smarter Tomorrow.</p>
              
              </div>
      
            </div>
        </div>

      </div>


      <div className='pad1 flex flex-col w-[753px] small-pc:w-[85%] m-auto mt-20 mb-20 justify-center items-center gap-8'>
        <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-[45px] leading-[52px] text-[#282828] text-center '>Let's Work Together</h2>
          <p className='font-normal text-[24px] leading-[32px] text-center text-text_color'>
            We’re your partner in addressing real human needs, collaborating together to create something we can all be proud of.
          </p>
        </div>
        <div>
            <button className="btn btn-primary">Let's Talk</button>
          </div>
      </div>
 

  </div>
  )
}

export default Home