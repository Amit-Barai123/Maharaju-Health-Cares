
"use client"; // Ensure this is at the top for client-side rendering
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/'); // Initialize current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Update current path when the component mounts
    setCurrentPath(window.location.pathname);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Array of nav links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Development", label: "Development" },
    { href: "/marketting", label: "Marketing" },
    { href: "/graphic", label: "Graphic Designing" },
    { href: "/traning", label: "Training" },
    { href: "/portfilio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  // Function to handle link clicks and set the current path
  const handleLinkClick = (href) => {
    setCurrentPath(href);
    // Use the history API to change the URL without reloading the page
    window.history.pushState({}, '', href);
  };

  return (
    <header
      id="header2"
      className={`${
        scrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      } transition-all duration-300 pt-2 sticky top-0 z-40 border-b-slate-600`}
    >
      <div className="container mx-auto flex justify-between items-center pb-4 px-4">
        <img src="./images/m-logo.png" className="h-10 w-auto" alt="Logo" />
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 text-lg">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => handleLinkClick(href)} className="relative inline-block">
                <span
                  className={`border-b-2 transition-all duration-300 pb-[24px] hover:border-white ${
                    currentPath === href ? 'border-white' : 'border-transparent'
                  }`}
                >
                  {label}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 h-0 bg-white transition-all duration-300 
                    ${currentPath === href ? 'w-full' : 'w-0'}`}
                  style={{ transition: 'width 0.3s ease' }}
                />
              </Link>
            ))}
          </nav>
          {/* Hamburger Icon for Mobile */}
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            {menuOpen ? (
              <span className="bi bi-x-lg text-2xl text-black"></span>
            ) : (
              <span className="bi bi-list text-2xl"></span>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="block lg:hidden bg-white text-black text-lg py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => handleLinkClick(href)} className="block px-4 hover:text-blue-400">
              {label}
            </Link>
          ))}
        </nav>
      )}
      <hr className="border-slate-100 opacity-35"></hr>
    </header>
  );
};

export default Header2;
