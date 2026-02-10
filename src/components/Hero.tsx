
import React from 'react';
 import heroImage from '../assets/rectangle 1.png';  // ← adjust path if needed
import starstag from '../assets/stars-herotag.png';  // ← adjust path if needed
const Hero = () => {
  return (
  
    <div
      className={`
   
       relative

       pt-[134px]

      
       
      
        min-[1440px]:pt-[clamp(134px,calc(168px*100vw/1440px),280px)] 
        min-[2300px]:pt-[clamp(260px,calc(270px*100vw/2300px),270px)] 
        
       



          /* optional safe min on very small screens */
      `}
    >
      {/* Hero image container – fluid height anchored @ 1440px = 713px */}
      <div
        className={`
          w-full
          max-w-full

          absolute
          inset-x-0
          h-[clamp(300px,calc(713px*100vw/1440),1268px)]
          min-[360px]:h-[clamp(160px,calc(178px*100vw/1440),1268px)]   /* stronger floor on mobile if wanted */
        `}
      >
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"

          // you can also add: loading="eager" or priority if this is above the fold
        />
      </div>










<div
  className={`





    relative z-10  
    
    
    pt-[clamp(20px,calc(178px*100vw/1440px),316px)]

    pb-[clamp(10px,calc(175px*100vw/1440px),316px)]

    px-[clamp(18px,calc(140px*100vw/1440px),250px)] 

    pl-[clamp(18px,calc(110px*100vw/1440px),200px)]

    pr-[clamp(8px,calc(10px*100vw/1440px),17px)]

    max-w-[clamp(305px,calc(815px*100vw/1440px),1450px)]
  `
  }
>
  


  <h2  
     className={`

      font-['Inter'] font-light

      tracking-normal leading-none
      text-white

      text-[clamp(20px,calc(48px*100vw/1440px),88px)]   

      leading-tight

      mb-[clamp(12px,calc(20px*100vw/1440px),39px)]

      max-w-[clamp(80%,calc(815px*100vw/1440px),90%)]

    `}
  >

   The only kitchen scale that auto-tracks calories
  </h2>

 




  <p
    className={`

        font-['Helvetica'] 
        tracking-normal
        drop-shadow-lg
       
        text-white


         min-text-[clamp(15px,calc(20px*100vw/1440px),36px)]

      max-w-[clamp(305px,calc(850px*100vw/1440px),1410px)]
      

    `}
  >
    
    Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id.
      Scelerisque in et molestie eget in auctor bibendum feugiat.

  </p>

 


  <p
    className={`
      text-[clamp(16px,calc(22px*100vw/1440px),40px)]     // adjust base
     font-['Helvetica'] 
     text-white
        tracking-normal leading-none
      mb-[clamp(12px,calc(16px*100vw/1440px),32px)]

       mt-[clamp(12px,calc(16px*100vw/1440px),22px)]



      max-w-[clamp(70%,calc(790px*100vw/1440px),1400px)]
    `}
  >
    Get 50% discount
  </p>

  


<div 
  className={`
    flex items-center


 max-mb-[clamp(70%,calc(32px*100vw/1440px),40px)]
 max-mt-[clamp(70%,calc(16px*100vw/1440px),38px)]


  

max-w-[clamp(70%,calc(790px*100vw/1440px),1400px)]

    
  `}
>
  <img
    src={starstag}
    alt="Rating stars"
    width={392}
    height={24}
    className={`
       h-auto 
      
     min-[1440px]:w-[clamp(240px,calc(392px*100vw/1440px),695px)] 

     
      
      object-contain
      drop-shadow-md
    `}
    style={{ opacity: 1 }}          
  />
</div>





  <button
    className={`
      drop-shadow-[0_4px_6px_#4AD76999]

          font-['Inter700'] 
          
          bg-[#4AD769]
          hover:bg-green-700
         
          text-white


      rounded-[clamp(22px,calc(24px*100vw/1440px),48px)]


      w-[clamp(200px,calc(263px*100vw/1440px),467px)]
      h-[clamp(50px,calc(56px*100vw/1440px),100px)]
      px-[clamp(30px,calc(50px*100vw/1440px),80px)]     // better than fixed 50px/15px mix
      text-[clamp(14px,calc(20px*100vw/1440px),36px)]
      
      shadow-[0_4px_6px_rgba(74,215,105,0.6)]
      
    `}
  >
    PREORDER NOW
  </button>




</div> 
 </div>
  

  );
};

export default Hero;