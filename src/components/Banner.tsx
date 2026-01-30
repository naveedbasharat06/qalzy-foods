// components/FoodLoggingBanner.tsx
import React from 'react';

export default function FoodLoggingBanner() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`
          w-full
          bg-[#828282]
          mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28
          px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28
          pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12
          flex items-center justify-center
        `}
      >
        <h2
          className={`
            font-['Aeonik_Trial','DM_Sans',system-ui,sans-serif]
            font-normal
            text-[15px]           /* very small mobile */
            xs:text-[16px]
            sm:text-[17px]        /* small tablets */
            md:text-[19px]        /* larger tablets / small laptops */
            lg:text-[22px]        /* ~1024–1440 px sweet spot */
            xl:text-[26px]        /* 1280–1920 px */
            2xl:text-[clamp(26px,1.4vw,34px)]   /* smooth growth on 4K+ */
            leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[1.45]
            tracking-[-0.01em] md:tracking-[-0.015em] lg:tracking-[-0.02em]
            text-[#0E1318]
            text-center
            max-w-[94%]           /* mobile – almost edge to edge */
            sm:max-w-[88%]
            md:max-w-[80%]        /* tablets */
            lg:max-w-4xl          /* good at 1440 px */
            xl:max-w-5xl          /* comfortable 1440–1920 */
            2xl:max-w-[clamp(80rem,75vw,100rem)]   /* very wide but controlled */
            mx-auto
            transition-all duration-400 ease-out
            whitespace-normal
            lg:whitespace-nowrap   /* force single line only from ~1024 px */
          `}
        >
          Use AI to identify and record the food you weigh and log calories automatically.
          World's First Launch!
        </h2>
      </div>
    </div>
  );
}