import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import RealisationsPage from './components/RealisationsPage'
import BackToTop from './components/BackToTop'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const onLoad = () => setTimeout(() => setLoading(false), 300)
    window.addEventListener('load', onLoad)
    const fallback = setTimeout(() => setLoading(false), 6000)
    return () => {
      window.removeEventListener('load', onLoad)
      clearTimeout(fallback)
    }
  }, [])

  if (path === '/realisations') {
    return (
      <>
        <RealisationsPage />
      </>
    )
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-rose-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        {/*<CompanyLogo />*/}
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
      <BackToTop />
        {loading && path === '/' && (
          <div className="splash">
            <img src="/logo.png" alt="logo" className="splash-logo" />
          </div>
        )}
    </main>
  )
}

export default App
