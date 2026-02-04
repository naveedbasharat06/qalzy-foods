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
      className="
        fixed top-0 left-0 z-50 w-full
        bg-white shadow-md
       
        h-[clamp(67px,81px,140px)]           /* fluid navbar height */
        transition-all duration-300
      "
    >
      <div
        className="
          flex items-center justify-between
          h-full
          mx-auto
          max-w-[2560px]                      /* respect your largest design */
          pl-[clamp(18px,60px,110px)]        /* fluid left padding */
          pr-[clamp(12px,45px,65px)]         /* fluid right padding */
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className="
              h-[clamp(27px,41px,130px)] 
                                                       /* scales smoothly from mobile → ultra-wide */
              w-[clamp(130px,200px,350px)]
              object-contain
              transition-all duration-300
            "
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-[clamp(78px,7.2vw,138px)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                font-['Helvetica'] font-normal
                text-[clamp(16px,16px,28px)]     /* fluid font size */
                text-black
                hover:text-gray-700
                transition-colors
                whitespace-nowrap
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="
              p-2 rounded-md
              font-['Helvetica'] font-normal
              text-gray-700 hover:text-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
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

      {/* Mobile Menu Overlay + Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div
            className="
              lg:hidden fixed top-0 right-0 z-40 h-full
              w-[clamp(240px,280px,320px)]                                                     /* fluid sidebar width */
              bg-white shadow-[-10px_0_25px_-5px_rgba(0,0,0,0.3)]
              transition-transform duration-300 ease-in-out
            "
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <div className="flex flex-col h-full">




              {/* Close area / padding at top */}
              <div className="px-5 pt-[clamp(56px,9vh,100px)] pb-6 flex-1 overflow-y-auto">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="
                        font-['Helvetica'] font-normal
                        text-[clamp(16px,20px,24px)]   /* larger on mobile for touch */
                        text-black
                        hover:text-gray-700
                        transition-colors
                        py-2
                      "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;