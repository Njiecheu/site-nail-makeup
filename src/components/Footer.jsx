import { FaTiktok, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    prestations: [
      { name: 'Nail Art'},
      { name: 'Extensions'},
      { name: 'Maquillage'},
    ],
    infos: [
      { name: 'À Propos'},
      { name: 'Galerie', href: '/realisations' },
      { name: 'Contact'},
    ],
    legal: [
      { name: 'Confidentialité'},
      { name: 'Conditions'},
      { name: 'Mentions légales'},
    ],
  }

  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-1"
          >
            <motion.div 
              variants={fadeIn('down', 0.5)}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-xl font-bold text-pink-500">Wok&apos;Signature</span>
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6 text-sm"
            >
              Votre destination pour la beauté des ongles et du maquillage professionnel.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <a href='https://www.tiktok.com/@la_signature62?_r=1&_t=ZS-97uZ46acSFc' target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="w-4 h-4" />
                </a>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <a href='https://www.instagram.com/wok_signature?igsh=djlmc2tjaTFpZmM1&utm_source=qr' target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <a href="https://wa.me/237658225218" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div 
                  key={category}
                  variants={fadeIn('up', 0.3 * (categoryIndex + 1))}
                >
                  <motion.h3 
                    variants={textVariant(0.2)}
                    className="text-lg font-medium mb-4 text-gray-900 capitalize"
                  >
                    {category === 'prestations' ? 'Prestations' : 
                     category === 'infos' ? 'Informations' : 'Légal'}
                  </motion.h3>
                  <motion.ul 
                    variants={fadeIn('up', 0.4)}
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a 
                          whileHover={{ x: 5 }}
                          href={link.href} 
                          className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="border-t border-pink-100 mt-12 pt-8"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} Wok&apos;Signature. Tous droits réservés.
            </motion.p>
            <motion.p 
              variants={fadeIn('left', 1.0)}
              className="text-gray-600 text-sm"
            >
              Créé avec passion pour la beauté
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer