import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const prestations = [
    {
      categorie: "Nail Art",
      services: [
        { name: "Nail Art Classique", price: "35€", duration: "45 min" },
        { name: "Extensions Gel", price: "55€", duration: "60 min" },
        { name: "Extensions Acrylique", price: "45€", duration: "60 min" },
        { name: "Nail Design Premium", price: "65€", duration: "75 min" }
      ]
    },
    {
      categorie: "Maquillage",
      services: [
        { name: "Maquillage du Jour", price: "40€", duration: "45 min" },
        { name: "Maquillage Soirée", price: "55€", duration: "60 min" },
        { name: "Maquillage Mariée", price: "85€", duration: "90 min" },
        { name: "Extensions de Cils", price: "50€", duration: "60 min" }
      ]
    }
  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={textVariant(0.3)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Nos Tarifs
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez nos tarifs compétitifs pour chaque prestation. Les prix peuvent être ajustés selon votre demande spécifique.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="grid md:grid-cols-2 gap-12"
        >
          {prestations.map((groupe, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              className="space-y-4"
            >
              <motion.h3
                variants={textVariant(0.4)}
                className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-rose-500"
              >
                {groupe.categorie}
              </motion.h3>
              
              {groupe.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  variants={fadeIn('right', 0.2 * (serviceIndex + 1))}
                  className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <motion.h4
                      variants={fadeIn('up', 0.3)}
                      className="font-semibold text-gray-900"
                    >
                      {service.name}
                    </motion.h4>
                    <motion.p
                      variants={fadeIn('up', 0.4)}
                      className="text-sm text-gray-500"
                    >
                      {service.duration}
                    </motion.p>
                  </div>
                  <motion.p
                    variants={fadeIn('left', 0.3)}
                    className="text-xl font-bold text-rose-500"
                  >
                    {service.price}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.9)}
          className="text-center mt-16"
        >
          <motion.p 
            variants={fadeIn('up', 1.0)}
            className="text-gray-600 mb-6"
          >
            Vous avez une demande spécifique ou un forfait personnalisé ?
          </motion.p>
          <motion.button 
            variants={fadeIn('up', 1.1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors cursor-pointer font-semibold"
          >
            Nous Contacter
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PricingSection