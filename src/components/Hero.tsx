// components/HeroSection.tsx
import React from 'react';

// Adjust path to match your project structure
import heroImage from '../assets/Rectangle 1.png';  
// or: '../assets/hero-kitchen-women-scale.jpg'
// or: '/images/hero.jpg' if public folder

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      {/* Maintain ~16:9 or your preferred ratio – adjust number if needed */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9] xl:aspect-[16/9]">
        {/* The image itself */}
        <img
          src={heroImage}
          alt="Two women using smart kitchen scale in modern kitchen"
          className="
            absolute inset-0 h-full w-full
            object-cover               // fills area, crops edges if needed
            object-center              // keeps people & scale centered
            brightness-[0.85]          // optional: slight darken so text is readable
            transition-transform duration-700
            hover:scale-[1.03]         // subtle zoom on hover (optional)
          "
          // Improve loading experience for above-the-fold hero
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />

            {/* Text/content overlay – centered, responsive */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl space-y-5 sm:space-y-7 md:space-y-9">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              The only kitchen scale that
              <br className="hidden sm:block" />
              auto-tracks calories
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              World's first AI-powered scale that identifies food and logs calories automatically.
            </p>

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