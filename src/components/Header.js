import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
            {/* <header className="bg-primary text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl font-bold">My App</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
        </div>
      </nav>
    </header> */}
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
        <li><a href='/'>Work</a></li>
        <li><a href='/'>About Us</a></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><a href='/'>Careers</a></li>
      </ul>
    </div>
    <a href='/' className="btn text-xl">NewKindred</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href='/'>Work</a></li>
        <li><a href='/'>About Us</a></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><a href='/'>Careers</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/' className="btn">Let's Talk</a>
  </div>
</div>
    </>

  );
}

export default Header;
