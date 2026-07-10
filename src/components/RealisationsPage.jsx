import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/navigation'
import { fadeIn, textVariant } from '../utils/motion'
import { galleryItems } from '../assets/data'

const RealisationsPage = () => {
  const [showAll, setShowAll] = useState(false)

  const featuredItems = useMemo(() => galleryItems.slice(0, 4), [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-white pt-28 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-start">
          <a href="/" className="inline-flex items-center rounded-xl border border-pink-200 px-5 py-3 font-semibold text-pink-600 hover:bg-pink-50 transition-colors">
            Retour à l&apos;accueil
          </a>
        </div>

        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" className="text-center mb-12">
          <motion.span variants={fadeIn('up', 0.3)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium mb-4">
            ✨ Catalogue des réalisations
          </motion.span>
          <motion.h1 variants={textVariant(0.4)} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nail art & makeup déjà réalisés
          </motion.h1>
          <motion.p variants={fadeIn('up', 0.5)} className="text-gray-600 max-w-2xl mx-auto">
            Parcourez une sélection de nos créations pour vous inspirer avant votre rendez-vous.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" className="relative mb-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            navigation={{
              nextEl: '.swiper-button-next-gallery',
              prevEl: '.swiper-button-prev-gallery',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {featuredItems.map((item) => (
              <SwiperSlide key={item.id} className="py-4">
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-pink-100">
                  <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-sm font-medium text-pink-500 mb-1">{item.category}</p>
                    <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-6">
            <button className="swiper-button-prev-gallery w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
              <BsChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-gallery w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
              <BsChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="text-center mb-10">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            {showAll ? 'Masquer la galerie complète' : 'Voir tout'}
          </button>
        </div>

        {showAll && (
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <article key={item.id} className="rounded-3xl overflow-hidden bg-white shadow-md border border-pink-100">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm font-medium text-pink-500">{item.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </article>
            ))}
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <a href="/" className="inline-flex items-center rounded-xl border border-pink-200 px-6 py-3 font-semibold text-pink-600 hover:bg-pink-50 transition-colors">
            Retour à l&apos;accueil
          </a>
        </div>
      </section>
    </main>
  )
}

export default RealisationsPage