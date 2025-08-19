import { motion } from 'framer-motion'
import { handleSmoothScroll } from '../utils/smoothScroll'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto md:mt-28 lg:mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Berlin Beach Volleyball
        </motion.h1>
        
        <motion.p 
          className="font-open-sans text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Discover premium beach volleyball courts in Berlin. Train, compete, and connect with the city's most passionate volleyball community.
        </motion.p>
        
        <motion.button 
          className="font-open-sans px-8 py-3 sm:px-12 sm:py-4 rounded-sm text-base sm:text-lg font-semibold shadow-lg"
          style={{
            backgroundColor: '#FEDD00',
            color: '#000000'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#012169',
            color: '#FFFFFF',
            transition: { duration: 0.2 }
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