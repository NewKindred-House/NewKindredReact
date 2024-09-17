import React from 'react';
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to={'/work'}>Work</Link></li>
            <li><Link to={'/'} >About Us</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/'} >Careers</Link></li>
          </ul>
        </div>
<<<<<<< HEAD
      </nav>
    </header> */}
    <div className="navbar bg-base-100 px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='/work' className='hover:bg-white hover:text-primary hover:font-extrabold'>Work</a></li>
        <li><a href='/about' className='hover:bg-white hover:text-primary hover:font-extrabold'>About Us</a></li>
        <li><a href='/blog' className='hover:bg-white hover:text-primary hover:font-extrabold'>Blog</a></li>
        <li><a href='/careers' className='hover:bg-white hover:text-primary hover:font-extrabold'>Careers</a></li>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-xl">NewKindred</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-20">
    <li><a href='/work' className='hover:bg-white hover:text-primary hover:font-extrabold'>Work</a></li>
        <li><a href='/about' className='hover:bg-white hover:text-primary hover:font-extrabold'>About Us</a></li>
        <li><a href='/blog' className='hover:bg-white hover:text-primary hover:font-extrabold'>Blog</a></li>
        <li><a href='/careers' className='hover:bg-white hover:text-primary hover:font-extrabold'>Careers</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/connect' className="bg-primary text-white btn hover:bg-primary">Connect</a>
  </div>
</div>
=======
        <Link to={'/'} className="btn text-xl">NewKindred</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><Link to={'/work'}>Work</Link></li>
            <li><Link to={'/'} >About Us</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/'} >Careers</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/'} className="btn">Let's Talk</Link>
      </div>
    </div>
>>>>>>> 28389d01666afc10fc3869d884c9592788c1af8d
    </>

  );
}

export default Header;
