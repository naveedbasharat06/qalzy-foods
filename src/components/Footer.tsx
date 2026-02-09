// HeroSection.tsx
import React from 'react';
import heroImage from '../assets/rectangle 1.png'; // your image file

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative w-full h-[120vh]
        overflow-hidden
        bg-gray-100               // fallback color
        
        
       
        
                
       
        
        pt-[168px]   
                     
        min-[360px]:pt-[170px]             // ≥360px
        min-[768px]:pt-[170px]             // ≥768px – tablets
        min-[1024px]:pt-[170px]            // ≥1024px – most desktops & 1440px
        min-[1280px]:pt-[170px]            // ≥1280px
        min-[1440px]:pt-[150px]            // ≥1440px
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
        min-[1440px]:pt-[168px]            // ≥1440px
        min-[1600px]:pt-[175px]  
        min-[1720px]:pt-[180px]            // ≥1720px
         min-[1850px]:pt-[190px]            // ≥1850px
        min-[1920px]:pt-[200px] 
        min-[2150px]:pt-[220px]            // ≥2150px
        min-[2300px]:pt-[230px]            // ≥2300px
        min-[2450px]:pt-[240px]            // ≥2450px
        min-[2560px]:pt-[280px]            // ≥2560px
  ">
       
       
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="
             inset-0


            w-full h-full
            
            

            min-[360px]:w-full min-[360px]:h-[178px]
            min-[768px]:w-full min-[768px]:h-[380px]
            min-[1024px]:w-full min-[1024px]:h-[550px]
            min-[1130px]:w-full min-[1130px]:h-[590px]
            min-[1280px]:w-full min-[1280px]:h-[633px]
            min-[1440px]:w-full     min-[1440px]:h-[713px]

            min-[1600px]:w-full min-[1600px]:h-[792px]
            min-[1720px]:w-full min-[1720px]:h-[851px]
            min-[1850px]:w-full min-[1850px]:h-[915px]

            min-[1920px]:w-full min-[1920px]:h-[950px]
            min-[2150px]:w-full min-[2150px]:h-[1065px]
            min-[2300px]:w-full min-[2300px]:h-[1138px]
            min-[2450px]:w-full min-[2450px]:h-[1212px]
            min-[2560px]:w-full min-[2560px]:h-[1268px]
           
  

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
    pl-4 
                                // mobile: 16px from left edge
    xs:pl-5                          // very small screens
    min-[360px]:pl-6 
    min-[768px]:pl-7                 // ≥768px: ~28px
    min-[1024px]:pl-8                // ≥1024px: 32px
    min-[1280px]:pl-10               // ≥1280px: 40px
    min-[1440px]:pl-34              // ≥1440px (~1600px): 48px – still small
    min-[1600px]:pl-16
    min-[1720px]:pl-16
    min-[1850px]:pl-16
    min-[1920px]:pl-16
    min-[2150px]:pl-16
    min-[2300px]:pl-16
    min-[2450px]:pl-16

    min-[2560px]:pl-16  
    
   
    pr-4 
    min-[360px]:pr-6 
    min-[768px]:pr-10 
    min-[1024px]:pr-16 
    min-[1280px]:pr-24 
    min-[1440px]:pr-32
    min-[1600px]:pr-32
    min-[1720px]:pr-32
    min-[1850px]:pr-32
    min-[1920px]:pr-32
    min-[2150px]:pr-32
    min-[2300px]:pr-32
    min-[2450px]:pr-32
    min-[2560px]:pr-32
    
  
    pt-[100px]  min-[360px]:pt-[120px]
      min-[768px]:pt-[140px]
    min-[1024px]:pt-[160px] 
     min-[1280px]:pt-[175px]
    min-[1440px]:pt-[200px]
     min-[1600px]:pt-[200px]
    min-[1720px]:pt-[200px]
    min-[1850px]:pt-[200px]
    min-[1920px]:pt-[200px]
    min-[2150px]:pt-[200px]
    min-[2300px]:pt-[200px] 
    min-[2450px]:pt-[200px]
    min-[2560px]:pt-[200px]

    
    pb-[140px]
      min-[360px]:pb-[160px]
        min-[768px]:pb-[200px]
    min-[1024px]:pb-[220px] 
     min-[1280px]:pb-[263px] 
   min-[1440px]:pb-[300px]
      min-[1600px]:pb-[300px]
    min-[1720px]:pb-[300px]
    min-[1850px]:pb-[300px]
    min-[1920px]:pb-[300px]
    min-[2150px]:pb-[300px]
    min-[2300px]:pb-[300px]
    min-[2450px]:pb-[300px]

    min-[2560px]:pb-[300px] 




    
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
    min-[360px]:text-[38px]
    min-[768px]:text-[42px]
    min-[1024px]:text-[46px]
    min-[1280px]:text-[48px]
    min-[1440px]:text-[56px]
     
      
      drop-shadow-xl
      mb-5 
      min-[360px]:mb-6 min-[768px]:mb-8 min-[1024px]:mb-10
      min-[1280px]:mb-12 min-[1440px]:mb-14
      max-w-[90%] 
      min-[360px]:max-w-[80%]
      min-[768px]:max-w-[65%]
      min-[1024px]:max-w-[55%]
      min-[1280px]:max-w-[50%]
      min-[1440px]:max-w-[50%]

      min-[360px]:max-w-[80%] min-[768px]:max-w-[65%] min-[1024px]:max-w-[55%] min-[1280px]:max-w-[50%]
      min-[1440px]:max-w-[50%]

     
      
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
      mb-8 
      min-[360px]:mb-10 min-[768px]:mb-12 min-[1024px]:mb-14
      max-w-[90%] min-[360px]:max-w-[80%] min-[768px]:max-w-[65%] min-[1024px]:max-w-[55%] min-[1280px]:max-w-[45%]
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
    min-[360px]:text-[38px]
    min-[768px]:text-[42px]
    min-[1024px]:text-[36px]
    min-[1280px]:text-[36px]
    min-[1440px]:text-[56px]
     
      
      drop-shadow-xl
      mb-5 
      min-[360px]:mb-6 min-[768px]:mb-8 min-[1024px]:mb-10
      max-w-[90%] min-[360px]:max-w-[80%] min-[768px]:max-w-[65%] min-[1024px]:max-w-[55%] min-[1280px]:max-w-[50%]
      
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
        min-w-[160px] min-[360px]:min-w-[180px]
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