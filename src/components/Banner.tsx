// Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const bannerText =
    "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

  return (
    <div
      className="
        w-full

        bg-[#828282]
        absolute
        /* Heights – keeping previous progression */
        h-[87px]
        sm:h-[87px]
        md:h-[87px]
        lg:h-[87px]
        xl:h-[87px]     
        2xl:h-[150px]    


        
        z-10
        
        top-[67px]
        sm:top-[67px]
        md:top-[72px]
        lg:top-[81px]
        xl:top-[81px]
        2xl:top-[140px]


        px-6              
        sm:pt-5 sm:px-8     /* ≥640px: 20px top */
        md:pt-6 md:px-12 md:pb-7   /* ≥768px: 24px top */
        lg:pt-7 lg:px-16 lg:pb-8   /* ≥1024px: 28px top */
        xl:pt-8 xl:px-[180px] xl:pb-8  /* ≥1280px (covers ~1440px): 32px top + your 180px sides */
        2xl:pt-10 2xl:px-48 2xl:pb-10  /* ≥1536px (covers 2550px+): 40px top, wider sides */
        
        /* Gap – if you add more children later */
        flex items-center justify-center
        gap-10
        sm:gap-16
        md:gap-24
        lg:gap-[149px]
        xl:gap-[149px]
        2xl:gap-[180px]
        
        text-center
        text-[#031318]
        opacity-100
        transition-all duration-300
      "
    >
      <p
        className="
          font-['Aeonik_Trial'] font-normal
          text-base                 
          sm:text-[17px]
          md:text-[18px]
          lg:text-[20px]
          xl:text-[20px]
          2xl:text-[34px]            
          
          leading-[100%]
          tracking-[0%]
          font-style-normal
        "
      >
        {bannerText}
      </p>
    </div>
  );
};

export default Banner;