import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Footer from './components/Footer'
import FAQ from './components/FAQ'; // Import ist da, super!

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Pricing />
        <Booking />
        {/* HIER MUSSTE DIE FAQ HIN, DAMIT SIE AUF DER SEITE ERSCHEINT */}
        <FAQ /> 
      </main>
      <Footer />
    </div>
  )
}

export default App
