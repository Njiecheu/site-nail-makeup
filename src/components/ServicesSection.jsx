import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: "💎",
      title: "Nail Art Classique",
      description: "Designs personnalisés avec vernis gel de haute qualité, durables et brillants",
    },
    {
      icon: "👑",
      title: "Extensions d'Ongles", 
      description: "Pose d'extensions (acrylique, gel) avec finitions parfaites et formes variées",
    },
    {
      icon: "🌸",
      title: "Nail Design Premium",
      description: "Créations exclusives avec strass, foil doré, effets 3D et techniques avancées",
    },
    {
      icon: "💄",
      title: "Maquillage du Jour",
      description: "Maquillage professionnel pour un look naturel et lumineux au quotidien",
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
     <motion.div 
      variants={fadeIn('up', 0.3)}
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
     >
       {/* Header */}
       <motion.div 
        variants={fadeIn('right', 0.4)}
        className="md:w-1/3"
       >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
        >
          Nos Prestations Beauté
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="text-gray-600 text-lg mb-4 md:w-4/5"
        >
          Découvrez notre large gamme de services pour sublimer votre beauté
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="space-y-3"
        >
          <motion.div 
            variants={fadeIn('right', 0.7)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            </div>
            <span className="text-gray-600">Produits premium et de qualité</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            </div>
            <span className="text-gray-600">Artistes expérimentées et passionnées</span>
          </motion.div>
        </motion.div>
        <motion.button 
          variants={fadeIn('up', 0.9)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-rose-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-rose-600 transition-colors"
        >
          Voir tous les services
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05 }}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-rose-100"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="mb-4 text-3xl"
            >
              {service.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2 text-gray-900"
            >
              {service.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.5 * (index + 1))}
              className="text-gray-600 mb-4"
            >
              {service.description}
            </motion.p>
            <motion.a 
              variants={fadeIn('up', 0.6 * (index + 1))}
              href="#"
              className="text-rose-500 font-medium hover:text-rose-600 transition-colors"
            >
              EN SAVOIR PLUS →
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
     </motion.div>
    </section>
  )
}

export default ServicesSection