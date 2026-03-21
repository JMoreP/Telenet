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
        

        <HowItWorks />
        
        <Plans />
        
        <Coverage />
        

        <FAQ />
       
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
