import Banner from '../components/sections/Banner'
import Hero from '../components/sections/Hero'
import MeetQalzy from '../components/sections/Meet-Qalzy'
export default function Home() {
  return (
    <>
    
      <Banner />
      <div className='  pt-[154px]

       

      
       
      
        pt-[clamp(154px,calc(168px*100vw/1440px),280px)] 
       
        min-[2300px]:pt-[clamp(260px,calc(268px*100vw/2300px),270px)] 
        min-[2400px]:pt-[clamp(270px,calc(271px*100vw/2400px),280px)] 
          min-[2560px]:pt-[clamp(270px,calc(271px*100vw/2400px),280px)] 
        
        '>
      <Hero />


      
     

    </div>

    
    </>
  )
}