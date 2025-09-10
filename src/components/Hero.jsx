import { motion } from 'framer-motion'
import { handleSmoothScroll } from '../utils/smoothScroll'
import { useState, useEffect } from 'react'
import videoSrc from '../assets/padelhaus-2-desktop.mp4'
import ReactPlayer from 'react-player'

export default function Hero() {
  const [videoError, setVideoError] = useState(false)
  const [showVideo, setShowVideo] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Don't show video on mobile or if user prefers reduced motion
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile || prefersReducedMotion) {
      setShowVideo(false)
    }
  }, [prefersReducedMotion])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          objectPosition: 'center 40%' // Show more of the middle/bottom part of video
        }}
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => {
          console.log('Video error:', e)
          setVideoError(true)
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Fallback background image */}
      {videoError && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      )}
      
      {/* Gradient overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      ></div>
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto md:mt-28 lg:mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-akira text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Welcome to Padel House Berlin
        </motion.h1>
        
        <motion.p 
          className="font-open-sans text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          Play padel indoors or right by the spree
        </motion.p>
        
        <motion.button 
          className="font-open-sans px-12 py-3 sm:px-16 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg"
          style={{
            backgroundColor: '#FEDD00',
            color: '#000000'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#012169',
            color: '#FFFFFF',
            transition: { duration: 0.15 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleSmoothScroll(e, '#contact', 90)}
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  )
}