// components/Hero.tsx
import React from 'react';
 import heroImage from '../assets/rectangle 1.png';  // ← adjust path if needed
import starstag from '../assets/stars-herotag.png';  // ← adjust path if needed
const Hero = () => {
  return (
    <div 
      className={`
      
      
        pt-[154px]
        min-[360px]:pt-[154px]
        min-[768px]:pt-[157px]
        min-[1024px]:pt-[157px]
        min-[1280px]:pt-[164px]
        min-[1440px]:pt-[168px]
        min-[1600px]:pt-[200px]
        min-[1720px]:pt-[205px]
        min-[1850px]:pt-[210px]
        min-[1920px]:pt-[240px]
        min-[2150px]:pt-[260px]
        min-[2300px]:pt-[270px]
        min-[2450px]:pt-[273px]
        min-[2560px]:pt-[280px]
      `}
    >

    <div>

       <div className='   w-full absolute 
       max-w-full
      
        min-[360px]:h-[178px]
        min-[768px]:h-[380px]
        min-[1024px]:h-[550px]
        min-[1130px]:h-[590px]
        min-[1280px]:h-[633px]
        min-[1440px]:h-[713px]
        min-[1600px]:h-[792px]
        min-[1720px]:h-[851px]
        min-[1850px]:h-[915px]
        min-[1920px]:h-[950px]
        min-[2150px]:h-[1065px]
        min-[2300px]:h-[1138px]
        min-[2450px]:h-[1212px]
        min-[2560px]:h-[1268px]  /'>


<div className="">
  <div 
    className={`
     
    `}
  >
    <img
      src={heroImage}
      // src="../assets/rectangle 1.png"
      alt="Hero background"
      className="w-full h-full object-cover"
    
    />
  </div>
</div>
</div>










{/* Text/content overlay */}

<div
  className={`
    relative z-10 mx-auto px-5



    /* Vertical padding - top (hero content vertical position) */
    min-[360px]:pt-[20px]     min-[360px]:pb-[10px]
    min-[768px]:pt-[20px]     min-[768px]:pb-[20px]
    min-[1024px]:pt-[130px]    min-[1024px]:pb-[20px]
    min-[1150px]:pt-[147px]   min-[1280px]:pb-[14px]
    min-[1280px]:pt-[165px]   min-[1280px]:pb-[14px]
    min-[1350px]:pt-[175px]   min-[1440px]:pb-[16px]  /* perfect – keep */
    min-[1440px]:pt-[178px]                    /* perfect – keep */
    min-[1600px]:pt-[190px]
    min-[1720px]:pt-[220px]
    min-[1850px]:pt-[245px]
    min-[1920px]:pt-[260px]
    min-[2020px]:pt-[270px]
    min-[2150px]:pt-[280px]
    min-[2250px]:pt-[290px]
    min-[2350px]:pt-[300px]
    min-[2450px]:pt-[306px]
    min-[2560px]:pt-[316px]  
    
                                             /* ~2.6× from 1440px – feels balanced on ultra-wide */

    /* Bottom padding */
    min-[1150px]:pb-[160px]
    min-[1280px]:pb-[165px] 
    min-[1350px]:pb-[170px]
    min-[1440px]:pb-[175px] 
    min-[1600px]:pb-[185px]
    min-[1720px]:pb-[220px]
    min-[1850px]:pb-[250px]
    min-[1920px]:pb-[270px]
    min-[2150px]:pb-[280px]
    min-[2250px]:pb:[288px]
    min-[2300px]:pb-[296px]
    min-[2450px]:pb-[306px]
    min-[2560px]:pb-[316px] 
    
    
    
    
    
    
    
    
    


    min-[1024px]:px-[110px]
    min-[1150px]:px-[120px]
min-[1280px]:px-[130px]     
min-[1350px]:px-[135px]              /* very small horizontal padding on mobile */
    min-[1440px]:px-[140px]                    /* perfect – keep */
    min-[1600px]:px-[150px]
    min-[1720px]:px-[170px]
    min-[1850px]:px-[190px]
    min-[1920px]:px-[200px]
    min-[2020px]:px-[210px]
    min-[2150px]:px-[220px]
    min-[2250px]:px-[225px]
    min-[2350px]:px-[230px]
    min-[2450px]:px-[240px]
    min-[2560px]:px-[250px]


    /* More precise left/right control (old pl/pr) – scaled up */
    pl-[18px] pr-[8px]
    min-[360px]:pl-[18px]    min-[360px]:pr-[8px]
    min-[768px]:pl-[40px]    min-[768px]:pr-[10px]
    min-[1024px]:pl-[85px]   min-[1024px]:pr-[10px]
    min-[1150px]:pl-[90px]  min-[1150px]:pr-[10px]
    min-[1280px]:pl-[100px]   min-[1280px]:pr-[10px]
    min-[1350px]:pl-[110px]  min-[1350px]:pr-[10px]     /* very small horizontal padding on mobile */
    min-[1440px]:pl-[110px]  min-[1440px]:pr-[10px]     /* perfect – keep */
    min-[1600px]:pl-[118px]  min-[1600px]:pr-[16px]
    min-[1720px]:pl-[140px]  min-[1720px]:pr-[16px]
    min-[1850px]:pl-[150px]  min-[1850px]:pr-[16px]
    min-[1920px]:pl-[160px]  min-[1920px]:pr-[16px]
    min-[2020px]:pl-[170px]  min-[2020px]:pr-[16px]
    min-[2150px]:pl-[175px]  min-[2150px]:pr-[16px]
    min-[2250px]:pl-[180px]  min-[2250px]:pr-[16px]
    min-[2350px]:pl-[185px]  min-[2350px]:pr-[16px]
    min-[2450px]:pl-[190px]  min-[2450px]:pr-[16px]
    min-[2560px]:pl-[200px]  min-[2560px]:pr-[17px]

    max-w-[2560px]
   
  `}
>

  <div
    className={`
      text-white drop-shadow-lg
      height-full

      max-w-[90%]               min-[360px]:max-w-[80%]
      min-[768px]:max-w-[65%]

      min-[1024px]:max-w-[780px]
      min-[1150px]:max-w-[800px]
      min-[1280px]:max-w-[800px]
      min-[1350px]:max-w-[800px]              /* very small horizontal padding on mobile */
      min-[1440px]:max-w-[815px]               /* perfect – keep */
      min-[1600px]:max-w-[835px]
      min-[1720px]:max-w-[1020px]
      min-[1850px]:max-w-[1050px]
      min-[1920px]:max-w-[1100px]
      min-[2020px]:max-w-[1200px]
      min-[2150px]:max-w-[1300px]
      min-[2250px]:max-w-[1350px]
      min-[2300px]:max-w-[1410px]
      min-[2450px]:max-w-[1430px]
      min-[2560px]:max-w-[1450px]


    `}
  >
    {/* Headline */}
    <h1
      className={`
        font-['Inter'] font-light
        tracking-normal leading-none
        text-[32px]
        min-[360px]:text-[38px]
        min-[768px]:text-[38px]
        min-[1024px]:text-[36px]
        min-[1150px]:text-[40px]
        min-[1280px]:text-[50px]
        min-[1350px]:text-[50px]              /* very small horizontal padding on mobile */
        min-[1440px]:text-[55px]                 /* perfect – keep */
        min-[1600px]:text-[58px]
        min-[1720px]:text-[62px]
        min-[1850px]:text-[66px]
        min-[1920px]:text-[70px]
        min-[2020px]:text-[72px]
        min-[2150px]:text-[76px]
        min-[2250px]:text-[78px]
        min-[2350px]:text-[80px]
        min-[2450px]:text-[84px]
        min-[2560px]:text-[88px]               // ~2.1× from 1440px

     
       min-[1024px]:mb-[12px]
        min-[1280px]:mb-[14px]
        min-[1280px]:mb-[16px] 
        min-[1350px]:mb-[16px]              /* very small horizontal padding on mobile */
        min-[1440px]:mb-[20px]                 
        min-[1600px]:mb-[24px]
        min-[1720px]:mb-[28px]
        min-[1920px]:mb-[32px]
        min-[2020px]:mb-[34px]
        min-[2150px]:mb-[34px]
        min-[2250px]:mb:[34px]
        min-[2350px]:mb-[35px]
         min-[2450px]:mb-[37px]
        min-[2560px]:mb-[39px]


      `}
    >
      The only kitchen scale that <br /> auto-tracks calories
    </h1>

    {/* Paragraph */}
    <p
      className={`s
        font-['Helvetica'] 
        tracking-normal leading-relaxed
        drop-shadow-lg
        text-base
        
        min-[768px]:text-lg
        min-[1024px]:text-[15px]
     
        min-[1100px]:text-[16px]
        min-[1280px]:text-[17px]
        min-[1350px]:text-[18px]
        min-[1440px]:text-[20px]              
        min-[1600px]:text-[22px]
        min-[1720px]:text-[24px]
        min-[1850px]:text-[26px]
        min-[1920px]:text-[28px]
        min-[2020px]:text-[31px]
        min-[2150px]:text-[31px]
        min-[2300px]:text-[32px]
        min-[2450px]:text-[34px]
        min-[2560px]:text-[35.5px]

        

        max-w-[90%]
        min-[360px]:max-w-[80%]
        min-[768px]:max-w-[65%]
        min-[1024px]:max-w-[570px]
        min-[1150px]:max-w-[650px]
        min-[1280px]:max-w-[700px]
      
        min-[1350px]:max-w-[800px]
        min-[1440px]:max-w-[850px]             
        min-[1600px]:max-w-[950px]
        min-[1720px]:max-w-[1970px]
        min-[1850px]:max-w-[1000px]
        min-[1920px]:max-w-[1050px9
        min-[2020px]:max-w-[1120px]
        min-[2150px]:max-w-[1150px]
        min-[2250px]:max-w-[1170px]
        min-[2350px]:max-w-[1200px]
        min-[2450px]:max-w-[1300px]
        min-[2560px]:max-w-[1410px]
      `}
    >
      Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
      Scelerisque in et molestie eget in auctor bibendum feugiat.
    </p>

    {/* Discount line */}
    <h2
      className={`
        font-['Helvetica'] 
        tracking-normal leading-none
        text-[32px]
        min-[360px]:text-[38px]
        min-[768px]:text-[32px]
        min-[1024px]:text-[29px]
        min-[1150px]:text-[31px]
        min-[1280px]:text-[35px]
        min-[1440px]:text-[36px]                /* perfect – keep */
        min-[1600px]:text-[38px]
        min-[1720px]:text-[40px]
        min-[1850px]:text-[42px]
        min-[1920px]:text-[46px]
        min-[2020px]:text-[48px]
        min-[2150px]:text-[52px]
        min-[2250px]:text-[54px]
        min-[2350px]:text-[56px]
        min-[2450px]:text-[60px]
        min-[2560px]:text-[64px]

        drop-shadow-xl

        min-[1024px]:mb-[12px] min-[1024px]:mt-[12px]
        min-[1150px]:mb-[14px] min-[1150px]:mt-[14px]
        min-[1280px]:mb-[16px] min-[1280px]:mt-[16px]
        min-[1350px]:mb-[16px] min-[1350px]:mt-[16px]              /* very small horizontal padding on mobile */
        min-[1440px]:mb-[16px] min-[1440px]:mt-[16px]   /* perfect – keep */
        min-[1600px]:mb-[20px] min-[1600px]:mt-[20px]
        min-[1920px]:mb-[26px] min-[1920px]:mt-[20px]
        min-[2020px]:mb-[28px] min-[2020px]:mt-[20px]
        min-[2150px]:mb-[29px] min-[2150px]:mt-[20.5px]
        min-[2350px]:mb-[30px] min-[2350px]:mt-[21px]
        min-[2350px]:mb-[30px] min-[2350px]:mt-[21px]
        min-[2450px]:mb-[30px] min-[2450px]:mt-[22px]
        min-[2560px]:mb-[32px] min-[2560px]:mt-[22px]



        max-w-[90%]
        min-[360px]:max-w-[80%]
        min-[768px]:max-w-[65%]
        min-[1024px]:max-w-[570px]
        min-[1150px]:max-w-[650px]
        min-[1280px]:max-w-[700px]
        min-[1350px]:max-w-[750px]
        min-[1440px]:max-w-[790px]              /* perfect – keep */
        min-[1600px]:max-w-[880px]
        min-[1920px]:max-w-[980px]
          min-[2020px]:max-w-[990px]
          min-[2150px]:max-w-[1100px]
          min-[2250px]:max-w-[1150px]
          min-[2350px]:max-w-[1200px]
          min-[2450px]:max-w-[1300px]
        min-[2560px]:max-w-[1400px]  
          


      `}
    >
      Get 50% discount
    </h2>









    {/* Early bird count */}

   {/* Stars / rating tag image - perfect size at 1440px */}
<div 
  className={`
    flex items-center


    min-[1024px]:mb-[16px] min-[1024px]:mt-[16px]
    min-[1150px]:mb-[17px]
    min-[1280px]:mb-[16px] min-[1280px]:mt-[16px]
    min-[1440px]:mb-[32px] min-[1440px]:mt-[16px]
    min-[1600px]:mb-[20px]  min-[1600px]:mt-[20px]
    min-[1720px]:mb-[22px]  min-[1720px]:mt-[22px]
    min-[1850px]:mb-[24px]  min-[1850px]:mt-[24px]
    min-[1920px]:mb-[26px]  min-[1920px]:mt-[24px]
    min-[2020px]:mb-[28px]  min-[2020px]:mt-[26px]
    min-[2150px]:mb-[30px]  min-[2150px]:mt-[28px]
     min-[2250px]:mb-[32px]  min-[2250px]:mt-[30px]
    min-[2350px]:mb-[34px]  min-[2350px]:mt-[32px]
    min-[2450px]:mb-[38px]  min-[2450px]:mt-[36px]
    min-[2560px]:mb-[40px]  min-[2560px]:mt-[38px]

    max-w-[90%]

    min-[360px]:max-w-[400px]

    min-[768px]:max-w-[500px]
    min-[1024px]:max-w-[600px]
    min-[1280px]:max-w-[700px]
    
    min-[1440px]:max-w-[790px]
    min-[1600px]:max-w-[950px]
      min-[1920px]:max-w-[1050px]
      min-[2020px]:max-w-[1100px]
      min-[2150px]:max-w-[1150px]
      min-[2250px]:max-w-[11560px]
      min-[2350px]:max-w-[1170px]
      min-[2450px]:max-w-[1200px]
    min-[2560px]:max-w-[1400px]   // ← updated to match your latest snippet
  `}
>
  <img
    src={starstag}
    alt="Rating stars"
    width={392}
    height={24}
    className={`
      w-[240px] h-auto               /* smaller on mobile/tablet */
      min-[768px]:w-[280px]
      min-[1024px]:w-[320px]
      min-[1150px]:w-[320px]
      min-[1280px]:w-[360px]
      min-[1440px]:w-[392px]         /* ← your exact 1440px size */
      min-[1600px]:w-[440px]         /* ~1.12× */
      min-[1720px]:w-[500px]
      min-[1850px]:w-[550px]
      min-[1920px]:w-[580px]
      min-[2020px]:w-[600px]
      min-[2150px]:w-[610px]
      min-[2300px]:w-[635px]
      min-[2450px]:w-[665px]
      min-[2560px]:w-[695px]         /* ~1.94× from 1440px */
      
      object-contain
      drop-shadow-md
    `}
    style={{ opacity: 1 }}           // explicit if you ever want to animate it later
  />
</div>








    {/* Button – kept fixed size as per your spec */}

    <div className="flex flex-col gap-[10px]">
      <button
        className={`


       drop-shadow-[0_4px_6px_#4AD76999]

          font-['Inter700'] 
          
          bg-[#4AD769]
          hover:bg-green-700
         
          text-white
        
        

          rounded-[24px]

min-[1024px]:rounded-[23px]
min-[1150px]:rounded-[24px]
min-[1280px]:rounded-[26px]
          min-[1440px]:rounded-[24px] 
          min-[1600px]:rounded-[28px]
          min-[1720px]:rounded-[32px]
          min-[1850px]:rounded-[36px]
          min-[1920px]:rounded-[36px]
          min-[2020px]:rounded-[38px]
          min-[2150px]:rounded-[36px]
          min-[2250px]:rounded-[37px]
          min-[2350px]:rounded-[38px]
          min-[2450px]:rounded-[44px]
          min-[2560px]:rounded-[48px]

          
          w-[230px]

          min-[1024px]:w-[220px]
          min-[1150px]:w-[245px]
          min-[1280px]:w-[255px]
          min-[1440px]:w-[263px]  /* perfect – keep */
          min-[1600px]:w-[280px]
          min-[1720px]:w-[300px]
          min-[1850px]:w-[320px]
          min-[1920px]:w-[350px]
          min-[2020px]:w-[360px]
          min-[2150px]:w-[380px]
          min-[2250px]:w-[385px]
          min-[2350px]:w-[435px]
          min-[2450px]:w-[455px]
          min-[2560px]:w-[467px]





          h-[56px] pt-4


         min-[1028]:h-[45px] min-[1028px]:pt-2
          min-[1280px]:h-[52px] min-[1280px]:pt-4
          min-[1440px]:h-[56px] min-[1440px]:pt-4
          min-[1600px]:h-[60px]  min-[1600px]:pt-5
          min-[1720px]:h-[64px]  min-[1720px]:pt-5
          min-[1850px]:h-[68px]  min-[1850px]:pt-5
          min-[1920px]:h-[72px]  min-[1920px]:pt-5
          min-[2020px]:h-[76px]  min-[2020px]:pt-5
          min-[2150px]:h-[76px]  min-[2150px]:pt-5
          min-[2250px]:h-[78px] min-[2250px]:pt-5
          min-[2350px]:h-[80px]  min-[2350px]:pt-5
          min-[2450px]:h-[95px]  min-[2450px]:pt-5
          min-[2560px]:h-[100px]  min-[2560px]:pt-7




          pr-[50px]

          pb-4

          min-[1024px]:pb-1
          min-[1280px]:pb-4
          min-[1440px]:pb-4  
          min-[1600px]:pb-5
          min-[1720px]:pb-6
          min-[1850px]:pb-7
          min-[1920px]:pb-7
          min-[2020px]:pb-10
          min-[2150px]:pb-10
          min-[2250px]:pb-10
          min-[2350px]:pb-12
          min-[2450px]:pb-12
          min-[2560px]:pb-15  


          pl-[50px]

          text-base
          min-[768px]:text-lg
          min-[1024px]:text-[15px]
          min-[1100px]:text-[17px]
            min-[1280px]:text-[19px]
            min-[1350px]:text-[20px]
          min-[1440px]:text-[20px]                /* perfect – keep */
          min-[1600px]:text-[22px]
          min-[1720px]:text-[24px]
          min-[1850px]:text-[26px]
          min-[1920px]:text-[28px]
          min-[2020px]:text-[30px]
          min-[2150px]:text-[31px]
          min-[2250px]:text-[32px]
          min-[2350px]:text-[33px]
          min-[2450px]:text-[34px]
          min-[2560px]:text-[36px]

          

          transition-all duration-300
         
          hover:-translate-y-1

          self-start

        `}
      >
        PREORDER NOW
      </button>
    </div>
  </div>
</div>
      </div> 
    </div>


  );
};

export default Hero;