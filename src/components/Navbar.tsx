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
   
   
   
    <div
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    />

   
   
    <div
      className={`
        lg:hidden fixed top-0 bottom-0 right-0 z-50
        w-[50vw]                         
        sm:w-[50vw]                      
        md:w-[40vw]                       
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
        
       
        
        <button
          className="absolute right-5 top-5 text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

       

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