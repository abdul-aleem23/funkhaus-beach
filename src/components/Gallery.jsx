import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Beach volleyball players jumping to spike",
      caption: "Professional volleyball training sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Beach volleyball players jumping for the ball",
      caption: "Dynamic volleyball action and athleticism"
    },
    {
      src: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Beach volleyball team celebrating victory",
      caption: "Team spirit and tournament victories"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Beach volleyball court with net and sand",
      caption: "Premium beach volleyball facilities"
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-akira text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012169' }}>
            Experience Our Courts
          </h2>
          <p className="font-open-sans text-xl text-gray-700 max-w-2xl mx-auto">
            Take a virtual tour of our world-class beach volleyball facilities
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-64 md:h-96 object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </AnimatePresence>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentImage}
                  className="p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-open-sans text-lg font-medium">{images[currentImage].caption}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundColor: index === currentImage ? '#012169' : '#d1d5db'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}