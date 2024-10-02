import React from "react";
import LogoTwoImg from '../assets/images/logo2.png'
import { Link } from "react-router-dom";
import { FacebookOutlined, XOutlined, InstagramOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <>
      {/* <footer className="bg-secondary text-white p-4 text-center">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer> */}

      <footer className="footer pad1 py-16 bg-primary">

        <div className="flex flex-col gap-[100px] w-full">
          <div className="flex items-start gap-[155px] tablet:flex-col tablet:gap-[50px]">
            <nav className="flex flex-col gap-8">
              <img src={LogoTwoImg} alt="Newkindred footer logo" className="w-[50px]" />

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <p>No 200, ikola street, Iyanyu Ipaja, Lagos</p>
                <a href="tel:+2349057316290">+234 -9057316290</a>
                <a href="mailto:hello@newkindred.com">hello@newkindred.com</a>
              </div>
            </nav>

            <nav className="flex flex-col gap-8">
              <h6 className="footer-title text-white">About</h6>

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <Link>Our Story</Link>
                <Link>Team</Link>
                <Link>Careers</Link>
              </div>
            </nav>

            <nav className="flex flex-col gap-8">
              <h6 className="footer-title text-white">Follow Us</h6>

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <a className='flex gap-1'>
                  <FacebookOutlined className="text-[18px]" />
                  Facebook
                </a>
                <a className="flex gap-1">
                  <XOutlined className="text-[18px]" />
                  Twitter
                </a>
                <a className="flex gap-1">
                  <InstagramOutlined className="text-[18px]" />
                  Instagram
                </a>
              </div>
            </nav>
          </div>

          <div className="flex w-full items-center justify-between text-white tablet:flex-col tablet:gap-8">
            <div className="flex items-center gap-6 text-[15px] font-normal">
              <Link>Terms & Conditions</Link>
              <Link>Privacy</Link>
            </div>

            <div className="text-[15px]">
              Copyright © {new Date().getFullYear()}. NewKindred. All rights reserved.
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
