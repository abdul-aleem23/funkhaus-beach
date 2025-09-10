import { motion } from 'framer-motion'

export default function Cards() {
  const features = [
    {
      title: "BEAUTIFUL RIVERSIDE COURT",
      description: "Play padel tennis with breathtaking water views, right on the banks of the Spree. A one of a kind setting in the heart of Berlin where sport meets atmosphere."
    },
    {
      title: "PREMIUM INDOOR COURTS",
      description: "Enjoy year-round play on our industrial inspired indoor courts with high ceilings, professional lighting, and ideal playing conditions."
    },
    {
      title: "PERFECT LOCATION",
      description: "Just 5 minutes from Berlin Ostkreuz station with easy public transport access. Coming soon: floating saunas and riverside gastronomy."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-center">
                <h3 className="font-akira text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#012169' }}>
                  {feature.title}
                </h3>
                <p className="font-open-sans text-gray-700 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}