
import VectorBg from '../assets/Calories Consumed/Vector3.png';           // the big background vector
import FruitBoard from '../assets/Calories Consumed/Fruit board.png';          // ../assetc/fruit board
import CalorieConsumedText from '../assets/Calories Consumed/Calories consumed.png'; // caloieconsumed (probably typo)
import AppleTag from '../assets/Calories Consumed/Apple tag.png';              // apple tag
import Apple from '../assets/Calories Consumed/Apple.png';                     // apple

export default function CaloriesConsumed() {
  return (
    <div
      className="
        relative
        z-20
        
        min-[2560px]:top-[500px]
        min-[375px]:w-[375px] min-[375px]:[153px] 
        min-[2560px]:w-[2560px] min-[2560px]:h-[1029px] 
        min-[1440px]:w-[1440px] min-[1440px]:h-[579px]
         bg-white mx-auto
      "
    >
      {/* 1. Big background vector - extends outside */}
      <img
        src={VectorBg}
        alt="background vector"
        className="
          absolute pointer-events-none
          
          w-full h-[516.16px]
          min-[2560px]:h-[917px]

          min-[2560px]:top-[54px]
          top-[31px] left-1/2 -translate-x-1/2
        "
      />

      {/* 2. Fruit board image */}
      <img
        src={FruitBoard}
        alt="fruit board"
        className="
          absolute pointer-events-none
          w-[1245.11px] h-[426.41px]

          min-[2560px]:w-[2213px] min-[2560px]:h-[757px]
         
         
          top-[83.3px] left-[97.29px]

          min-[2560px]:top-[146px] left-[171px]
          rounded-[27.29px]
        "
      />

      {/* 3. "Calories Consumed" text / graphic */}
      <img
        src={CalorieConsumedText}
        alt="calories consumed"
        className="
          absolute pointer-events-none

          w-[272.53px] h-[195.92px]
min-[2560px]:w-[483px]   min-[2560px]:h-[346px]

          top-[64px] left-[48px]

             top-[113px] left-[84px]
        "
      />

      {/* 4. Apple tag (rounded rectangle with padding) */}
      <div
        className="
          absolute 
          w-[210px] h-[87px]

          min-[2560px]:w-[373px] min-[2560px]:h-[153px]
         
         
          top-[262.67px] left-[1183px]
             top-[463px] left-[2093px]
          bg-white/90 backdrop-blur-sm rounded-[24px]
          p-5 px-[15.16px] pb-[15.16px] pt-5
        "
      >
        <img
          src={AppleTag}
          alt="apple tag content"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 5. Small apple floating near the tag */}
      <img
        src={Apple}
        alt="apple"
        className="
          absolute pointer-events-none
          w-[144.74px] h-[111.05px]
min-[2560px]:w-[254px] min-[2560px]:h-[196px]
         

          top-[228.48px] left-[1261.67px]

             top-[403px] left-[2242px]
        "
      />
    </div>
  );
}

  