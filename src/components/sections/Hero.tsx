import React from 'react';

// Adjust these imports to your actual file paths
import heroDesktop from '../assets/Qalzy-app-Background Image.png';     // 1440×713 version
import heroMobile  from '../assets/background-image-mobile.png';         // mobile-optimized version (ideally portrait-ish crop)

const Hero = () => {
  return (
    <div
      className={`
        relative
        w-full
        min-h-[800px]
        min-w-[372px] 
        max-w-full 
        max-h-[1220px]
                 
                           // fallback
      `}
    >

      {/* ─── DESKTOP / TABLET IMAGE ─── shown ≥426px ─── */}
      <div className="hidden min-[426px]:block absolute inset-0">
        <div
          className={`
            absolute w-full
                    min-h-[300px]

           min-h-[clamp(300px,calc(713px*100vw/1440px),1280px)] 
        
           
          `}
        >
          <img
            src={heroDesktop}
            alt="Kitchen scale hero desktop"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* ─── MOBILE IMAGE ─── shown <426px ─── */}
      <div className="block min-[426px]:hidden absolute inset-0">
        <div
          className={`
            relative w-full
                     
            min-h-[713px]
            h-full
          `}
        >
          <img
            src={heroMobile}
            alt="Kitchen scale hero mobile"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* Dark overlay — improves text readability on both versions */}
      <div className="absolute inset-0 z-[1]" />

      {/* ─── TEXT BLOCK – DESKTOP / ≥426px ─── */}
      <div
        className={`
          hidden min-[426px]:flex
          flex-col absolute inset-0 z-10
         
  

    pt-[clamp(50px,calc(178px*100vw/1440px),316px)]



    pb-[clamp(6px,calc(175px*100vw/1440px),316px)]



    px-[clamp(6px,calc(140px*100vw/1440px),250px)] 



    pl-[clamp(6px,calc(110px*100vw/1440px),220px)]


    pr-[clamp(8px,calc(10px*100vw/1440px),17px)]
     


    max-w-[clamp(250px,calc(815px*100vw/1440px),1450px)]

        `}
      >
        <div className="">
          <h1
            className={`
              font-['Inter']
    font-normal              
    tracking-normal
    leading-none            
    text-white

    text-[clamp(13px,calc(50px*100vw/1440px),88px)]

    mb-[clamp(8px,calc(20px*100vw/1440px),39px)]

    max-w-[clamp(190px,calc(815px*100vw/1440px),1450px)]


            `}
          >
            The only kitchen scale that<br />auto-tracks calories
          </h1>

          <p  className={`

        font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white

            text-[clamp(5.5px,calc(20px*100vw/1440px),36px)]
            
       w-[clamp(220px,calc(590px*100vw/1024px),1410px)] 
       
        w-[clamp(220px,calc(815px*100vw/1440px),1410px)] 
       
      
      

    `}
  >
    
            Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
            Scelerisque in et molestie eget in auctor bibendum feugiat.
          </p>




          <p
           className={`

      text-[clamp(9px,calc(36px*100vw/1440px),64px)] 

     font-['Helvetica'] 
     text-white
        tracking-normal leading-none


      mb-[clamp(6px,calc(16px*100vw/1440px),34px)]
      min-[320px]:mb-[2px]
      min-[768px]:mb-[4px]
      min-[900px]:mb-[7px]
      min-[1024px]:mb-[9px]
      min-[1200px]:mb-[14px]
      min-[1300px]:mb-[16px]
      min-[1440px]:mb-[18px]
      min-[1600px]:mb-[20px]
      min-[1700px]:mb-[21px]
      min-[1800px]:mb-[22px]
      min-[1900px]:mb-[22px]
      min-[2000px]:mb-[24px]
      min-[2100px]:mb-[26px]
      min-[2200px]:mb-[28px]
      min-[2300px]:mb-[30px]
      min-[2400px]:mb-[32px]
      min-[2500px]:mb-[33px]
      min-[2560px]:mb-[34px]

 min-[320px]:mb-[clamp(2px,calc(6px*100vw/320px),12px)]

       min-[1440px]:mt-[clamp(5px,calc(16px*100vw/1440px),27px)]


mt-[clamp(5px,calc(16px*100vw/1440px),27px)]

      max-w-[clamp(100px,calc(790px*100vw/1440px),1400px)]

   
      `}
  >
            Get 50% discount
          </p>

         

<div
  className={`
    flex items-center justify-between
    w-[clamp(100px,calc(392px*100vw/1440px),800px)]
    h-[clamp(24px,calc(24px*100vw/1440px),48px)]
    text-white
    font-['Helvetica']           
    text-[clamp(5.5px,calc(20px*100vw/1440px),48px)]
   gap-[clamp(0.5px,calc(8px*100vw/1440px),16px)]
   


  `}
>
  {/* Stars container – matches Frame specs */}
  <div
    className={`
      flex items-center justify-between   
      gap-[clamp(0.5px,calc(8px*100vw/1440px),16px)]
       text-[clamp(5.5px,calc(24px*100vw/1440px),48px)]
      
    `}
  >
    {'★★★★★'.split('').map((star, i) => (
      <span key={i} className="   text-white  leading-none">
        {star}
      </span>
    ))}
  </div>

  
  <span className=" flex items-center  ">
      5,128+ early bird pre-orders
  </span>
