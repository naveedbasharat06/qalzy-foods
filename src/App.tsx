import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />


      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/ai-calorie" element={<AiCalorie />} /> */}
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/calorie-tracking" element={<CalorieTracking />} /> */}
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
     
    

      
    </div>
  )
}

export default App