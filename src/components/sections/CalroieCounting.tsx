import React from 'react';
import calorieCountingImg from '../assets/Description.png'; // adjust path as needed

const AiCalorieSection: React.FC = () => {
  return (
    <section
      className="
        relative w-full bg-white
        min-h-[526px] min-[1440px]:min-h-[1035px]
        flex flex-col items-center justify-center
        px-5 py-10 min-[1440px]:py-20
        overflow-hidden
      "
    >

      {/* Heading – exact sizes at 375px & 1440px */}
      <h2
        className="
          font-['Open_Sans'] font-bold text-center text-black
          w-[349px] min-[1440px]:w-[546px]
          text-[24px] min-[1440px]:text-[clamp(24px,3.2vw,48px)]
          leading-[120%] tracking-0
          mb-6 min-[1440px]:mb-10
        "
        style={{
          // height is auto — but we can constrain container if design tool forces it
          maxHeight: '58px',           // ≈ at 375px
          '@media (min-width: 1440px)': { maxHeight: '29px' }, // exact match
        } as React.CSSProperties}
      >
        Instant AI-powered Calorie Counting
      </h2>

      {/* Paragraph – exact sizes at 375px & 1440px */}
      <p
        className="
          font-['Open_Sans'] font-normal text-center text-gray-700
          w-[349px] min-[1440px]:w-[546px]
          text-[16px] min-[1440px]:text-[16px]
          leading-[150%] tracking-0
          max-w-[90%] min-[1440px]:max-w-[546px]
        "
        style={{
          maxHeight: '168px',           // design value at 375px
          '@media (min-width: 1440px)': { maxHeight: '96px' }, // exact at 1440px
        } as React.CSSProperties}
      >
        Tired of manually tracking your calories? Qalzy’s AI camera instantly identifies raw foods,
        packaged items, and even multiple ingredients on a plate with over 90% accuracy, and
        automatically logs the detected calories and macros, all without any effort on your part.
      </p>

      {/* Image – exact pixel sizes at the two breakpoints + fluid scaling */}
      <div
        className="
          mt-10 min-[1440px]:mt-16
          w-[364.72px] min-[1440px]:w-[1140px]
          aspect-[364.72/205] min-[1440px]:aspect-[1140/653.82]
          overflow-hidden rounded-[20px] min-[1440px]:rounded-[64px]
          shadow-xl
        "
      >
        <img
          src={calorieCountingImg}
          alt="AI-powered calorie counting demonstration"
          className="w-full h-full object-cover"
          // Optional: if you want even more fluid control
          style={{
            width: 'clamp(364.72px, calc(364.72px + (1140 - 364.72) * ((100vw - 375px) / (1440 - 375)), 1140px)',
            height: 'auto',
            borderRadius: 'clamp(20px, calc(20px + (64 - 20) * ((100vw - 375px) / (1440 - 375))), 64px)',
          } as React.CSSProperties}
        />
      </div>

    </section>
  );
};

export default AiCalorieSection;