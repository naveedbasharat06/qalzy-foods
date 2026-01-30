// components/Qalzy.tsx
import React from 'react';
import vectorImg from '../assets/Vector 1.png';
import routerImg from '../assets/router.png';
import vegetableImg from '../assets/Vegetable.png';

export default function Qalzy() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Background decorative vector wave */}
      <img
        src={vectorImg}
        alt="Decorative green wave vector"
        className="absolute pointer-events-none select-none"
        style={{
          width: '1534px',
          height: '532px',
          top: '-201.76px',
          left: '-93.53px',
          border: '8px solid #56B602',
          borderRadius: '9999px',           // makes thick border look smooth/curved
          transform: 'rotate(-164.14deg)',
          transformOrigin: 'center center',
          zIndex: 1,                        // behind everything else
        }}
      />

      {/* Router image – centered */}
      <img
        src={routerImg}
        alt="Router / scale device"
        className="absolute pointer-events-none select-none"
        style={{
          width: '880.42px',
          height: '602px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          zIndex: 2,
        }}
      />

      {/* Vegetable image – placed below the router with consistent spacing */}
      <img
        src={vegetableImg}
        alt="Vegetables on scale"
        className="absolute pointer-events-none select-none"
        style={{
          width: '880.42px',                // same width as router for visual consistency
          height: '602px',                  // same height
          top: 'calc(50% + 602px + 60px)',  // router height + desired gap (~60px)
          left: '50%',
          transform: 'translate(-50%, 0)',  // centered horizontally, no vertical shift
          opacity: 1,
          zIndex: 2,                        // same layer as router
        }}
      />

      {/* Your main content layer – stays above images */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Qalzy – Smart Kitchen Scale
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Automatic food recognition and calorie tracking
          </p>
          {/* Add buttons, stats, etc. here */}
        </div>
      </div>

    </div>
  );
}