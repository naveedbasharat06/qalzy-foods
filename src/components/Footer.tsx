// components/Navbar.tsx
// Responsive Navbar with:
// - Logo always visible on the left side, with fixed position and responsive scaling.
// - On screens < 1024px (mobile/tablet): Shows a hamburger button (☰) on the right instead of direct links.
// - When hamburger is clicked: Opens a sidebar menu from the right side (slides in from right).
// - On ≥ 1024px (desktop/large screens): Shows navigation links directly on the right.
// - Sidebar menu: Fixed to the right, full height, with width that can be adjusted; slides in/out with transition.
// - All values converted to px-based arbitrary Tailwind classes (e.g., h-14 becomes h-[56px] assuming base 16px font, where 14*4px=56px in Tailwind spacing scale).
//   - Note: Tailwind's default spacing scale is 0.25rem per unit (e.g., h-14 = 3.5rem = 56px at 16px base).
//   - Modify px values directly in classes like h-[56px] to change sizes/paddings.
// - Detailed comments added throughout for easy modifications (e.g., change widths, heights, colors, transitions).
// - Added optional backdrop for sidebar (semi-transparent overlay) to dim background when menu is open; can be toggled off.
// - Menu closes when clicking a link or outside (via backdrop).

import React, { useState } from 'react';
import logoImg from '../assets/logo.png'; // Adjust path if your logo is in a different location; this imports the image for use in <img src={logoImg}>.

