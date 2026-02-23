import React from 'react';
import vectorImg from '../assets/vector.png';     // green wave
import routerImg from '../assets/router.png';     // the device image
import VegetableImage from "../assets/vegetable.png";
import VegetableImagemobile from "../assets/vegetables.png";

const QalzyApp: React.FC = () => {
  return (
    <div className="relative min-[2560px]:top-[950px]
    min-[700px]:top-[-260px] w-full min-w-[320px] max-w-[2560px] bg-white ">

      {/* ──────────────────────────────────────────────── */}
      {/*                   ≥ 425px (tablet+)              */}
      {/* ──────────────────────────────────────────────── */}
      <div className="hidden min-[426px]:block relative w-full">

        <div className="relative  w-full h-[clamp(783px,calc(1152px*100vw/1440px),2050px)] flex items-center justify-center">

          {/* Green wave background */}
          <img
            src={vectorImg}
            alt="Green wave background"
            className="
              absolute
            top-[clamp(-50px,calc(-60px*100vw/1440px),-80px)] 
            
min-[375px]:top-[-20px]

    min-[320px]:top-[-15px]

          w-full

        min-w-[320px]
           
h-[clamp(138px,calc(400px*100vw/1440px),700px)] 


            object-contain
            z-10  "
          />

          {/* Router device – above wave */}
          <img
            src={routerImg}
            alt="Qalzy router device"
            className="
              absolute
             w-full
           

h-[clamp(400px,calc(602px*100vw/1440px),1070px)] 

            object-contain
            z-20              
           

               top-[clamp(-150px,calc(-85px*100vw/1440px),-170px)] 
            left-1/2
            -translate-x-1/2
            "
          />
        </div>

        {/* Text content – desktop/tablet */}
        <div className="relative mx-auto  ">
          <h2
            className="
              font-['Inter700'] font-black uppercase tracking-tight
              text-[clamp(65px,calc(82px*100vw/1440px),146px)]
              leading-[110px]
            w-[clamp(450px,calc(534px*100vw/1440px),950px)] 
         h-[clamp(53px,calc(90px*100vw/1440px),160px)] 
         top-[clamp(100px,calc(420px*100vw/1440px),858px)]
         
         pb-[clamp(12px,calc(18px*100vw/1440px),32px)] 
         left-[clamp(100px,calc(470px*100vw/1440px),830px)]
         "
          >
            MEET QALZY
          </h2>

          <p
            className="
              font-['Inter'] font-normal text-[#919191]
              text-[clamp(27px,calc(34px*100vw/1440px),60px)]
              leading-[1.15] tracking-tight
              w-[clamp(350px,calc(419px*100vw/1440px),744px)] 
         h-[clamp(22px,calc(38px*100vw/1440px),67px)] 
         top-[clamp(310px,calc(530px*100vw/1440px),1000px)] 
         left-[clamp(150px,calc(513px*100vw/1440px),929px)]
            "
          >
            One-Tap Calorie Counting
          </p>

          <p
            className="
              font-['Inter'] font-normal text-[#919191]
              text-[clamp(24px,calc(30px*100vw/1440px),48px)]
              leading-[1.2]
             w-[clamp(400px,calc(312px*100vw/1440px),574px)] 
         h-[clamp(25px,calc(38px*100vw/1440px),67px)] 
         top-[clamp(330px,calc(575px*100vw/1440px),1100px)] 
         pt-[clamp(30px,calc(14px*100vw/1440px),24px)] 
         left-[clamp(-100px,calc(530px*100vw/1440px),1022px)]
            "
          >
            Fast. Precise. Easy.
          </p>

          {/* Vegetables image – larger version */}
          <img
            src={VegetableImage}
            alt="Fresh vegetables"
            className="
             top-[clamp(440px,calc(725px*100vw/1440px),1300px)] 
w-[clamp(450px,calc(1100px*100vw/1440px),2000px)] 
        h-[clamp(250px,calc(420px*100vw/1440px),600px)]
              object-contain
              left-1/2
            -translate-x-1/2
            "
          />
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/*                  < 425px (mobile)                */}
      {/* ──────────────────────────────────────────────── */}
      <div className="block min-[426px]:hidden relative w-full pt-30 pb-12">

        {/* Green wave – smaller & adjusted */}
        <img
          src={vectorImg}
          alt="Green wave background"
          className="
            absolute left-0 right-0 mx-auto
            w-full max-w-[425px]  min-w-[320px]
            h-auto
            
           top-[90px]
            object-contain
            z-10
          "
        />

        {/* Router – centered, smaller */}
        <img
          src={routerImg}
          alt="Qalzy router device"
          className="
            relative mx-auto
            w-[86%] max-w-[380px]
            object-contain
            mt-[-80px]
           
            z-20
          "
        />

        {/* Texts – stacked & centered for mobile */}
        <div className="px-5  mt-3 text-center">
          <h2
            className="
              font-['Inter700'] font-black uppercase
              text-[48px] xs:text-6xl
             
              leading-tight
              tracking-tight
            "
          >
            MEET QALZY
          </h2>

          <p
            className="
              font-['Inter'] font-normal text-[#919191]
              text-2xl xs:text-[26px]
              mt-2 leading-snug
            "
          >
            One-Tap Calorie Counting
          </p>

          <p
            className="
              font-['Inter'] font-normal text-[#919191]
              text-[25px] 
              mt-2
            "
          >
            Fast. Precise. Easy.
          </p>
        </div>

        {/* Vegetables – mobile size */}
        <img
          src={VegetableImagemobile}
          alt="Fresh vegetables"
          className="
            mx-auto mt-5
            w-[92%] max-w-[380px]
            object-contain
          "
        />
      </div>

    </div>
  );
};

export default QalzyApp;