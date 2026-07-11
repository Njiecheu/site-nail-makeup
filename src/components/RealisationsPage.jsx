import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { fadeIn, textVariant } from '../utils/motion'
import { galleryItems } from '../assets/data'

const RealisationsPage = () => {
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [previewItem, setPreviewItem] = useState(null)
  const swiperRefs = useRef([])

  const galleryFilters = ['All', 'Nail art', 'Make up']

  const filteredGalleryItems = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryItems
    }

    return galleryItems.filter((item) => item.category === (activeFilter === 'Make up' ? 'Make up' : 'Nail art'))
  }, [activeFilter])

  const carouselRows = useMemo(() => {
    const sourceItems = galleryItems
    const firstRow = sourceItems.filter((_, index) => index % 2 === 0)
    const secondRow = sourceItems.filter((_, index) => index % 2 === 1)

    return [
      firstRow.length > 0 ? firstRow : sourceItems,
      secondRow.length > 0 ? secondRow : sourceItems,
    ]
  }, [])

  const handleCarouselMouseEnter = (rowIndex) => {
    swiperRefs.current[rowIndex]?.autoplay?.stop()
  }

  const handleCarouselMouseLeave = (rowIndex) => {
    swiperRefs.current[rowIndex]?.autoplay?.start()
  }

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

        {!showAll && (
          <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" className="space-y-8 mb-10">
            {[0, 1].map((rowIndex) => (
              <div
                key={rowIndex}
                onMouseEnter={() => handleCarouselMouseEnter(rowIndex)}
                onMouseLeave={() => handleCarouselMouseLeave(rowIndex)}
              >
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  loop
                  speed={4500}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: rowIndex === 1,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="pb-2"
                  onSwiper={(swiper) => {
                    swiperRefs.current[rowIndex] = swiper
                  }}
                >
                  {carouselRows[rowIndex].map((item) => (
                    <SwiperSlide key={`${rowIndex}-${item.id}`} className="py-4">
                      <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-pink-100">
                        <button
                          type="button"
                          className="block w-full"
                          onClick={() => setPreviewItem(item)}
                        >
                          <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                        </button>
                        <div className="p-5">
                          <h2 className="text-sm font-medium text-pink-500 mb-1">{item.title ?? item.category}</h2>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}

            {/*<div className="flex justify-center gap-4">
              <button className="swiper-button-prev-gallery w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
                <BsChevronLeft className="w-5 h-5" />
              </button>
              <button className="swiper-button-next-gallery w-11 h-11 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
                <BsChevronRight className="w-5 h-5" />
              </button>
            </div>*/}
          </motion.div>
        )}

        {showAll && (
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-gray-700 border border-pink-200 hover:bg-pink-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <div className="text-center mb-10">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            {showAll ? 'Masquer la galerie' : 'Voir toute la galerie'}
          </button>
        </div>

        {showAll && (
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGalleryItems.map((item) => (
              <article key={item.id} className="rounded-3xl overflow-hidden bg-white shadow-md border border-pink-100">
                <button
                  type="button"
                  className="block w-full"
                  onClick={() => setPreviewItem(item)}
                >
                  <img src={item.image} alt={item.title ?? item.category} className="h-64 w-full object-cover" />
                </button>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-pink-500">{item.title ?? item.category}</h3>
                </div>
              </article>
            ))}
          </motion.div>
        )}

        {previewItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
            onClick={() => setPreviewItem(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow hover:bg-white"
              >
                Fermer
              </button>
              <img
                src={previewItem.image}
                alt={previewItem.title ?? previewItem.category}
                className="max-h-[80vh] w-full object-contain bg-black"
              />
              <div className="p-5">
                <p className="text-sm font-medium text-pink-500">{previewItem.category}</p>
                <h3 className="text-2xl font-bold text-gray-900">{previewItem.title ?? previewItem.category}</h3>
              </div>
            </div>
          </div>
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