const Navbar: React.FC = () => {
  // State for controlling the sidebar menu open/close.
  // Modify: Change initial state if you want menu open by default (e.g., useState(true)).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close.
  // Modify: Add more logic here if needed, e.g., analytics tracking on toggle.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // List of navigation items (array of objects with label and href).
  // Modify: Add/remove items here, e.g., add { label: 'Blog', href: '/blog' }.
  // Use real hrefs for routing (e.g., with react-router <Link> instead of <a>).
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    // Main nav element: Fixed at top, full width, with background and shadow.
    // Height scales responsively in px: Mobile 56px, sm 64px, md 72px, lg 80px, xl 96px, 2xl 112px.
    // Modify heights: Change values like h-[56px] to h-[64px] for taller navbar on mobile.
    // Add custom bg: e.g., bg-blue-500 instead of bg-white.
    // Transition: Smooth height changes on resize (duration-300 = 300ms).
    <nav className="
      fixed top-0 left-0 z-50 w-full
      bg-white shadow-md
      h-[56px] sm:h-[64px] md:h-[72px] lg:h-[80px] xl:h-[81px] 2xl:h-[112px]
      transition-all duration-300
    ">
      // Inner container: Flex layout for logo left + menu/button right, centered with max-width.
      // Padding in px: Mobile 16px sides, scales up to 64px on 2xl.
      // Modify padding: Change px-[16px] to px-[24px] for more side space on mobile.
      // max-w-[2560px]: Caps width for ultra-wide screens (e.g., 2550px+); change to max-w-[3440px] for wider.
      <div className="
        flex items-center justify-between
        h-full
        mx-auto
        px-[16px] sm:px-[24px] md:px-[32px] lg:px-[60px] xl:px-[60px] 2xl:px-[64px]
        max-w-[2560px]
      ">
        // Logo container: Flex-shrink-0 to prevent squeezing.
        // Modify: Add ml-[8px] for extra left margin if needed.
        <div className="flex-shrink-0">
          // Logo image: Scales height in px (32px mobile to 64px 2xl), width auto.
          // max-h-[120px]: Caps max height; change to [140px] if logo can be larger.
          // object-contain: Keeps aspect ratio; change to object-cover if needed.
          // Transition: Smooth size change on resize.
          // Modify sizes: e.g., h-[32px] to h-[40px] for larger base.
          // style: Added imageRendering for crisp edges on scale; remove if not needed.
          <img
            src={logoImg}
            alt="Logo"
            className="
              h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[56px] 2xl:h-[64px]
              max-h-[120px]
              w-auto object-contain
              transition-all duration-300
            "
          />
        </div>

        // Desktop menu: Hidden below lg (1024px), flex row on lg+.
        // Spacing in px between links: 24px lg, 32px xl, 48px 2xl.
        // Modify spacing: Change space-x-[24px] to space-x-[32px] for wider gaps.
        <div className="hidden lg:flex items-center space-x-[24px] xl:space-x-[32px] 2xl:space-x-[48px]">
          // Map over navItems to render links.
          // Modify: Change <a> to <Link> from react-router if using routing.
          {navItems.map((item) => (
            <a
              key={item.label} // Unique key for React list rendering.
              href={item.href} // Link destination; modify for real URLs.
              className="
                text-gray-800 font-medium
                text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] // Font sizes in px (base 16px to 24px 2xl).
                hover:text-blue-600 // Hover color; change to hover:text-red-600.
                transition-colors duration-200 // Color transition 200ms; adjust duration.
              "
            >
              {item.label} // Link text.
            </a>
          ))}
        </div>

        // Mobile/Tablet hamburger button: Visible below lg (1024px).
        // Modify: Change p-[8px] to p-[12px] for larger click area.
        // Colors: text-gray-700 hover:text-blue-600; adjust as needed.
        <div className="lg:hidden">
          <button
            type="button" // Button type; no form submission.
            onClick={toggleMenu} // Calls toggle function on click.
            className="p-[8px] rounded-md text-gray-700 hover:text-blue-600 focus:outline-none" // Styles: Padding 8px, rounded corners.
            aria-label="Toggle menu" // Accessibility label.
          >
            // Hamburger SVG icon: Changes to X when open.
            // Size: 32px; change h-[32px] w-[32px] to h-[40px] w-[40px] for larger icon.
            // Stroke width 2px; modify strokeWidth={2} for thicker lines.
            <svg
              className="h-[32px] w-[32px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round" // Rounded line ends.
                strokeLinejoin="round" // Rounded joins.
                strokeWidth={2} // Line thickness.
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} // Path data: X or bars.
              />
            </svg>
          </button>
        </div>
      </div>

      // Mobile sidebar menu: Shown when isMenuOpen is true, hidden on lg+.
      // This is the sidebar that slides in from the right.
      // Position: Fixed top-0 right-0, full height (h-full), width 256px (adjustable).
      // Transform: translate-x-full (hidden off-screen right), translate-x-0 (open).
      // Transition: 300ms ease-in-out for smooth slide.
      // Modify width: Change w-[256px] to w-[300px] for wider sidebar.
      // bg-white: Background; change to bg-gray-100.
      // z-40: Below navbar z-50; adjust if overlapping issues.
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 z-40 h-full w-[256px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
             style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }} // Inline style for transform; can use class like translate-x-0 or translate-x-full.
        >
          // Inner content: Padding top from navbar height (pt-[56px] mobile, scales with navbar).
          // Flex column for vertical links, space-y 16px.
          // Modify padding: Change pt-[56px] to pt-[64px] if navbar height changes.
          // space-y-[16px]: Gap between links; increase to [24px].
          <div className="
            px-[16px] pt-[56px] sm:pt-[64px] md:pt-[72px] pb-[16px] // Padding: 16px sides/bottom, top matches navbar.
            flex flex-col space-y-[16px]
          ">
            {navItems.map((item) => (
              <a
                key={item.label} // Unique key.
                href={item.href} // Link href.
                className="
                  text-gray-800 font-medium
                  text-[18px] py-[8px] // Font 18px, vertical padding 8px for touch targets.
                  hover:text-blue-600
                  transition-colors duration-200
                "
                onClick={() => setIsMenuOpen(false)} // Close menu on link click.
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      // Optional backdrop: Semi-transparent overlay when menu open.
      // Covers full screen, closes menu on click.
      // Opacity 50%; change bg-black/50 to bg-black/30 for lighter.
      // Modify: Remove this div if no backdrop needed.
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black/50" // Fixed full screen, z below sidebar.
          onClick={() => setIsMenuOpen(false)} // Click anywhere to close.
        />
      )}
    </nav>
  );
};

export default Navbar;