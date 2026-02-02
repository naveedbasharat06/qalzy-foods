// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="
        fixed inset-x-0 top-0 z-50
        h-[67px]                  // mobile & tablet (<1024px)
        lg:h-[81px]               // desktop 1024px+ (same as 1440px)
        bg-white/90 backdrop-blur-md shadow-sm
        transition-all duration-500
      "
    >
      <div
        className="
          mx-auto h-full
          max-w-screen-2xl
          px-4                      // mobile & tablet
          lg:px-10                  // 1024px+ (same as 1440px)
          xl:px-12
          2xl:px-20                 // wider at 2000px+
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="
            flex-shrink-0
            -ml-2                     // mobile & tablet
            lg:-ml-3                  // 1024px+ (same as 1440px)
            xl:-ml-2
            2xl:-ml-0.5               // extremely close to left at 2000px+
            transition-all duration-500
          "
          onClick={closeMenu}
        >
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="
              h-[27px] w-[130px]               // mobile & tablet
              lg:h-[41px] lg:w-[200px]         // 1024px+ (same as 1440px)
              xl:h-[44px] xl:w-[210px]
              2xl:h-[56px] 2xl:w-[260px]       // larger at 2000px+
              object-contain transition-all duration-500
            "
          />
        </a>

        {/* Desktop menu – visible only from lg (1024px+) */}
        <div
          className="
            hidden lg:flex items-center 
            gap-x-6                       // smaller on 1024–1439px
            lg:gap-x-[32px]               // exactly 32px at 1440px+
            xl:gap-x-12
            2xl:gap-x-20                  // wider spacing at 2000px+
            ml-auto
            -mr-4                         // mobile-like fallback
            lg:-mr-6                      // 1024px+ (same as 1440px)
            xl:-mr-8
            2xl:-mr-24                    // extremely close to right edge at 2000px+
          "
        >
          <a
            href="#ai-scale"
            className="
              min-w-[95px]                  // 1024px+ (same as 1440px)
              lg:min-w-[95px]
              xl:min-w-[105px]
              2xl:min-w-[130px]
              font-['Helvetica'] font-normal
              text-[15px]
              lg:text-[16px]                // exactly 16px at 1024px+
              xl:text-[17px]
              2xl:text-[20px]               // larger text at 2000px+
              leading-[100%]
              tracking-[0.04em]
              text-black
              text-center
              hover:text-gray-700 transition-colors
            "
          >
            AI Scale
          </a>

          <a
            href="#calorie-tracking"
            className="
              min-w-[170px]
              lg:min-w-[170px]
              xl:min-w-[190px]
              2xl:min-w-[240px]
              font-['Helvetica'] font-normal
              text-[15px]
              lg:text-[16px]
              xl:text-[17px]
              2xl:text-[20px]
              leading-[100%]
              tracking-[0.04em]
              text-black
              text-center
              hover:text-gray-700 transition-colors
            "
          >
            Calorie Tracking App
          </a>

          <a
            href="#scale"
            className="
              min-w-[85px]
              lg:min-w-[85px]
              xl:min-w-[95px]
              2xl:min-w-[120px]
              font-['Helvetica'] font-normal
              text-[15px]
              lg:text-[16px]
              xl:text-[17px]
              2xl:text-[20px]
              leading-[100%]
              tracking-[0.04em]
              text-black
              text-center
              hover:text-gray-700 transition-colors
            "
          >
            Blog
          </a>

          <a
            href="#shop"
            className="
              min-w-[85px]
              lg:min-w-[85px]
              xl:min-w-[95px]
              2xl:min-w-[120px]
              font-['Helvetica'] font-normal
              text-[15px]
              lg:text-[16px]
              xl:text-[17px]
              2xl:text-[20px]
              leading-[100%]
              tracking-[0.04em]
              text-black
              text-center
              hover:text-gray-700 transition-colors
            "
          >
            Shop
          </a>
        </div>

        {/* Hamburger – visible only below lg (1024px) */}
        <button
          className="
            lg:hidden text-black focus:outline-none
            -mr-2 sm:-mr-3 md:-mr-4
          "
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
          ) : (
            <Menu className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMenu}
      >
        <div
          className={`
            absolute right-0 top-0 h-full w-4/5 max-w-[320px] bg-white shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-6">
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="h-8 w-8 text-gray-800" />
            </button>
          </div>

          <div className="flex flex-col bg-gray-50 items-center gap-10  px-8 text-center">
            <a href="#ai-scale" className="text-2xl font-medium text-gray-900 hover:text-[#4AD769]" onClick={closeMenu}>
              AI Scale
            </a>
            <a href="#calorie-tracking" className="text-2xl font-medium text-gray-900 hover:text-[#4AD769]" onClick={closeMenu}>
              Calorie Tracking App
            </a>
            <a href="#scale" className="text-2xl font-medium text-gray-900 hover:text-[#4AD769]" onClick={closeMenu}>
              Blog
            </a>
            <a href="#shop" className="text-2xl font-medium text-gray-900 hover:text-[#4AD769]" onClick={closeMenu}>
              Shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}