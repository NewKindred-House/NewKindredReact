import LogoImg from '../assets/images/logo.png'
import { Link } from 'react-router-dom'; // Uncomment this line to use Link

const Header = () => {
  return (
    <>
      <div className="navbar justify-between bg-base-100 pad1 phone:px-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow flex flex-col gap-4"
            >
              <li><Link to={'/work'} className='hover:bg-white hover:text-primary w-full'>Work</Link></li>
              <li><Link to={'/about'} className='hover:bg-white hover:text-primary w-full'>About Us</Link></li>
              <li><Link to={'/services'} className='hover:bg-white hover:text-primary w-full'>Services</Link></li>
              <li><Link to={'/blog'} className='hover:bg-white hover:text-primary w-full'>Blog</Link></li>
              {/**
               * 
              <li><Link to={'/careers'} className='hover:bg-white hover:text-primary w-full'>Careers</Link></li>
               */}

            </ul>
          </div>

          <Link to={'/'} >
            <img src={LogoImg} alt='logo' className='w-[186px]' />
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-20">
            <li><Link to={'/work'} className='hover:bg-white hover:text-primary font-normal text-[16px]'>Work</Link></li>
            <li><Link to={'/about'} className='hover:bg-white hover:text-primary font-normal text-[16px]'>About Us</Link></li>
            <li><Link to={'/services'} className='hover:bg-white hover:text-primary font-normal text-[16px]'>Services</Link></li>
            <li><Link to={'/blog'} className='hover:bg-white hover:text-primary font-normal text-[16px]'>Blog</Link></li>
            {
              /**
               * 
              <li><Link to={'/careers'} className='hover:bg-white hover:text-primary font-normal text-[16px]'>Careers</Link></li>
               */
            }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/connect'} className="bg-primary text-white btn hover:bg-primary">Connect</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
