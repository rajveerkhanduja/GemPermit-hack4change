import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Services', path: 'services' },
    { link: 'About', path: 'about' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300' : 'bg-[#F5F7FA]'
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">GemPermit</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-grey900">
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>

          {/* menu button for only mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block text-white hover:text-brandPrimary first:font-medium cursor-pointer"
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
