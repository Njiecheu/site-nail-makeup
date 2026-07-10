import { HiArrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-gradient-to-r from-pink-500 to-pink-500 rounded-2xl overflow-hidden"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          {/* Background Gradient */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-pink-600 clip-path-slant hidden md:block"
          ></motion.div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2 
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              >
                Prêtes pour une transformation beauté ?
              </motion.h2>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                className="text-pink-100 text-sm sm:text-base"
              >
                Contactez-nous dès maintenant pour réserver votre prestation
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              className="w-full md:w-auto"
            >
              <motion.button 
                variants={fadeIn('up', 0.6)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto cursor-pointer bg-white text-pink-500 px-8 py-4 rounded-xl hover:bg-pink-50 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <a href="https://wa.me/237658225218" target="_blank" rel="noopener noreferrer">
                  Prendre un rendez-vous
                </a>
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  )
}

export default NewsletterSection
