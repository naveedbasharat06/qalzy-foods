// Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const bannerText =
    "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

  return (
    <div
  className="
    w-full
   
    max-w-full bg-[#828282] absolute z-10
    flex items-center justify-center
    text-center text-[#031318] opacity-100
    transition-all duration-300

    

    


    h-[clamp(67px,calc(87px*100vw/1440px),140px)]

    
    top-[clamp(67px,calc(81px*100vw/1440px),140px)]

    
    pl-[clamp(40px,calc(140px*100vw/1440px),230px)]
    pr-[clamp(40px,calc(20px*100vw/1440px),27px)]

    min-[320px]:pl-[22px]   min-[320px]:pr-[22px]
     min-[375px]:pl-[50px]   min-[375px]:pr-[50px]
      min-[425px]:pl-[75px]   min-[425px]:pr-[75px]

   
  "
>
  <p
    className="
      font-['Aeonik Trial'] font-normal leading-[100%] tracking-[0%]
      
      text-[clamp(14px,calc(20px*100vw/1440px),37px)]
    "
  >
    {bannerText}
  </p>
</div>
  );
};

export default Banner;


















  