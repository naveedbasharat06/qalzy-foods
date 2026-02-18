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
        min-h-[713px] 
        min-w-[372px]              // enforced everywhere — never smaller than 713px
        overflow-hidden
        bg-black                    // fallback
      `}
    >

      {/* ─── DESKTOP / TABLET IMAGE ─── shown ≥426px ─── */}
      <div className="hidden min-[426px]:block absolute inset-0">
        <div
          className={`
            relative w-full
            aspect-[1440/713]          
            min-h-[713px]
            h-full
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
            aspect-[1440/713]           // keep ratio consistent (or change to e.g. 9/16 if very vertical)
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



    pl-[clamp(6px,calc(110px*100vw/1440px),200px)]


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


      mb-[clamp(6px,calc(16px*100vw/1440px),32px)]
      min-[320px]:mb-[2px]

 min-[320px]:mb-[clamp(2px,calc(6px*100vw/320px),12px)]

       min-[1440px]:mt-[clamp(10px,calc(16px*100vw/1440px),22px)]


mt-[clamp(6px,calc(16px*100vw/1440px),22px)]

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
      flex items-center justify-between   gap-[clamp(0.5px,calc(8px*100vw/1440px),16px)] text-[clamp(5.5px,calc(24px*100vw/1440px),48px)]
      
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

   mt-[clamp(2px,calc(32px*100vw/1440px),64px)]

   min-[320px]:mt-[clamp(2px,calc(4px*100vw/320px),20px)]




 


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
         
          px-[33px]
          text-center
        `}
      >
        <div className="w-full max-w-[305px] max-h-[523px] flex flex-col justify-center gap-6">
          <h1
            className={`
             font-['Inter']
            font-normal
            tracking-normal
            leading-none
            text-white
              text-[36px]
              max-h-[176px]
            `}
          >
            The only kitchen scale that <br />auto-tracks calories
          </h1>


          <p className="
          font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white
        text-[20px]
          ">
            Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
            Scelerisque in et molestie eget in auctor bibendum feugiat.
          </p>

          <p className="
          
          font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white
        text-[36px]
        
        ">
          
          
            Get 50% discount
          </p>

          <div className="flex flex-col items-center gap-3 text-white ">
            <div className="flex text-2xl sm:text-3xl">★★★★★</div>
            <span className="
          font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white
        text-[20px]">5,128+ early bird pre-orders</span>
          
          
          
          </div>

          <button
            className={`
      bg-[#4AD769] hover:bg-[#48C263] active:bg-[#3EB158]
              text-white font-bold
              px-10 py-4 rounded-full text-lg
              shadow-lg w-full max-w-[280px] mx-auto
              transition-all
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