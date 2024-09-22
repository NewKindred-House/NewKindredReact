import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";


const Careers = () => {
  
  return (
    <>


    <div>Careers</div> 
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Four Sliders Example</h1>
            <div className="space-y-8">
                {/* Slider 1 */}
                <Swiper autoplay={{ delay: 2500 }} navigation pagination={{ clickable: true }} className="mySwiper">
                    <SwiperSlide className="bg-indigo-200 h-64 flex items-center justify-center text-xl font-semibold">Slide 1</SwiperSlide>
                    <SwiperSlide className="bg-indigo-300 h-64 flex items-center justify-center text-xl font-semibold">Slide 2</SwiperSlide>
                    <SwiperSlide className="bg-indigo-400 h-64 flex items-center justify-center text-xl font-semibold">Slide 3</SwiperSlide>
                    <SwiperSlide className="bg-indigo-500 h-64 flex items-center justify-center text-xl font-semibold">Slide 4</SwiperSlide>
                </Swiper>

                {/* Slider 2 */}
                <Swiper autoplay={{ delay: 2500 }} navigation pagination={{ clickable: true }} className="mySwiper">
                    <SwiperSlide className="bg-green-200 h-64 flex items-center justify-center text-xl font-semibold">Slide 1</SwiperSlide>
                    <SwiperSlide className="bg-green-300 h-64 flex items-center justify-center text-xl font-semibold">Slide 2</SwiperSlide>
                    <SwiperSlide className="bg-green-400 h-64 flex items-center justify-center text-xl font-semibold">Slide 3</SwiperSlide>
                    <SwiperSlide className="bg-green-500 h-64 flex items-center justify-center text-xl font-semibold">Slide 4</SwiperSlide>
                </Swiper>

                {/* Slider 3 */}
                <Swiper autoplay={{ delay: 2500 }} navigation pagination={{ clickable: true }} className="mySwiper">
                    <SwiperSlide className="bg-blue-200 h-64 flex items-center justify-center text-xl font-semibold">Slide 1</SwiperSlide>
                    <SwiperSlide className="bg-blue-300 h-64 flex items-center justify-center text-xl font-semibold">Slide 2</SwiperSlide>
                    <SwiperSlide className="bg-blue-400 h-64 flex items-center justify-center text-xl font-semibold">Slide 3</SwiperSlide>
                    <SwiperSlide className="bg-blue-500 h-64 flex items-center justify-center text-xl font-semibold">Slide 4</SwiperSlide>
                </Swiper>

                {/* Slider 4 */}
                <Swiper navigation pagination={{ clickable: true }} className="mySwiper">
                    <SwiperSlide className="bg-red-200 h-64 flex items-center justify-center text-xl font-semibold">Slide 1</SwiperSlide>
                    <SwiperSlide className="bg-red-300 h-64 flex items-center justify-center text-xl font-semibold">Slide 2</SwiperSlide>
                    <SwiperSlide className="bg-red-400 h-64 flex items-center justify-center text-xl font-semibold">Slide 3</SwiperSlide>
                    <SwiperSlide className="bg-red-500 h-64 flex items-center justify-center text-xl font-semibold">Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </div>
        {/* WORKING */}
        <div className="max-w-lg mx-auto">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        //spaceBetween={50}
      //slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-64 bg-blue-500 flex items-center justify-center">
            <h2 className="text-white text-2xl">Slide 1</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-green-500 flex items-center justify-center">
            <h2 className="text-white text-2xl">Slide 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-red-500 flex items-center justify-center">
            <h2 className="text-white text-2xl">Slide 3</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-64 bg-yellow-500 flex items-center justify-center">
            <h2 className="text-white text-2xl">Slide 4</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
       </>
  )
}

export default Careers