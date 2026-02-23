import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Hero from './components/sections/Hero'
import AIScale from './pages/AI-Scale'
import CTA from './pages/Calorie Tracking App'
import MeetQalzy from './components/sections/Meet-Qalzy'
import CalroieCounting from './components/sections/CalroieCounting'
import CaloriesConsumed from './components/sections/Calories Consumed'



function App() {
  return (
   <div className="min-h-screen">
      <Navbar />

     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-scale" element={<AIScale></AIScale>} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/cta" element={<CTA />} />
        <Route path="/shop" element={<Shop />} />

      
        <Route path="*" element={<div className="text-center py-20">404 - Page not found</div>} />
      </Routes>
      
     <MeetQalzy></MeetQalzy>
    <CalroieCounting></CalroieCounting>
      
      <div className='flex items-center absolute  min-[700px]:mt-[-200px] min-[1440px]:mt-[0px]'>

  
      </div>
    </div>
  )
}


export default App