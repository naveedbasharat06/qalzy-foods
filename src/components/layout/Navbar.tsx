import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'AI Scale', href: 'ai-scale' },
    { label: 'Calorie Tracking App', href: 'CTA' },
    { label: 'Blog', href: 'blog' },
    { label: 'Shop', href: 'shop' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        bg-white shadow-md
      

         h-[clamp(67px,calc(81px*100vw/1440px),140px)]
        
         transition-all duration-300
      `}
    >

      
      
      <div
        className={`
          flex items-center justify-between h-full mx-auto
         
          max-w-[2560px]




           pl-[clamp(18px,calc(60px*100vw/1440px),110px)]
            pr-[clamp(12px,calc(50px*100vw/1440px),110px)]

        `}
      >


        
        
        <div className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className={`

              

              h-[clamp(30px,calc(41*100vw/1440px),70px)]



              
              

              w-[clamp(140px,calc(200px*100vw/1440px),330px)]
              
              max-w-[2560px]
              


              transition-all duration-300

            `}
          />
        </div>

       
       
       
        <div
          className={`
            hidden lg:flex items-center

             space-x-[clamp(50px,calc(70px*100vw/1440px),150px)]


          
            `}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                font-['Helvetica'] font-normal



               
                 text-[clamp(12px,calc(16px*100vw/1440px),29px)]
               
                text-black hover:text-gray-700 transition-colors
             
             
                `}
            >
              {item.label}
            </a>
          ))}
        </div>

       
    {/* Hamburger – EXACTLY your original styling, no changes here */}
        <button
          className={`
            lg:hidden
            flex items-center justify-between
            w-11 h-11 sm:w-12 sm:h-12
            text-gray-800
            rounded-full
            hover:bg-gray-100 active:bg-gray-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
            transition-all duration-200
            min-[320px]:-mr-35
              min-[375px]:-mr-50
              min-[425px]:-mr-60
              min-[768px]:-mr-140
            
          
          `}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className={`
              w-7 h-7 sm:w-8 sm:h-8 
              transition-transform duration-400 
              ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}
            `}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu – slow top-to-bottom slide, text from top */}
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className={`
              fixed inset-0 z-40 
              bg-black/60 backdrop-blur-md
              transition-opacity duration-1000 ease-out
              ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel */}
          <div
            className={`
              fixed inset-0 z-50
              bg-gradient-to-br from-violet-950 via-fuchsia-950 to-rose-900
              transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-full opacity-0 pointer-events-none'}
            `}
          >
            <div className="relative flex flex-col h-full px-6 sm:px-10 pt-20 pb-16 overflow-y-auto">
              {/* Close button */}
              <button
                className="
                  absolute right-5 top-6 
                  p-3 rounded-full 
                  text-white/80 hover:text-white 
                  bg-black/40 hover:bg-black/60 
                  backdrop-blur-sm
                  transition-all duration-400 hover:scale-110 active:scale-95
                "
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Links from top */}
              <nav className="flex flex-col gap-10 sm:gap-14 ">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`
                      font-inter font-normal
                      text-xl sm:text-xl md:text-2xl
                      text-white tracking-tight
                      hover:text-rose-300 hover:translate-x-4 hover:scale-105
                      active:scale-95
                      transition-all duration-900 ease-out
                      drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
                      ${isMenuOpen 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-[-100px] scale-95 pointer-events-none'}
                    `}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 220}ms` : '0ms',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-16 text-white/50 text-sm text-center">
                © {new Date().getFullYear()} Qalzy • All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;