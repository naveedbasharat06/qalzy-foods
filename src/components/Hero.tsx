// HeroSection.tsx
import React from 'react';
import heroImage from '../assets/rectangle 1.png'; // your image file

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-gray-100               // fallback color
        
        
       
        
                
        /* ────────────────────────────────────────────────
           Top padding = distance from top of THIS section
           Goal: image starts right below banner (170px tall)
        ──────────────────────────────────────────────── */
        pt-[168px]   
                     
        min-[360px]:pt-[170px]             // ≥360px
        min-[768px]:pt-[170px]             // ≥768px – tablets
        min-[1024px]:pt-[170px]            // ≥1024px – most desktops & 1440px
        min-[1280px]:pt-[170px]            // ≥1280px
        min-[1440px]:pt-[168px]            // ≥1440px
        min-[1600px]:pt-[200px]            // ≥1600px
        min-[1720px]:pt-[210px]            // ≥1720px
        min-[1850px]:pt-[220px]            // ≥1850px
        min-[1920px]:pt-[240px]            // ≥1920px
        min-[2150px]:pt-[260px]            // ≥2150px
        min-[2300px]:pt-[270px]            // ≥2300px
        min-[2450px]:pt-[276px]            // ≥2450px
        min-[2560px]:pt-[280px]            // ≥2560px

        
        
        
      "
    >
      
      <div className="absolute inset-0  pt-[156px]                // base / mobile (<640px)
        
        
        
       min-[360px]:pt-[160px]             // ≥360px
        min-[768px]:pt-[160px]             // ≥768px – tablets
        min-[1024px]:pt-[167px]            // ≥1024px – most desktops & 1440px
        min-[1280px]:pt-[167px]            // ≥1280px
        min-[1440px]:pt-[170px]            // ≥1440px
        min-[1536px]:pt-[175px]            // ≥1536px
        min-[1920px]:pt-[200px]            // ≥1920px
        min-[2560px]:pt-[280px]            // ≥2560px
  ">
       
       
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="
             inset-0


            w-full h-full
            
            min-[320px]:w-[320px] min-[320px]:h-full
            min-[360px]:w-[360px] min-[360px]:h-full
            min-[768px]:w-[768px] min-[768px]:h-full
            min-[1024px]:w-[1024px] min-[1024px]:h-full
            min-[1280px]:w-[1280px] min-[1280px]:h-full
            min-[1440px]:w-[1440px] min-[1440px]:h-full
            min-[1536px]:w-[1536px] min-[1536px]:h-full
            min-[1920px]:w-[1920px] min-[1920px]:h-full
            min-[2560px]:w-[2560px] min-[2560px]:h-[2560px]
           
  

            transition-transform duration-700
            hover:scale-105
            
            /* Force your exact size from lg onwards + center it */
            
            
            
            
           
          "
        />
        
        
      </div>







  <div
  className="
    relative z-10
    w-full                           // full width control
    h-full
    
    /* ── Very small left padding – content starts close to left edge ── */
    pl-4                             // mobile: 16px from left edge
    xs:pl-5                          // very small screens
    sm:pl-6                          // ≥640px: ~24px
    md:pl-8                          // ≥768px: 32px
    lg:pl-10                         // ≥1024px: 40px
    xl:pl-34                         // ≥1280px (~1440px): 48px – still small
    2xl:pl-16                        // ≥1536px: 64px – comfortable but not centered
    
    /* Right side – prevent text from touching right edge on large screens */
    pr-4 sm:pr-6 md:pr-10 lg:pr-16 xl:pr-24 2xl:pr-32
    
    /* Your vertical spacing – kept as before */
    pt-[100px]  sm:pt-[120px]  md:pt-[140px]
    lg:pt-[160px]  xl:pt-[175px]  2xl:pt-[200px]
    
    pb-[140px]  sm:pb-[160px]  md:pb-[200px]
    lg:pb-[220px]  xl:pb-[263px]  2xl:pb-[300px]
    
    /* ── Key changes for left alignment ── */
    flex flex-col
    items-start                      // aligns children to the left
    justify-center                   // vertical center if you want
    text-left                        // text flows from left
    text-white
  "
>
  {/* Headline – starts from left with no centering */}
  <h1
    className="
   font-['Inter'] font-light
     
      tracking-normal

    text-[32px] leading-none
    sm:text-[38px]
    md:text-[42px]
    lg:text-[46px]
    xl:text-[48px]
    2xl:text-[56px]
     
      
      drop-shadow-xl
      mb-5 sm:mb-6 md:mb-8 lg:mb-10
      max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[50%]
      
    "
  >
    The only kitchen scale that
    <br className="" />
    auto-tracks calories
  </h1>

  {/* Paragraph – also left-aligned */}
  <p
    className="
      font-['Helvetica'] font-light
      text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[20px] 2xl:text-[32px]
      tracking-normal
      leading-relaxed
      drop-shadow-lg
      mb-8 md:mb-10 lg:mb-12 xl:mb-14
      max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[45%]
    "
  >
    Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id. 
    Scelerisque in et molestie eget in auctor bibendum feugiat.
  </p>



<h1
    className="
   font-['Helvetica'] font-light
     
      tracking-normal

    text-[32px] leading-none
    sm:text-[38px]
    md:text-[42px]
    lg:text-[36px]
    xl:text-[36px]
    2xl:text-[56px]
     
      
      drop-shadow-xl
      mb-5 sm:mb-6 md:mb-8 lg:mb-10
      max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[50%]
      
    "
  >
   Get 50% discount
  </h1>


  {/* Button area – also starts from left */}
  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
    <button
      className="
        bg-green-600 hover:bg-green-700 active:bg-green-800
        text-white font-medium
        px-7 py-4 rounded-full
        text-base sm:text-lg md:text-xl
        min-w-[160px] sm:min-w-[180px]
        transition-all duration-300
        shadow-lg hover:shadow-xl
        hover:-translate-y-1
        self-start                    // important: button hugs left too
      "
    >
      PREORDER now
    </button>
  </div>
</div>
      


      



    </section>
  );
};

export default HeroSection;