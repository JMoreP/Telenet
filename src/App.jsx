import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Coverage from './components/Coverage'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="gradient-line" />
        <Features />
        <div className="gradient-line" />
        <Plans />
        <div className="gradient-line" />
        <HowItWorks />
        <div className="gradient-line" />
        <Coverage />
        <div className="gradient-line" />
        <Testimonials />
        <div className="gradient-line" />
        <FAQ />
        <div className="gradient-line" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
