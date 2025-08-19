import { motion } from 'framer-motion'

export default function Cards() {
  const testimonials = [
    {
      quote: "Berlin's premier beach volleyball destination! The sand quality is perfect and the community is incredibly welcoming.",
      author: "Sarah Johnson",
      role: "Professional Beach Volleyball Player"
    },
    {
      quote: "Funkhaus Beach offers world-class beach volleyball facilities. Perfect for tournaments, training, and recreational play.",
      author: "Mike Rodriguez",
      role: "Beach Volleyball Coach"
    },
    {
      quote: "The best beach volleyball courts in Berlin. From beginner-friendly sessions to competitive matches - this place has it all.",
      author: "Emma Chen",
      role: "Beach Volleyball Enthusiast"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-akira text-3xl md:text-4xl font-bold mb-4" style={{ color: '#012169' }}>
            Beach Volleyball Community
          </h2>
          <p className="font-open-sans text-xl text-gray-700 max-w-2xl mx-auto">
            Join Berlin's most vibrant beach volleyball community at our premium courts
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
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
              <div className="mb-4 sm:mb-6">
                <svg className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#012169' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="font-open-sans text-black text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div>
                <div className="font-semibold text-black text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-xs sm:text-sm" style={{ color: '#012169' }}>{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}