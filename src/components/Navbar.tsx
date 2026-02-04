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
        h-[67px] min-[368]:h-[67px] min-[786]:h-[72px] min-[1220px]:h-[81px] min-[1440px]:h-[81px]



        min-[1600px]:h-[100px]   min-[1850px]:h-[110px]   min-[1920px]:h-[120px]
        min-[2150px]:h-[130px]   min-[2300px]:h-[135px]   min-[2560px]:h-[140px]
        transition-all duration-300
      `}
    >
      <div
        className={`
          flex items-center justify-between h-full mx-auto
          pl-[18px] pr-[12px]
          sm:pl-[18px] sm:pr-[12px]
          md:pl-[40px] md:pr-[30px]
          lg:pl-[60px] lg:pr-[40px]
          xl:pl-[60px] xl:pr-[45px]
          min-[1600px]:pl-[80px]   min-[1600px]:pr-[50px]
          min-[1850px]:pl-[90px]   min-[1850px]:pr-[53px]
          min-[1920px]:pl-[105px]  min-[1920px]:pr-[55px]
          min-[2150px]:pl-[100px]  min-[2150px]:pr-[58px]
          min-[2300px]:pl-[105px]  min-[2300px]:pr-[60px]
          min-[2560px]:pl-[110px]  min-[2560px]:pr-[65px]
          max-w-[2560px]
        `}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className={`
              h-[27px] sm:h-[30px] md:h-[36px] lg:h-[39px] xl:h-[41px]
              min-[1600px]:h-[65px]   min-[1850px]:h-[75px]   min-[1920px]:h-[85px]
              min-[2150px]:h-[95px]   min-[2300px]:h-[110px]  min-[2560px]:h-[130px]
              
              w-[130px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px]
              min-[1600px]:w-[250px]  min-[1850px]:w-[280px]  min-[1920px]:w-[300px]
              min-[2150px]:w-[320px]  min-[2300px]:w-[340px]  min-[2560px]:w-[350px]
             
              max-h-[130px] max-w-[350px]
              transition-all duration-300
            `}
          />
        </div>

        {/* Desktop nav links */}
        <div
          className={`
            hidden lg:flex items-center
            space-x-[40px] xl:space-x-[60px]
            min-[1600px]:space-x-[78px]   min-[1850px]:space-x-[90px]
            min-[1920px]:space-x-[105px]  min-[2150px]:space-x-[120px]
            min-[2300px]:space-x-[135px]  min-[2560px]:space-x-[138px]
          `}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                font-['Helvetica'] font-normal
                text-[16px] lg:text-[16px] xl:text-[16px]
                min-[1600px]:text-[18px]   min-[1850px]:text-[20px]
                min-[1920px]:text-[22px]   min-[2150px]:text-[24px]
                min-[2300px]:text-[26px]   min-[2560px]:text-[28px]
                text-black text-center
                hover:text-gray-700 transition-colors
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className={`
              p-[8px] rounded-md font-['Helvetica'] font-normal
              text-gray-700 hover:text-blue-600 focus:outline-none
            `}
            aria-label="Toggle menu"
          >
            <svg
              className="h-[32px] w-[32px] md:h-[36px] md:w-[36px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-30 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className={`
              lg:hidden fixed top-0 right-0 z-40 h-full
              w-[256px] md:w-[320px]
              bg-white shadow-[-10px_0_25px_-5px_rgba(0,0,0,0.3)]
              transition-transform duration-300 ease-in-out
            `}
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div
              className={`
                px-[16px] pt-[56px] sm:pt-[64px] md:pt-[72px] pb-[16px]
                flex flex-col space-y-[16px] md:space-y-[20px]
              `}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    font-['Helvetica'] font-normal
                    text-[16px] md:text-[18px] lg:text-[20px]
                    text-black text-center
                    hover:text-gray-700 transition-colors
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar; 