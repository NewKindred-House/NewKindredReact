import React from 'react'
import Banner from '../components/Banner'
import OurTeam from '../components/OurTeam'
import ReadyToWork from '../components/ReadyToWork'

const About = () => {
  return (
    <div>
      <Banner section={'About'} />

      <div className='pad1 flex small-pc:flex-wrap small-pc:gap-8 items-start justify-between font-neuething font-normal text-[16px] text-text_color mt-24'>
        <div className='w-[400px] small-phone:w-[85%] flex flex-col gap-8'>
          <div>
            In our world saturated with information, where voices and brands compete for attention daily, the art of storytelling often gets drowned out, leaving narratives that lack clarity and authenticity. 
          </div>

          <div>
            What then defines a compelling narrative? It's the fusion of resolution, authenticity, and consistency. Yet, many brands are losing that voice. 
          </div>
        </div>

        <div className='w-[400px] small-phone:w-[85%]'>
          However, within this chaos lies a space where truth is palpable, resolution is accurate, and authenticity is relatable. It's where brands can genuinely express themselves, forging true connections with their audience.
        </div>
      </div>

      {/**Missing components */}

      {/**Our Team */}
      <div className='mt-24'>
        <OurTeam />
      </div>

      <div className='pad1 flex small-pc:flex-wrap small-pc:gap-8 items-start justify-between font-neuething font-normal text-[16px] text-text_color mt-24'>
        <div className='w-[400px] small-phone:w-[85%] flex flex-col gap-8'>
          <div className='text-[16px] font-normal'>
            At NewKindred, we specialize in building these spaces. Through our approach, we challenge businesses to embody their true essence and become <span className='text-[20px] font-medium'>storytellers</span>. 
          </div>

          <div className='text-[16px] font-normal'>
            Our mission is crystal clear to guide businesses in building genuine, relatable brands.  
          </div>
        </div>

        <div className='w-[400px] small-phone:w-[85%] text-[16px] font-normal'>
          However, within this chaos lies a space where truth is palpable, resolution is accurate, and authenticity is relatable. It's where brands can genuinely express themselves, forging true connections with their audience.
        </div>
      </div>

      <div className='mt-24'>
        <ReadyToWork />
      </div>

      
  </div>
  )
}

export default About