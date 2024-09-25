import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';  
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules'; 
import img1 from '../assets/images/footerbanner.png';
import img2 from '../assets/images/service1.png';

const HomeFeature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative w-full h-[579px] mx-auto">
      <Swiper
        modules={[Autoplay]} 
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                {index + 1}/{images.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeFeature;
