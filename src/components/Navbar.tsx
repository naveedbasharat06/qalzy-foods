import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'AI Scale', href: '#' },
    { label: 'Calorie Tracking App', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Shop', href: '#' },
  ];

  return (
    <nav className="
      fixed top-0 left-0 z-50 w-full
      bg-white shadow-md
      h-[67px] sm:h-[67px] md:h-[72px] lg:h-[81px] xl:h-[81px] 2xl:h-[140px]
      transition-all duration-300
    ">
      <div className="
         flex items-center justify-between
        h-full
        mx-auto
        
        pl-[18px] pr-[12px] 
        sm:pl-[18px] sm:pr-[12px]
        md:pl-[40px] md:pr-[30px]
        lg:pl-[60px] lg:pr-[45px]
        xl:pl-[60px] xl:pr-[45px]
        2xl:pl-[110px] 2xl:pr-[65px]
        max-w-[2560px]
      ">
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className="
              h-[27px] sm:h-[36px] md:h-[41px] lg:h-[41px] xl:h-[41px] 2xl:h-[130px]
              max-h-[220px]

              w-[130px] sm:w-[130px] md:w-[140px] lg:w-[200px] xl:w-[200px] 2xl:w-[350px]
              max-w-[350px]
              
              
              w-auto object-contain
              transition-all duration-300
            "
          />
        </div>

        <div className="hidden lg:flex items-center space-x-[78px] xl:space-x-[78px] 2xl:space-x-[138px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
               font-['Helvetica'] font-normal 
                text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[28px]
                text-black
              text-center
              hover:text-gray-700 transition-colors
           
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-[8px] rounded-md font-['Helvetica'] font-normal text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-[32px] w-[32px]"
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

      {isMenuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 z-30 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          
          <div 
            className="
              lg:hidden fixed top-0 right-0 z-40 h-full 
              w-[256px] bg-white shadow-[-10px_0_25px_-5px_rgba(0,0,0,0.3)]
              transition-transform duration-300 ease-in-out
            "
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="
              px-[16px] pt-[56px] sm:pt-[64px] md:pt-[72px] pb-[16px]
              flex flex-col space-y-[16px]
            ">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                  font-['Helvetica'] font-normal
                    text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]
                text-black
              text-center
              hover:text-gray-700 transition-colors
             "
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