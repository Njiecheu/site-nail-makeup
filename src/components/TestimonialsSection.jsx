import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Layla Boucher", 
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    text: "Les ongles sont absolument magnifiques ! Le design était exactement ce que j'imaginais. Je reviens toutes les 3 semaines. Service impeccable !",
  },
  {
    id: 2,
    name: "Amira Ben Salah",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "Maquillage parfait pour mon mariage ! Je me suis sentie magnifique tout le jour. L'artiste a vraiment compris ma vision.",
  },
  {
    id: 3,
    name: "Zoubida Mansour",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    text: "Les cils sont incroyables ! Ça change vraiment le regard. Je recommande vivement à toutes mes copines.",
  },
  {
    id: 4,
    name: "Sarah Dkhissi",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Professionnalisme de haut niveau. Chaque détail est pris en compte. C'est devenu mon salon de confiance.",
  },
  {
    id: 5,
    name: "Hana El Azzab",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Extensions d'ongles durables et belles. La qualité des produits se voit vraiment. Très satisfaite !",
  },
  {
    id: 6,
    name: "Leila Fatima",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Un vrai moment de détente et de pampering. L'équipe est accueillante et vraiment attentive à mes besoins.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ce que disent nos clients
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Des avis authentiques de nos clientes satisfaites
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col border border-rose-100"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-rose-500"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.p 
                  variants={fadeIn('up', 0.5 * (index + 1))}
                  className="text-gray-600 mb-3 text-sm flex-grow"
                >
                  {testimonial.text}
                </motion.p>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-medium text-gray-900"
                >
                  {testimonial.name}
                </motion.h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="flex justify-center gap-4 mt-4"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-button-prev-custom w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors"
          >
            <BsChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-button-next-custom w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors"
          >
            <BsChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TestimonialsSection;                     