'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'
import { getWpCategories } from '@/lib/api/wp/wp-actions'

const ITEMS = [
  {
    title: 'Contenido Editorial',
    subtitle:
      'Explorar el arte de la cocina a través de \n historias y recetas.',
    buttonText: 'Ver notas',
    image: '/images/editoriales-bg.webp',
    path: '/contenido/editorial',
  },
  {
    title: 'Nuestros cocineros',
    subtitle:
      'Cocina como un profesional con las recetas \n de nuestros chefs.',
    buttonText: 'Ver cocineros',
    image: '/images/cocineros-bg.webp',
    path: '/chefs',
  },
  {
    title: 'Video recetas',
    subtitle: 'Cocina paso a paso con nuestros videos.',
    buttonText: 'Ver videos',
    image: '/images/videorecetas-bg.webp',
    path: '/recetas',
  },
  {
    title: 'Loco Tips',
    subtitle:
      'Aprende los secretos de los chefs y cocina \n como un profesional.',
    buttonText: 'Ver contenido',
    image: '/images/locotips-bg.webp',
    path: '/loco-tips',
  },
  // {
  //   title: '¿Qué cocino?',
  //   subtitle:
  //     '!Chef Virtual viene a resolverte el problema! \n Te generamos una receta 100% personalizable.',
  //   buttonText: '!Cocinar ahora!',
  //   image: QueCocino,
  //   path: '/',
  // },
]

export const CarouselHome = () => {
  const { additionalConfig } = useAdditionalComponentsStore()
  const { additionalSection } = additionalConfig
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderItems, setSliderItems] = useState(ITEMS)

  useEffect(() => {
    if (!additionalSection?.show) return

    getWpCategories({
      include: additionalSection['wp-category-id'].toString(),
    }).then((res) => {
      if (res) {
        const newItem = {
          title: additionalSection?.title || '',
          subtitle: res?.[0]?.description || 'Contenido especial',
          buttonText: 'Ver contenido',
          image: res[0]?.image || '',
          path: `/${additionalSection?.['wp-category-slug']}`,
        }
        setSliderItems([newItem, ...sliderItems])
      }
    })
  }, [additionalSection?.show])

  return (
    <Swiper
      className="h-full w-full !pb-8 mb-4 md:px-4"
      initialSlide={0}
      navigation={false}
      pagination
      modules={[Navigation, Pagination, Autoplay]}
      speed={3000}
      loop
      onSlideChange={(el) => setCurrentIndex(el.realIndex)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          direction: 'horizontal',
        },
        768: {
          slidesPerView: 1.25,
          spaceBetween: 15,
          centeredSlides: true,
          direction: 'horizontal',
        },
        1024: {
          slidesPerView: 1.75,
          spaceBetween: 20,
          centeredSlides: true,
          direction: 'horizontal',
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          direction: 'horizontal',
        },
        1920: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: true,
          direction: 'horizontal',
        },
      }}
    >
      {sliderItems.map(({ title, subtitle, buttonText, image, path }, i) => (
        <SwiperSlide key={i}>
          <div className="relative mx-auto w-full md:w-[95%] aspect-video xl:max-w-4xl cursor-pointer flex flex-col items-center justify-center md:rounded-xl">
            <div className="relative top-0 w-full h-[470px] md:w-[580px] lg:w-full overflow-hidden md:rounded-3xl lg:rounded-4xl ">
              <div className=" z-20 absolute top-0 left-0 w-full h-full content-normal bg-black/30" />

              <motion.div
                key={image}
                initial={{ opacity: 0.5, x: 0, y: 0, scale: 1 }}
                animate={
                  currentIndex === i && { opacity: 1, x: 20, y: 10, scale: 1.1 }
                }
                exit={{ opacity: 0.5, x: 0, y: 0, scale: 1 }}
                transition={{
                  duration: 6,
                  delay: 0.1,
                  ease: 'easeInOut',
                  type: 'tween',
                  stagger: 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 2.5,
                }}
                className="z-0 absolute top-0 left-0 w-full h-full md:rounded-[inherit]"
              >
                {image ? (
                  <Image
                    className={`relative w-full h-auto object-cover md:rounded-[inherit] `}
                    src={image}
                    fill
                    priority={!i}
                    sizes="(min-width: 180px), 80vw, 100vw"
                    alt={title}
                  />
                ) : null}
              </motion.div>

              <div className="z-50 text-center absolute w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-white text-[32px] font-extrabold">
                  {title}
                </h1>
                <p className="text-white font-normal text-[14px] mb-4  whitespace-pre-line">
                  {subtitle}
                </p>
                <Link
                  href={path}
                  prefetch
                  className="uppercase inline-flex items-center justify-center rounded-[5px]  font-semibold text-[14px] h-10 py-[3px] px-[10px] bg-[#FFB626] text-black"
                >
                  {buttonText}
                </Link>
              </div>
              <h1></h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
