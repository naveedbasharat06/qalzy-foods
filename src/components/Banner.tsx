// src/components/FoodLoggingBanner.tsx
import React from 'react';

export default function FoodLoggingBanner() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Desktop & large screens (1024px+) */}
      <div className="hidden lg:flex justify-center">
        <div
          className="
            w-full              
            h-[87px]                 
            bg-[#828282]
            mt-[81px]               
            mx-auto
            flex items-center justify-center
            relative
                    
          "
          style={{
            paddingTop: '32px',
            paddingRight: '180px',
            paddingBottom: '32px',
            paddingLeft: '180px',
          }}
        >
          <h2
            className="
              font-['Aeonik_Trial','DM_Sans',system-ui,sans-serif]
              font-normal
              text-[20px]                       // base at 1440px
              2xl:text-[clamp(20px,1.2vw+10px,28px)]   // increases smoothly above ~1440px
              leading-[100%]                    // line-height 100%
              tracking-[0%]
              text-[#0E1318]
              text-center
              max-w-[892px]                     // text width at 1440px
              2xl:max-w-[clamp(892px,55vw,1200px)] // wider text container on ultra-wide
              mx-auto
            "
          >
            Use AI to identify and record the food you weigh and log calories automatically.
            World's First Launch!
          </h2>
        </div>
      </div>

      {/* Mobile & tablet view (up to 1023px) */}
      <div className="lg:hidden">
        <div
          className="
            w-full
            h-[85px]                  // height 87px
            bg-[#828282]
            mt-[70px]                // top: 100px
            flex items-center justify-center
            relative
          "
          style={{
            paddingTop: '15px',
            paddingRight: 'clamp(20px, 15vw, 180px)',
            paddingBottom: '23px',
            paddingLeft: 'clamp(20px, 15vw, 180px)',
          }}
        >
          <h2
            className="
              font-['Aeonik_Trial','DM_Sans',system-ui,sans-serif]
              font-normal
              text-[16px]               
              leading-[100%]
              tracking-[0%]
              text-[#0E1318]
              text-center
              max-w-[318px]            
              mx-auto
            "
          >
            Use AI to identify and record the food you weigh and log calories automatically.
            World's First Launch!
          </h2>
        </div>
      </div>
    </div>
  );
}