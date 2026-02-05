import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'AI Scale', href: '#' },
    { label: 'Calorie Tracking App', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Shop', href: '#' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        bg-white shadow-md
        h-[67px] min-[320px]:h-[67px] min-[768px]:h-[70px] min-[1024px]:h-[70px] 
        min-[1220px]:h-[77px] min-[1440px]:h-[81px] min-[1600px]:h-[100px] 
        min-[1720px]:h-[105px] min-[1850px]:h-[110px] min-[1920px]:h-[120px]
        min-[2150px]:h-[130px] min-[2300px]:h-[135px] min-[2450px]:h-[138px]
        min-[2560px]:h-[140px]
        transition-all duration-300
      `}
    >
      {/* Main navbar content */}
      <div
        className={`
          flex items-center justify-between h-full mx-auto
          pl-[18px] pr-[12px]
          min-[320px]:pl-[18px] min-[320px]:pr-[12px]
          min-[768px]:pl-[40px] min-[768px]:pr-[30px]
          min-[1024px]:pl-[43px] min-[1024px]:pr-[32px]
          min-[1220px]:pl-[55px] min-[1220px]:pr-[40px]
          min-[1440px]:pl-[60px] min-[1440px]:pr-[45px]
          min-[1600px]:pl-[75px] min-[1600px]:pr-[50px]
          min-[1720px]:pl-[80px] min-[1720px]:pr-[50px]
          min-[1850px]:pl-[80px] min-[1850px]:pr-[53px]
          min-[1920px]:pl-[85px] min-[1920px]:pr-[55px]
          min-[2150px]:pl-[95px] min-[2150px]:pr-[58px]
          min-[2300px]:pl-[102px] min-[2300px]:pr-[60px]
          min-[2450px]:pl-[108px] min-[2450px]:pr-[62px]
          min-[2560px]:pl-[110px] min-[2560px]:pr-[65px]
          max-w-[2560px]
        `}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className={`
              h-[27px] min-[320px]:h-[30px] min-[768px]:h-[32px] min-[1024px]:h-[33px]
              min-[1220px]:h-[39px] min-[1440px]:h-[41px] min-[1600px]:h-[52px]
              min-[1720px]:h-[55px] min-[1850px]:h-[57px] min-[1920px]:h-[57px]
              min-[2150px]:h-[62px] min-[2300px]:h-[67px] min-[2450px]:h-[68px]
              min-[2560px]:h-[70px]
              w-[130px] min-[320px]:w-[140px] min-[768px]:w-[150px] min-[1024px]:w-[160px]
              min-[1220px]:w-[180px] min-[1440px]:w-[200px] min-[1600px]:w-[250px]
              min-[1720px]:w-[260px] min-[1850px]:w-[280px] min-[1920px]:w-[290px]
              min-[2150px]:w-[310px] min-[2300px]:w-[320px] min-[2450px]:w-[325px]
              min-[2560px]:w-[330px]
              max-h-[150px] max-w-[400px]
              transition-all duration-300
            `}
          />
        </div>

        {/* Desktop nav links */}
        <div
          className={`
            hidden lg:flex items-center
            space-x-[50px] min-[1024]:space-x-[50px] min-[1220]:space-x-[60px]
            min-[1440px]:space-x-[78px] min-[1600px]:space-x-[78px] min-[1720px]:space-x-[90px]
            min-[1850px]:space-x-[95px] min-[1920px]:space-x-[105px] min-[2150px]:space-x-[115px]
            min-[2300px]:space-x-[125px] min-[2450px]:space-x-[136px] min-[2560px]:space-x-[138px]
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                font-['Helvetica'] font-normal
                text-[10px] min-[1024px]:text-[12px] min-[1220px]:text-[14px] min-[1440px]:text-[16px]
                min-[1600px]:text-[18px] min-[1720px]:text-[19px] min-[1850px]:text-[20px]
                min-[1920px]:text-[22px] min-[2150px]:text-[24px] min-[2300px]:text-[26px]
                min-[2450px]:text-[27px] min-[2560px]:text-[28px]
                text-black hover:text-gray-700 transition-colors
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
  <>
    {/* Backdrop - covers whole screen, click to close */}
    <div
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    />

    {/* Right-aligned side menu – full height, slides from top */}
    <div
      className={`
        lg:hidden fixed top-0 bottom-0 right-0 z-50
        w-[50vw]                          /* mobile default ~85% width */
        sm:w-[50vw]                       /* tablets / larger phones */
        md:w-[40vw]                       /* bigger tablets / small laptops in portrait */
        bg-white/98 backdrop-blur-xl
        shadow-[-12px_0_30px_-8px_rgba(0,0,0,0.25)]
        border-l border-gray-100
        transition-transform duration-500 ease-out
        ${isMenuOpen 
          ? 'translate-x-0' 
          : 'translate-x-full'}
      `}
    >
      <div className="relative h-full flex flex-col px-6 sm:px-10 pt-20 pb-16">
        {/* Close button */}
        <button
          className="absolute right-5 top-5 text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation links – centered vertically & horizontally */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-9 sm:gap-11">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                font-['Helvetica','Arial',sans-serif] font-normal
                text-[18px] sm:text-[19px] md:text-[20px]
                text-gray-900 tracking-tight
                hover:text-black transition-colors duration-300
                active:scale-98
                w-full text-center
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

       
      </div>
    </div>
  </>
)}
    </nav>
  );
};

export default Navbar;