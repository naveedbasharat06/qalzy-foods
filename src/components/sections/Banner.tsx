// Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const bannerText =
    "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

  return (
    <div
  className="
    w-full

    min-w-[372px]
   

   
    

 


    max-w-full bg-[#828282] absolute z-10
    flex items-center justify-center
    text-center text-[#031318] opacity-100
    transition-all duration-300
    

    


    h-[clamp(87px,calc(87px*100vw/1440px),140px)]

    
    top-[clamp(67px,calc(81px*100vw/1440px),140px)]

    
    pl-[clamp(30px,calc(170px*100vw/1440px),260px)]
    pr-[clamp(30px,calc(20px*100vw/1440px),230px)]


    min-[320px]:pl-[30px]   min-[320px]:pr-[30px]
     min-[375px]:pl-[38px]   min-[375px]:pr-[38px]
     min-[395px]:pl-[50px] min-[395px]:pr-[50px]
min-[405px]:pl-[35px] min-[405px]:pr-[35px]
      min-[425px]:pl-[45px]   min-[425px]:pr-[45px]



      
       min-[1024px]:pl-[130px]
      min-[1200px]:pl-[150px]
       min-[1400px]:pl-[170px]
      min-[1440px]:pl-[170px]
       min-[1920px]:pl-[220px]
      
 min-[2560px]:pl-[260px]
      

   
  "
>
  <p
  className="
    font-['Aeonik Trial'] font-normal
    leading-[110%]               ← change or remove this
    tracking-[0%]
    
  min-[1440px]:text-[clamp(16px,calc(20px*100vw/1440px),37px)]
   min-[395px]:text-[16px]
  min-[405px]:text-[18px]
  min-[1024px]:text-[14.5px]
  min-[1100px]:text-[15.5px]
  min-[1200px]:text-[17px]
  min-[1300px]:text-[19px]
  min-[1400px]:text-[19.5px]
   

  min-[425px]:leading-[clamp(1.35, calc(1.2 + 0.0003*100vw), 1.65)]
    
    
    word-spacing-[0.85em]             /* ← this adds space between words */
    text-balancev

                
    
      "
>
  {bannerText}
</p>
</div>
  );
};

export default Banner;


















  