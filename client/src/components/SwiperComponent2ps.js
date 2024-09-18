import React,{useRef, useEffect} from 'react';
import 'swiper/css/pagination';
import 'swiper/css';


//Create a function to generate Swiper Slide
function Slides({content}) {
  return (
    <div className='swiper-slide font-neuething' >
      <h3 className='font-medium text-xl text-deep_text_color'>{content.title}</h3>
      <p className='font-normal text-sm leading-6 py-2'>
          {content.content}
      </p>
      <p className='font-normal text-sm leading-6 py-2'>
          {content.content}
      </p>
    </div>
  )
}

export default function SwiperComponent2ps({data}) {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new window.Swiper(swiperContainerRef.current, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Clean up Swiper on component unmount
    return () => {
      swiper.destroy();
    };
  }, []);

  const slides = data.map(content => <Slides content={content}/>)
  return (
    <div className="swiper" ref={swiperContainerRef}>
      {/* <!-- Swiper wrapper --> */}
      <div className="swiper-wrapper">
        {/* <!-- Slides --> */} 
        {slides}
      </div>
      {/* The pagination */}
      <div className="swiper-pagination !relative pt-5"></div>
  </div>
    )
}