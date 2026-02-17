import React from 'react';
import heroImageDesktop from '../assets/Qalzy-app-Background Image.png';     // desktop / ≥426px
import heroImageMobile  from '../assets/background-image-mobile.png';        // ← add your mobile version here


const Hero = () => {
  return (
    <div
      className={`
        relative
        w-full
        min-h-[713px]              
        overflow-hidden
        pt-[clamp(134px,calc(168px*100vw/1440px),280px)]
        min-[2300px]:pt-[clamp(260px,calc(268px*100vw/2300px),270px)]
        min-[2400px]:pt-[clamp(270px,calc(271px*100vw/2400px),280px)]
      `}
    >

      {/* ──────────────────────────────────────────────── */}
      {/* DESKTOP / TABLET version ── shown ≥ 426px         */}
      {/* ──────────────────────────────────────────────── */}
      <div className="hidden min-[426px]:block absolute inset-0">
        <div
          className={`
            absolute w-full h-full
            aspect-[1440/713]
            min-h-[713px]
          `}
        >
          <img
            src={heroImageDesktop}
            alt="Qalzy app hero background desktop"
            className={`
              absolute inset-0
              h-full w-full
              object-cover object-center
              transition-transform duration-500
              max-[425px]:scale-[1.02]   // won't apply here anyway
            `}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* MOBILE version ── shown ≤ 425px                   */}
      {/* ──────────────────────────────────────────────── */}
      <div className="block min-[426px]:hidden absolute inset-0">
        <div
          className={`
            relative w-full h-full
            aspect-[1440/713]
            min-h-[713px]             // strong minimum on mobile
          `}
        >
          <img
            src={heroImageMobile}
            alt="Qalzy app hero background mobile"
            className={`
              absolute inset-0
              h-full w-full
              object-cover
              object-center             // or object-[60%_center] etc. if needed
            `}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* CONTENT – we keep one content block for simplicity */}
      {/*       (you can duplicate & adjust spacing later)  */}
      {/* ──────────────────────────────────────────────── */}
      <div
        className={`
          absolute z-10 inset-0
          flex flex-col
          pt-[clamp(300px,calc(178px*100vw/1440px),316px)]
          pb-[clamp(6px,calc(175px*100vw/1440px),316px)]
          px-[clamp(6px,calc(140px*100vw/1440px),250px)]
          pl-[clamp(6px,calc(110px*100vw/1440px),200px)]
          pr-[clamp(8px,calc(10px*100vw/1440px),17px)]
          max-w-[clamp(250px,calc(815px*100vw/1440px),1450px)]
        `}
      >
        <h2
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
          The only kitchen scale that auto-tracks calories
        </h2>

        <p
          className={`
            font-['Helvetica']
            tracking-normal
            drop-shadow-lg
            text-white
            text-[clamp(5.5px,calc(20px*100vw/1440px),36px)]
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
          <div
            className={`
              flex items-center gap-[clamp(0.5px,calc(8px*100vw/1440px),16px)]
              text-[clamp(5.5px,calc(24px*100vw/1440px),48px)]
            `}
          >
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-white leading-none">
                {star}
              </span>
            ))}
          </div>

          <span className="flex items-center">
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
  );
};

export default Hero;