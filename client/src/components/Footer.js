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

      <footer className="footer pad1 py-16">
        <div className="flex flex-col gap-[100px]">
          <div className="flex items-start gap-[155px]">
            <nav className="flex flex-col gap-8">
              <img src={LogoTwoImg} alt="Newkindred footer logo" className="w-[50px]" />

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <p>No 200, ikola street, Iyanyu Ipaja, Lagos</p>
                <a href="tel:+2349057316290">+234 -9057316290</a>
                <a href="mailto:hello@newkindred.com">hello@newkindred.com</a>
              </div>
            </nav>

            <nav className="flex flex-col gap-8">
              <h6 className="footer-title">About</h6>

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <Link>Our Story</Link>
                <Link>Team</Link>
                <Link>Careers</Link>
              </div>
            </nav>

            <nav className="flex flex-col gap-8">
              <h6 className="footer-title">Follow Us</h6>

              <div className="flex flex-col gap-2 text-white text-[16px]">
                <a className='flex gap-1'>
                  <FacebookOutlined />
                  Facebook
                </a>
                <a className="flex gap-1">
                  <XOutlined />
                  Twitter
                </a>
                <a className="flex gap-1">
                  <InstagramOutlined />
                  Instagram
                </a>
              </div>
            </nav>
          </div>

          <div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
