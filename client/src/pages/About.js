import React from 'react'
import TeamData from "../components/TeamData";
import Team from "../components/Team"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
//import { FaArrowRightLong } from "react-icons/fa6";


const About = () => {
  return (
    <div className="w-full ">
  <div className="bg-grey2 px-[69px]">
        <div className="flex justify-between pb-[41px] pt-[124px] gap-[63px]"> {/* Added gap */}
          <div className="w-[67px] h-[39px] items-center justify-center px-[4px] py-[2px] md:w-[120px] md:h-[58px] border-[0.8px] rounded-md border-primary md:p-[10px]">
            <p className="text-center font-sans text-[14px] leading-[2.13rem] md:text-2xl">About</p>
          </div>
          <div className="w-[170px] md:w-[624px]">
            <h2 className="text-[23px] font-sans font-bold md:text-7xl">NewKindred</h2>
            <p className="hidden md:text-base font-sans lg:block">
              We partner with businesses to build great brands, develop great
              products, create stores for themselves, and shape their brand
              experiences 
            </p>
          </div>
        </div>
      </div>

      <div className="px-[40px] md:px-[69px] bg-white">
            <div className="pt-[43px] pb-[66px] grid grid-cols-1 lg:grid-cols-2 gap-x-[216px] gap-y-[16px]">
              <h3 className="font-bold text-center text-[28px] md:hidden">We're NewKindred</h3>
              <p className="font-sans text-sm md:hidden">We partner with businesses to build great brands, develop great products, 
                create stories for themselves, and shape their brand experiences.
              </p>
              <p className="font-sans text-sm ">In our world saturated with information, where voices and brands compete for attention daily, 
                the art of storytelling often gets drowned out, leaving narratives that lack clarity and authenticity.
              </p>
              <p className="font-sans text-sm">
                However, within this chaos lies a space where truth is palpable, 
                resolution is accurate, and authenticity is relatable. 
                It's where brands can genuinely express themselves, forging true connections with their audience.
              </p>
              <p className="font-sans text-sm">
                What then defines a compelling narrative? 
                It's the fusion of resolution, authenticity, and consistency. Yet, many brands are losing that voice. 
              </p>
              </div>
              </div>
              <div className="bg-white px-[40px] pt-[40px] md:px-[69px] md:pt-[69px]">
          <h2 className="text-[40px]  pb-[42px] hidden md:block">Meet Our Team</h2>
          <div className="flex gap-x-[15px] pt-[69px]">
            
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={{
              clickable: true, // Allows pagination bullets to be clickable
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation]} // Include the Pagination and Navigation modules
          >
            {TeamData.map((team, index) =>{
              return (
                <SwiperSlide key={index}>
                  <Team
                    image = {team.image}
                    title = {team.title}
                    name = {team.name}
                    twitter = {team.twitter}
                    linkedin = {team.linkedIn}
                  />
                </SwiperSlide>
              )
            })}
            ...
          </Swiper>
          </div>
          </div>
          <h2 className="text-[28px] md:text-7xl ">Ready to Work ? </h2>
          <button className=" mt-[24px] border rounded border-primary flex px-[23px] py-[15px] md:px-[27px] md:py-[17px]">
            <p className="text-[14px] md:text-lg text-primary flex justify-center items-center">Start a project 
            <span className="ml-[10px]">
            {/* <FaArrowRightLong /> */}
            </span></p>
            </button>
  </div>
  )
}

export default About