</div>


        

  <button
    className={`


          font-['Inter700'] 
          inline-flex items-center justify-center
   
    
    bg-[rgb(74,215,105)]
    hover:bg-[rgb(72,194,99)]
    text-white

      rounded-[clamp(12px,calc(24px*100vw/1440px),48px)]

   mt-[clamp(2px,calc(34px*100vw/1440px),54px)]
   

   min-[320px]:mt-[clamp(2px,calc(4px*100vw/320px),20px)]
   min-[900px]:mt-[18px]
   min-[1024px]:mt-[20px]
   min-[1200px]:mt-[24px]
   min-[1300px]:mt-[30px]
   min-[1440px]:mt-[34px]
   min-[1600px]:mt-[36px]
   min-[1700px]:mt-[38px]
   min-[1800px]:mt-[39px]
   min-[1900px]:mt-[40px]
   min-[2000px]:mt-[42px]
   min-[2100px]:mt-[44px]
   min-[2200px]:mt-[46px]
   min-[2300px]:mt-[48px]
   min-[2400px]:mt-[52px]
   min-[2500px]:mt-[54px]
   min-[2560px]:mt-[54px]




 


      w-[clamp(80px,calc(263px*100vw/1440px),467px)]
      h-[clamp(10px,calc(56px*100vw/1440px),100px)]
      px-[clamp(15px,calc(50px*100vw/1440px),80px)] 
          
      text-[clamp(2px,calc(20px*100vw/1440px),36px)]
      shadow-[0_4px_6px_rgb(72,194,99)]
    hover:shadow-[0_5px_10px_rgba(72,194,99,0.35)]
    
    transition-all duration-300
    active:scale-98
    `}
  >
    PREORDER NOW
  </button>


      
      
      
        </div>
      </div>


















      {/* ─── TEXT BLOCK – MOBILE (<426px) ─── centered, ~305px wide feel ─── */}
      <div
        className={`
          flex min-[426px]:hidden
          flex-col absolute inset-0 z-10
          items-center justify-center
         
         
        min-[405px]:pt-[40px]
          min-[375px]:pt-[35px]
          min-[320px]:pt-[50px]

          text-center
         
        `}
      >
        <div className="w-full 


        min-[405px]:max-w-[400px] 
        
        min-[375px]:max-w-[356px]
        min-[320px]:max-w-[335px]
        
        max-h-[523px] flex flex-col justify-center gap-5">
          <h1
            className={`
             font-['Inter']
            font-normal
            tracking-normal
            leading-[113%]
            text-white
              text-[38px]
              min-[405px]:text-[42px]
              min-[375px]:text-[41px]
              min-[320px]:text-[38px]
             min-[405px]:pl-[40px]
              min-[375px]:pl-[35px]
              min-[320px]:pl-[40px]
             
              max-h-[176px]

             gap-2.5
             

              text-balance
            `}
          >
            The only kitchen scale that <br />auto-tracks calories
          </h1>


    <p className="
    font-['Helvetica'] 
  tracking-normal
  leading-[115%]
  word-spacing-[-0.6em] 
  mb-[-2px]
 mt-[-5px]
 min-[375px]:mt-[10px]
 min-[405px]:mt-[10px]
  text-white
  text-[22px]
  min-[400px]:text-[23px]
  min-[375px]:w-[350px]
  min-[375px]:pl-[5px]
  min-[405px]:w-[380px]
  min-[405px]:pl-6.25
    ">
      Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
      Scelerisque in et molestie eget in auctor bibendum feugiat.
    </p>

          <p className="
          
          font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       mt-[-7px]
        text-white
        text-[34px]
        min-[375px]:text-[36px]
        
        min-[400px]:text-[40px]
        min-[405px]:pr-[20px]  
         min-[375px]:pr-[25px] 
         min-[320px]:pr-[27px] 
          
        ">
          
          
            Get 50% discount
          </p>

          <div className="flex flex-col mt-[-5px] items-center gap-2 text-white ">
            <div className="flex
            
            min-[405px]:text-3xl 
            min-[375px]:text-3xl
            min-[320px]:text-3xl
            
            
            ">★★★★★</div>
            <span className="
          font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white
        text-[20px]
        min-[400px]:text-[24px]
        min-[320px]:text-[22px]
        min-[320px]:pl-[15px]
        pl-[30px]

        ">5,128+ early bird pre-orders</span>
          
          
          
          </div>

          <button
            className={`
      bg-[#4AD769] hover:bg-[#48C263] active:bg-[#3EB158]
              text-white font-bold
              min-[405px]:px-12
              min-[375px]:px-8
              min-[320px]:px-6
              
              min-[375px]:py-3
              min-[405px]:py-4 
              min-[320px]:py-3
              
              rounded-full text-[20px]
              w-full max-w-[260px]
              min-[405px]:max-w-[280px]

              mx-auto
             
               shadow-[0_4px_6px_rgb(72,194,99)]
    hover:shadow-[0_5px_10px_rgba(72,194,99,0.35)]
    
    transition-all duration-300
    min-[320px]:mb-[75px]
    min-[375px]:mb-[70px]
    min-[375px]:mt-[10px]
   min-[400px]:mt-[8px]
   min-[320px]:mt-[10px]


            `}
          >
            PREORDER NOW
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;