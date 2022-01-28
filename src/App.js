import About from './about/about'
import Hero from './hero/hero'
import Services from './services/services'
import './App.css'
import react from 'react'
import Contact from './contact/contact'
import Map from './google-map/google-map'
import Footer from './footer/footer'

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
