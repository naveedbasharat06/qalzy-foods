// src/components/DescriptionSection.tsx
import React from 'react';
import ButtonPress from '../assets/Buttonpress.png';     // main large image

const CrackingEgg: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-screen-2xl px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Text content – centered */}
        <div className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[900px] 2xl:max-w-[1000px] text-center">
          <h2
            className="
              font-['Open_Sans'] font-bold
              text-[#171923]
              text-xl sm:text-2xl md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]
              leading-[120%] tracking-[-0.01em]
              mb-5 sm:mb-6 md:mb-8 lg:mb-10
            "
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Faster than Cracking an Egg
          </h2>

          <p
            className="
              font-['Open_Sans'] font-normal
              text-[#171923]
              text-sm sm:text-base md:text-[16px] lg:text-[18px] xl:text-[20px]
              leading-[150%] tracking-[-0.005em]
              mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20
            "
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            No more manual typing and searching for ingredients in confusing databases. Tracking calories with Qalzy takes just 4 seconds of your time. One quick press of a button. That’s 5x faster than trying to find an ingredient in an app, and 5x more time to spend on things that matter
          </p>
        </div>

        {/* Image container with centered overlay polygon */}
        <div className="mt-6 md:mt-18 lg:mt-10 relative flex justify-center">
          {/* Main description image */}
          <img
            src={ButtonPress}
            alt="Qalzy description visual"
            className="
              w-full
              max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[1140px] 2xl:max-w-[1200px]
              rounded-[32px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px]
              object-cover
              shadow-lg sm:shadow-xl md:shadow-2xl
              transition-all duration-300
            "
            style={{ height: 'auto' }}
            loading="lazy"
          />

          
         
        </div>
      </div>
    </section>
  );
};

export default CrackingEgg;