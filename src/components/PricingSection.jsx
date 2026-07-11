import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const prestations = [
    {
      categorie: "Nail Art",
      services: [
        {
          name: "Manucure",
          items: [
            { name: "Capsule vernis gel & gelX", price: "3 000FCFA" },
            { name: "Chablon", price: "à partir de 10 000FCFA" },
            { name: "Gainage", price: "à partir de 6 000FCFA" },
          ]
        },
        {
          name: "Construction sur capsule",
          items: [
            { name: "Short", price: "5 000FCFA" },
            { name: "Medium", price: "6 000FCFA" },
            { name: "Long", price: "7 000FCFA" },
            { name: "Extra long", price: "10 000FCFA" },
          ]
        },
        {
          name: "Pédicure",
          items: [
            { name: "Vernis gel", price: "1 000FCFA" },
            { name: "Capsule vernis gel", price: "2 000FCFA" },
            { name: "Gainage", price: "à partir de 6 000FCFA" },
            { name: "Pédicure chaude", price: "3 500FCFA" },
          ]
        },
      ]
    },
    {
      categorie: "Maquillage",
      services: [
        { name: "Natural make up", price: "10 000FCFA"},
        { name: "Soft glam", price: "10 000FCFA"},
        { name: "Full glam", price: "15 000FCFA"},
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
                className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-pink-500"
              >
                {groupe.categorie}
              </motion.h3>
              
              {groupe.services.map((service, serviceIndex) => (
                service.items ? (
                  <motion.details
                    key={serviceIndex}
                    variants={fadeIn('right', 0.2 * (serviceIndex + 1))}
                    className="group rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900">
                      <span>{service.name}</span>
                      <span className="text-pink-500 transition-transform duration-200 group-open:rotate-180">⌄</span>
                    </summary>

                    <div className="border-t border-pink-100 px-4 pb-4 pt-2 space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between rounded-xl bg-pink-50 px-4 py-3"
                        >
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-sm font-bold text-pink-500">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.details>
                ) : (
                  <motion.div
                    key={serviceIndex}
                    variants={fadeIn('right', 0.2 * (serviceIndex + 1))}
                    className="flex h-[3.5rem] justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <motion.h4
                        variants={fadeIn('up', 0.3)}
                        className="font-semibold text-gray-900"
                      >
                        {service.name}
                      </motion.h4>
                    </div>
                    <motion.p
                      variants={fadeIn('left', 0.3)}
                      className="text-xl font-bold text-pink-500"
                    >
                      {service.price}
                    </motion.p>
                  </motion.div>
                )
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
            className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer font-semibold"
          >
            <a href="https://wa.me/237658225218">Nous Contacter</a>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PricingSection