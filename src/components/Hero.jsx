import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
//import heroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-pink-50 w-fit px-4 py-2 rounded-full hover:bg-pink-100 transition-colors cursor-pointer group">
            <span className="text-pink-500 group-hover:scale-110 transition-transform">✨</span>
            <span className="text-sm font-medium text-pink-700">Nos prestations premium</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Sublimez votre beauté avec{' '}
          <span className="text-pink-500 relative inline-block">
            Nail art & Make up
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-300/60"></span>
          </span>{' '}
          professionnels
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Des artistes spécialisées pour transformer votre look au quotidien ou pour vos moments spéciaux. Extensions, Manucure créatif et maquillage professionnel.
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          {/* CTA Button */}
          <a href="#newsletter" className="bg-pink-500 text-white px-8 py-4 rounded-xl hover:bg-pink-600 cursor-pointer transition-all hover:shadow-lg hover:shadow-pink-200 active:scale-95">
            Prendre un rendez-vous
          </a>
          <a href="/realisations" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl hover:bg-pink-50 cursor-pointer transition-all inline-flex items-center justify-center">
            Découvrir nos prestations
          </a>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src="https://media.gettyimages.com/id/1322729004/fr/photo/set-of-manicure-tools-on-trendy-pastel-pink-background-nail-files-scissors-cuticle-clippers.jpg?s=612x612&w=0&k=20&c=uKXhhrS61eNHXvF0dv1rAJhNW7IMO108ZN26BFQbfwY="
            alt="Manucure et Make up professionnel"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero