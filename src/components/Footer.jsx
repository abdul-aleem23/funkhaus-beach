import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      style={{ backgroundColor: '#f8f9fa' }} 
      className="py-8 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="font-akira text-xl font-bold mb-4" style={{ color: '#012169' }}>
            Funkhaus Beach Volleyball
          </h3>
          <p className="font-open-sans text-gray-600 text-sm">
            © 2024 Funkhaus Beach Volleyball. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}