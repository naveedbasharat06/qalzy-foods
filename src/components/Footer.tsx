// src/components/FooterImage.tsx
import React from 'react';
import footerImage from '../assets/MacBook Pro 16_ - 25.png';  
// ↑ adjust path/alias if needed (e.g. '../assets/...' or '@/assets/...')

const FooterImage: React.FC = () => {
  return (
    <footer
      className="
        relative w-full 
        bg-gray-900 
        overflow-hidden
      "
      style={{
        width: '1550px',
        height: '600px',
        maxWidth: '100%',           // ← prevents horizontal scroll on mobile/tablet
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* The image fills the entire footer area */}
      <img
        src={footerImage}
        alt="Footer background - MacBook Pro mockup"
        className="absolute inset-0 h-full w-full object-cover"
        // Improves loading priority for large hero-like footer images
        loading="eager"
        // fetchpriority="high"   // ← uncomment if this image is critical
      />

      {/* Optional: subtle overlay if the image is too bright/busy */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Optional content overlay (text, links, copyright, etc.) */}
      
  
    </footer>
  );
};

export default FooterImage;