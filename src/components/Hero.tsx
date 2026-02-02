// src/components/HeroSection.tsx
import React from 'react';
import heroImage from '../assets/Rectangle 1.png';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
   
      <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[16/9] xl:aspect-[16/9]">
       
        <img
          src={heroImage}
          alt="Kitchen scene with smart scale"
          className="
            absolute inset-0 h-full w-full
            object-cover object-center
            brightness-[0.85]
            transition-transform duration-700
            hover:scale-[1.03]
          "
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

        
        <div className="
          absolute inset-0
          flex flex-col items-start justify-center
          px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24
          text-white
          z-10
        ">
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[815px] space-y-5 sm:space-y-7 md:space-y-9">
            <h1 className="
              text-3xl font-bold leading-tight tracking-tight
              sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            ">
              The only kitchen scale that
              <br className="hidden sm:block" />
              auto-tracks calories
            </h1>

            <p className="
              text-base sm:text-lg md:text-xl lg:text-2xl
              text-gray-100 max-w-3xl
            ">
              Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id. 
              Scelerisque in et molestie eget in auctor bibendum feugiat.
            </p>

            <h1 className="
              text-2xl font-bold text-green-400
              sm:text-3xl md:text-4xl lg:text-5xl
            ">
              Get 50% discount
            </h1>

            <div className="pt-4 sm:pt-6">
              <button className="
                inline-flex items-center justify-center rounded-full
                bg-green-500 px-8 py-4 text-base font-semibold text-white
                shadow-lg hover:bg-green-600 hover:shadow-xl
                transition-all duration-300 active:scale-95
                sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl
              ">
                Pre-order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}