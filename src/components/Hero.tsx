// HeroSection.tsx
import React from 'react';
import heroImage from '../assets/rectangle 1.png'; // your image file

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-gray-100               // fallback color
        
        /* Minimum section heights – adjusted to respect image size */
        min-h-[380px]             // very small mobile
        sm:min-h-[420px]
        md:min-h-[500px]
        lg:min-h-[713px]          // matches your image height at lg+
        xl:min-h-[713px]
        2xl:min-h-[820px]         // extra room on huge screens
        
        /* ────────────────────────────────────────────────
           Top padding = distance from top of THIS section
           Goal: image starts right below banner (170px tall)
        ──────────────────────────────────────────────── */
        pt-[170px]                // base / mobile (<640px)
        sm:pt-[170px]             // ≥640px
        md:pt-[170px]             // ≥768px – tablets
        lg:pt-[170px]             // ≥1024px – most desktops & 1440px
        xl:pt-[170px]             // ≥1280px
        2xl:pt-[170px]            // ≥1536px – very large / ultrawide
        
        /* If navbar + banner total height changes per breakpoint,
           you can make pt- different like this example:
        pt-[140px] md:pt-[160px] lg:pt-[170px] 2xl:pt-[190px]
        */
      "
    >
      
      <div className="absolute inset-0  pt-[156px]                // base / mobile (<640px)
        sm:pt-[160px]             // ≥640px
        md:pt-[160px]             // ≥768px – tablets
        lg:pt-[167px]             // ≥1024px – most desktops & 1440px
        xl:pt-[167px]             // ≥1280px
        2xl:pt-[170px]  ">
       
       
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="
             inset-0


            w-full h-full
            sm:w-full sm:h-full
            lg:w-1250 lg:h-713
            xl:w-713 xl:h-713

  

            object-cover
           
            transition-transform duration-700
            hover:scale-105
            
            /* Force your exact size from lg onwards + center it */
            
            
            
            
            lg:w-[1440px] lg:h-[713px]
           
           
            
            xl:w-[1440px] xl:h-[713px]
            2xl:w-[1440px] 2xl:h-[713px]
          "
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />
      </div>







      {/* Hero Content */}


      <div
  className="
    relative z-10
    container mx-auto
    px-5              // mobile sides
    sm:px-8
    md:px-12
    lg:px-16
    xl:px-20
    2xl:px-24
    
    /* ────────────────────────────────────────────────
       Vertical spacing inside hero content area
       175px from top + 263px from bottom at ~1440px
    ──────────────────────────────────────────────── */
    pt-[100px]        // base/mobile – smaller
    sm:pt-[120px]
    md:pt-[140px]
    lg:pt-[160px]
    xl:pt-[175px]     // your exact 175px at ≥1280px (~1440px typical)
    2xl:pt-[200px]    // more room on ultra-wide
    
    pb-[140px]        // base/mobile
    sm:pb-[160px]
    md:pb-[200px]
    lg:pb-[220px]
    xl:pb-[150px]     // your exact 263px from bottom at ≥1280px
    2xl:pb-[300px]    // generous on very large screens
    
    flex flex-col items-center justify-center
    text-center text-white
    h-full

    pr-[100px]
    sm:pl-[100px]
    md:pl-[100px]
    lg:pl-[20px]
    xl:pr-[500px]
    2xl:pl-[100px]




  "
>
  <h1
    className="
      font-['Inter'] font-normal           // weight 400 = regular
      text-[32px] leading-none             // mobile base
      sm:text-[38px]
      md:text-[42px]
      lg:text-[46px]
      xl:text-[48px]                       // your exact 48px at ≥1280px
      2xl:text-[56px]                      // scales nicely larger
      
      tracking-normal                      // letter-spacing: 0%
      leading-none                         // line-height: 100%
      
      max-w-4xl mx-auto
      drop-shadow-xl
      mb-6 md:mb-8 lg:mb-10
    "
  >
    The only kitchen scale that
    <br className="hidden md:block" />
    auto-tracks calories
  </h1>

  <p
    className="
      font-['Inter'] font-light            // or font-normal – adjust as needed
      text-base                            // ~16px mobile
      sm:text-lg
      md:text-xl                           // ~20px tablet
      lg:text-2xl                          // ~24–26px
      xl:text-[28px]                       // strong but readable at 1440px
      2xl:text-[32px]
      
      tracking-normal
      leading-relaxed                      // or leading-[120%] – tell me exact %
      max-w-3xl mx-auto
      drop-shadow-lg
      mb-8 md:mb-10 lg:mb-12 xl:mb-14
    "
  >
    Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id. Scelerisque in et molestie eget in auctor bibendum feugiat.
    
  </p>


  <h1></h1>

  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
    <button
      className="
        bg-green-600 hover:bg-green-700 active:bg-green-800
        text-white font-medium
        px-8 py-4 rounded-full             // or rounded-xl – adjust
        text-base sm:text-lg md:text-xl     // button text size
        min-w-[180px]                       // better touch/click area
        transition-all duration-300
        shadow-lg hover:shadow-xl
        hover:-translate-y-1
      "
    >
      PREORDER now
    </button>

   
  </div>
</div>
      


      



    </section>
  );
};

export default HeroSection;