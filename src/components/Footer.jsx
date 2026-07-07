import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const footerLinks = {
    prestations: [
      { name: 'Nail Art', href: '#' },
      { name: 'Extensions', href: '#' },
      { name: 'Maquillage', href: '#' },
    ],
    infos: [
      { name: 'À Propos', href: '#' },
      { name: 'Galerie', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Confidentialité', href: '#' },
      { name: 'Conditions', href: '#' },
      { name: 'Mentions légales', href: '#' },
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
              <span className="text-2xl">💅</span>
              <span className="text-xl font-bold text-rose-500">NailBeauty</span>
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
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
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
                          className="text-gray-600 hover:text-rose-500 transition-colors text-sm"
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
          className="border-t border-rose-100 mt-12 pt-8"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} NailBeauty. Tous droits réservés.
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