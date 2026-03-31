import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Facility from './pages/Facility'
import AllStar from './pages/AllStar'
import Classes from './pages/Classes'
import PrivateLessons from './pages/PrivateLessons'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/all-star" element={<AllStar />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/private-lessons" element={<PrivateLessons />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
