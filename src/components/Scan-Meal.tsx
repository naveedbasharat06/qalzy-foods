// src/components/DescriptionSection.tsx
import React from 'react';
import descriptionImg from '../assets/Description.png';     // main large image
import polygonImg from '../assets/polygon 1.png';          // small overlay image in center

const ScanMeal: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
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
           Scan Every Type of Meal
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
            From homemade meals to packaged snacks, Qalzy recognizes multiple ingredients on a plate, scans nutrition labels, and even adjusts for portion sizes, so you log exactly what you eat.

          </p>
        </div>

        
      </div>
    </section>
  );
};

export default ScanMeal;