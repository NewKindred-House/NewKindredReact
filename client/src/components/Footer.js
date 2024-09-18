import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import logo from "../assets/images/logo.png"
//import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
            {/* <footer className="bg-secondary text-white p-4 text-center">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer> */}

    <footer className="footer flex flex-col bg-primary  text-white p-10">
        <div class="w-full grid grid-cols-1 xl:grid-cols-5 gap-9 px-4 py-4">
            <div class="w-full flex flex-col gap-4 rounded-xl col-span-2">
            <img src={logo} alt='' className='w-20'/>
              <div>
              <p className='font-normal text-[18.23px] leading-[34px] tracking-[3.5px]'>Ikeja Ph 218 Ave 200 lagos state</p>
              <p className='font-normal text-[18.23px] leading-[34px] tracking-[3.5px]'>+987 7473-2839-298</p>
              <p className='font-normal text-[18.23px] leading-[34px] tracking-[3.5px]'>connect@NewKindred,com</p>
              </div>
            </div>
            <div class="w-full flex flex-col ">
            <nav className='flex flex-col gap-2'>
    <h6 className="footer-title">Services</h6>
    <a href='/' className="w-fit py-2">Email Marketing</a>
            <a href='/' className="w-fit py-2">Content Marketing</a>
            <a href='/' className="w-fit py-2">Branding</a>
            <a href='/' className="w-fit py-2">Digital</a>
  
  </nav>
            </div>
            <div class="w-full ">
            <nav className='flex flex-col gap-2'>
    <h6 className="footer-title">About</h6>
    <a href='/' className="w-fit py-2">Our Story</a>
            <a href='/' className="w-fit py-2">Benefits</a>
            <a href='/' className="w-fit py-2">Team</a>
            <a href='/' className="w-fit py-2">Careers</a>
  
  </nav>
            </div>
            <div class="w-full">
            <nav className='flex flex-col gap-2'>
    <h6 className="footer-title">Follow Us</h6>
            <a href='/' className="flex items-center gap-2 w-fit py-2"><FaFacebookF/>Facebook</a>
            <a href='/' className="flex items-center gap-2 w-fit py-2"><FaXTwitter />Twitter</a>
            <a href='/' className="flex items-center gap-2 w-fit py-2"><FaInstagram />Instagram</a>
  
  </nav>
            </div>
       
        </div>
        <div className='w-full lg:flex  justify-between items-center lg:px-40'>
            <div className='flex lg:w-fit w-full justify-center  gap-4'>
            <a href='/' className="w-fit py-2">Terms & Conditions</a>
            <a href='/' className="w-fit py-2">Privacy Policy</a>
            </div>
            <div>Copyright 2024. Newkindred. All right reserved.</div>
        </div>
        
  {/* <nav>
    <h6 className="footer-title">Services</h6>
    <a href='/' className="link link-hover">Branding</a>
    <a href='/' className="link link-hover">Design</a>
    <a href='/' className="link link-hover">Marketing</a>
    <a href='/' className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a href='/' className="link link-hover">About us</a>
    <a href='/' className="link link-hover">Contact</a>
    <a href='/' className="link link-hover">Jobs</a>
    <a href='/' className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a href='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav> */}
</footer>
    </>

  );
}

export default Footer;
