// components/Qalzy.tsx
import React from 'react';
import vectorImg from '../assets/Vector 1.png';
import routerImg from '../assets/router.png';
import vegetableImg from '../assets/Vegetable.png';
import qalzyImage from '../assets/MeetQalzy.png';

export default function Qalzy() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">


      {/* 2. Router / main device image */}
      <img
        src={routerImg}
        alt="Router / scale device"
        className="absolute pointer-events-none select-none"
        style={{
          width: 'clamp(320px, 65vw, 880px)',
          height: 'auto',
          top: 'clamp(50%, 50%, 50%)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          zIndex: 2,
        }}
      />

      {/* 3. Vegetable image – placed below router */}
     



    </div>
  );
}