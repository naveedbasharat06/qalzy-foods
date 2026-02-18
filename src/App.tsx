import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Hero from './components/sections/Hero'
import AIScale from './pages/AI-Scale'
import CTA from './pages/Calorie Tracking App'

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
    </div>
  )
}


export default App