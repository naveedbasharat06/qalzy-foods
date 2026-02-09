// Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  const bannerText =
    "Use AI to identify and record the food you weigh and log calories automatically. World's First Launch!";

  return (
    <div
      className="
        w-full
        max-w-full
        bg-[#828282]
        absolute


        /* Heights – keeping previous progression */
         h-[67px] min-[320px]:h-[87px] min-[768px]:h-[87px] min-[1024px]:h-[87px] 
        min-[1220px]:h-[87px] min-[1440px]:h-[87px] min-[1600px]:h-[100px] 
        min-[1720px]:h-[105px] min-[1850px]:h-[110px] min-[1920px]:h-[120px]
        min-[2150px]:h-[130px] min-[2300px]:h-[135px] min-[2450px]:h-[138px]
        min-[2560px]:h-[140px]
      


        
        z-10
        
        top-[67px]
        min-[360px]:top-[67px]
          min-[768px]:top-[70px] min-[1024px]:top-[70px]
          min-[1220px]:top-[77px] min-[1440px]:top-[81px] min-[1600px]:top-[100px]
          min-[1720px]:top-[105px] min-[1850px]:top-[110px] min-[1920px]:top-[120px]
          min-[2150px]:top-[130px] min-[2300px]:top-[135px] min-[2450px]:top-[138px]
          min-[2560px]:top-[140px]
       




          pl-[18px] pr-[12px]
          min-[320px]:pl-[18px] min-[320px]:pr-[12px]
          min-[768px]:pl-[40px] min-[768px]:pr-[30px]
          min-[1024px]:pl-[43px] min-[1024px]:pr-[32px]
          min-[1220px]:pl-[55px] min-[1220px]:pr-[40px]
          min-[1440px]:pl-[140px] min-[1440px]:pr-[20px]
          min-[1600px]:pl-[150px] min-[1600px]:pr-[21px]
          min-[1720px]:pl-[160px] min-[1720px]:pr-[22px]
          min-[1850px]:pl-[170px] min-[1850px]:pr-[22px]
          min-[1920px]:pl-[180px] min-[1920px]:pr-[23px]
          min-[2150px]:pl-[190px] min-[2150px]:pr-[24px]
          min-[2300px]:pl-[200px] min-[2300px]:pr-[26px]
          min-[2450px]:pl-[210px] min-[2450px]:pr-[28px]
          min-[2560px]:pl-[220px] min-[2560px]:pr-[30px]
          max-w-[2560px]

        /* Gap – if you add more children later */
        flex items-center justify-center
        gap-10
        min-[360px]:gap-16
        min-[768px]:gap-20 min-[1024px]:gap-20
          min-[1220px]:gap-24 min-[1440px]:gap-24 min-[1600px]:gap-24
          min-[1720px]:gap-24 min-[1850px]:gap-24 min-[1920px]:gap-24
          min-[2150px]:gap-24 min-[2300px]:gap-24 min-[2450px]:gap-24
          min-[2560px]:gap-24
       
        
        text-center
        text-[#031318]
        opacity-100
        transition-all duration-300
      "
    >
      <p
        className="
          font-['Aeonik Trial'] font-normal
          text-base 
          
          
          min-[360px]:text-[17px]

            min-[768px]:text-[18px] min-[1024px]:text-[18px]
            min-[1220px]:text-[19px] min-[1440px]:text-[20px] min-[1600px]:text-[22px]
            min-[1720px]:text-[24px] min-[1850px]:text-[26px] min-[1920px]:text-[28px]
            min-[2150px]:text-[30px] min-[2300px]:text-[32px] min-[2450px]:text-[34px]
            min-[2560px]:text-[36px]
                      
          
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


















  