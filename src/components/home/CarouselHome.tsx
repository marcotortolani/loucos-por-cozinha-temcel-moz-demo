'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'
// import { getWpCategories } from '@/lib/api/wp/wp-actions'

import dictionary from '@/dictionary/lang.json'

const ITEMS = [
  {
    title: dictionary['Editorial content'],
    subtitle: dictionary['editorial_subtitle'],
    buttonText: dictionary['View articles'],
    image: '/images/banner-editorial.webp',
    path: '/content/editorial',
  },
  {
    title: dictionary['Our chefs'],
    subtitle: dictionary['chefs_subtitle'],
    buttonText: dictionary['View chefs'],
    image: '/images/banner-chefs.webp',
    path: '/chefs',
  },
  {
    title: dictionary['Video recipes'],
    subtitle: dictionary['recipes_subtitle'],
    buttonText: dictionary['View videos'],
    image: '/images/banner-videorecetas.webp',
    path: '/recipes',
  },
  {
    title: dictionary['Mad Tips'],
    subtitle: dictionary['madtips_subtitle'],
    buttonText: dictionary['View content'],
    image: '/images/banner-madtips.webp',
    path: '/mad-tips',
  },
  {
    title: dictionary['Local Flavors'],
    subtitle: dictionary['Special content'],
    buttonText: dictionary['View content'],
    image: '/images/banner-local-flavors.webp',
    path: '/local-flavors',
  },
  // {
  //   title: dictionary["What should I cook?"],
  //   subtitle: dictionary["cooking_subtitle"],
  //   buttonText: dictionary["Cook now!"],
  //   image: QueCocino,
  //   path: '/',
  // },
]

export const CarouselHome = () => {
  // const { additionalConfig } = useAdditionalComponentsStore()
  // const { additionalSection } = additionalConfig
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [sliderItems, setSliderItems] = useState(ITEMS)

  // useEffect(() => {
  //   if (!additionalSection?.show) return

  //   getWpCategories({
  //     include: additionalSection['wp-category-id'].toString(),
  //   }).then((res) => {
  //     if (res) {
  //       const newItem = {
  //         title: additionalSection?.title || '',
  //         subtitle: res?.[0]?.description || dictionary['Special content'],
  //         buttonText: dictionary['View content'],
  //         image: res[0]?.image || '',
  //         path: `/${additionalSection?.['wp-category-slug']}`,
  //       }
  //       setSliderItems([newItem, ...sliderItems])
  //     }

  //   })
  // }, [additionalSection?.show])

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
      {ITEMS.map(({ title, subtitle, buttonText, image, path }, i) => (
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
