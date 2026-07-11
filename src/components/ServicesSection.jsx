import { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      title: "Manucure",
      description: "Designs personnalisés avec vernis gel de haute qualité, durables et brillants",
    },
    {
      title: "Extensions d'Ongles", 
      description: "Pose d'extensions (acrylique, gel) avec finitions parfaites et formes variées",
    },
    {
      title: "Maquillage du Jour",
      description: "Maquillage professionnel pour un look naturel et lumineux au quotidien",
    },
    {
      title: "French tips",
      description: "Pose élégante avec pointes nettes et finition clean pour un rendu intemporel.",
    },
    {
      title: "Incrustation",
      description: "Décoration sophistiquée avec paillettes, éléments 3D et incrustations artistiques.",
    },
    {
      title: "Babyboomer",
      description: "Dégradé doux et naturel du rose vers le blanc pour un effet chic et discret.",
    },
    {
      title: "3D flowers",
      description: "Fleurs en relief réalisées à la main pour un Manucure romantique et raffiné.",
    },
    {
      title: "Airbrush",
      description: "Application d'effets dégradés et motifs précis à l'aérographe pour un rendu moderne.",
    },
    {
      title: "Cat eyes",
      description: "Effet magnétique intense qui capte la lumière et donne de la profondeur aux ongles.",
    },
    {
      title: "Rhinestones",
      description: "Ajout de strass brillants pour une touche glamour et lumineuse.",
    },
    {
      title: "Travel service",
      description: "Prestation à domicile ou en déplacement pour plus de confort et de flexibilité.",
    },
    {
      title: "Shoot make up",
      description: "Maquillage pensé pour les shootings photo avec tenue longue durée et rendu impeccable.",
    },
    {
      title: "Home service",
      description: "Service à domicile pour bénéficier d'une prestation complète sans vous déplacer.",
    },
    {
      title: "Bridal make up",
      description: "Maquillage mariée élégant et durable, conçu pour sublimer votre journée spéciale.",
    },
  ]

  const featuredServices = services.slice(0, 4)

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
            <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
            </div>
            <span className="text-gray-600">Produits premium et de qualité</span>
          </motion.div>
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
            </div>
            <span className="text-gray-600">Artistes expérimentées et passionnées</span>
          </motion.div>
        </motion.div>
        <motion.button 
          variants={fadeIn('up', 0.9)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-pink-500 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-pink-600 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Voir tous les services
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {featuredServices.map((service, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            whileHover={{ scale: 1.05 }}
            className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-pink-100"
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
              className="text-pink-500 font-medium hover:text-pink-600 transition-colors"
            >
              
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[85vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Tous nos services</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <article key={index} className="rounded-2xl border border-pink-100 bg-pink-50 p-4">
                  <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
     </motion.div>
    </section>
  )
}

export default ServicesSection