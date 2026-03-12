import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Plans from './components/Plans'
import HowItWorks from './components/HowItWorks'
import Coverage from './components/Coverage'

import FAQ from './components/FAQ'

import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="gradient-line" />

        <HowItWorks />
        <div className="gradient-line" />
        <Plans />
        <div className="gradient-line" />
        <Coverage />
        <div className="gradient-line" />

        <FAQ />
        <div className="gradient-line" />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
