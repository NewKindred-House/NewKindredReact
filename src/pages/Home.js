import React from 'react'
import { Carousel } from 'antd';
import '../../src/index.css';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
   
    <div className="hero bg-hero-bg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Shaping Brand Experiences Through Storytelling</h1>
      <p className="py-6">
      Businesses come to us as their starting point to innovate, shape, reimagine ideas, and create unforgettable experiences and products pushing beyond the limits of what's possible with storytelling.
      </p>
      <p className='bg-biden'>walk</p>
      <button className="btn btn-primary">Let's Talk</button>
    </div>
  </div>
</div>

   
    <h1 className="text-primary">Home Page</h1>
    <p className="text-secondary">Welcome to the home page!</p>
  </div>
  )
}

export default Home