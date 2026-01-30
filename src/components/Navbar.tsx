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
        h-[80px] lg:h-[clamp(85px,5vw+30px,110px)]
        bg-white/90 backdrop-blur-md shadow-sm
        transition-all duration-500
      "
    >
      <div
        className="
          mx-auto h-full
          max-w-screen-2xl 2xl:max-w-[92vw]
          px-[clamp(1.25rem,3vw,5rem)]
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="flex-shrink-0 -ml-[clamp(0.5rem,1.8vw,3rem)]"
          onClick={closeMenu}
        >
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="
              h-[clamp(28px,1.8rem+1.8vw,56px)]
              w-[clamp(135px,7.5rem+8vw,280px)]
              object-contain transition-all duration-500
            "
          />
        </a>

        {/* Desktop menu */}
        <div
          className="
            hidden lg:flex items-center 
            gap-x-[clamp(1.5rem,3.5vw,5rem)]
            ml-auto
            -mr-[clamp(1.5rem,4vw,8rem)]
          "
        >
          <a
            href="#ai-scale"
            className="
              min-w-[clamp(90px,5vw,130px)]
              font-['Helvetica'] font-normal
              text-[clamp(15px,0.85rem+0.45vw,20px)]
              leading-none tracking-[0.04em] text-black
              hover:text-gray-700 transition-colors
            "
          >
            AI Scale
          </a>

          <a
            href="#calorie-tracking"
            className="
              min-w-[clamp(150px,9vw,240px)]
              font-['Helvetica'] font-normal
              text-[clamp(15px,0.85rem+0.45vw,20px)]
              leading-none tracking-[0.04em] text-black
              hover:text-gray-700 transition-colors
            "
          >
            Calorie Tracking App
          </a>

          <a
            href="#scale"
            className="
              min-w-[clamp(75px,4.5vw,110px)]
              font-['Helvetica'] font-normal
              text-[clamp(15px,0.85rem+0.45vw,20px)]
              leading-none tracking-[0.04em] text-black
              hover:text-gray-700 transition-colors
            "
          >
            Scale
          </a>

          <a
            href="#shop"
            className="
              min-w-[clamp(75px,4.5vw,110px)]
              font-['Helvetica'] font-normal
              text-[clamp(15px,0.85rem+0.45vw,20px)]
              leading-none tracking-[0.04em] text-black
              hover:text-gray-700 transition-colors
            "
          >
            Shop
          </a>
        </div>

        {/* Hamburger / Close button – visible only on mobile/tablet */}
        <button
          className="lg:hidden text-black focus:outline-none -mr-1"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay + links */}
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
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
        >
          {/* Close button inside menu */}
          <div className="flex justify-end p-6">
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="h-8 w-8 text-gray-800" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col items-center gap-10 py-12 px-8 text-center">
            <a
              href="#ai-scale"
              className="text-2xl font-medium text-gray-900 hover:text-[#4AD769] transition-colors"
              onClick={closeMenu}
            >
              AI Scale
            </a>

            <a
              href="#calorie-tracking"
              className="text-2xl font-medium text-gray-900 hover:text-[#4AD769] transition-colors"
              onClick={closeMenu}
            >
              Calorie Tracking App
            </a>

            <a
              href="#scale"
              className="text-2xl font-medium text-gray-900 hover:text-[#4AD769] transition-colors"
              onClick={closeMenu}
            >
              Scale
            </a>

            <a
              href="#shop"
              className="text-2xl font-medium text-gray-900 hover:text-[#4AD769] transition-colors"
              onClick={closeMenu}
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}