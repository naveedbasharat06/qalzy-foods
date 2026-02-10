// Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const bannerText =
    "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

  return (
    <div
  className="
    w-full max-w-full bg-[#828282] absolute z-10
    flex items-center justify-center
    text-center text-[#031318] opacity-100
    transition-all duration-300

   

    h-[clamp(67px,calc(87px*100vw/1440px),140px)]

    /* Top position */
    top-[clamp(67px,calc(81px*100vw/1440px),140px)]

    /* Horizontal Padding */
    pl-[clamp(18px,calc(140px*100vw/1440px),220px)]
    pr-[clamp(12px,calc(20px*100vw/1440px),30px)]

    /* Gap */
    gap-[clamp(40px,calc(96px*100vw/1440px),96px)]

    /* Max width cap */
    max-w-[2560px]
  "
>
  <p
    className="
      font-['Aeonik Trial'] font-normal leading-[100%] tracking-[0%]
      text-[clamp(16px,calc(20px*100vw/1440px),36px)]
    "
  >
    {bannerText}
  </p>
</div>
  );
};

export default Banner;


















  