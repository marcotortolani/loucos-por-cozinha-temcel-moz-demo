'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Post } from '@/lib/api/wp/wp-types'
import { RecipeVideoPosterItem } from '@/components/recipes/RecipeVideoPosterItem'

import dictionary from '@/dictionary/lang.json'

type RecipeVideoCarouselProps = {
  title?: string
  moreLink?: string
  items: Post[]
  color?: string
}

export const RecipeVideoCarousel: React.FC<RecipeVideoCarouselProps> = ({
  title,
  moreLink = '#',
  items = [],
  color = 'text-[#FFB626]',
}) => {
  if (items.length === 0) return null

  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <h1 className={`${color} text-[14px] font-bold md:text-[20px]`}>
          {title}
        </h1>
        <Link
          href={moreLink}
          className="text-white text-xs  font-normal md:text-[16px] flex items-center"
        >
          {dictionary['View more']}
          <ChevronRight size={20} className="ml-1" />
        </Link>
      </div>

      <Swiper
        className="relative h-full w-full mb-4"
        initialSlide={0}
        navigation={false}
        pagination={false}
        modules={[Navigation, Pagination, Autoplay]}
        speed={1500}
        breakpoints={{
          0: {
            slidesPerView: 3.25,
            spaceBetween: 10,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 3.25,
            spaceBetween: 15,
            direction: 'horizontal',
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 20,
            direction: 'horizontal',
          },
          1440: {
            slidesPerView: 4.2,
            spaceBetween: 20,
            direction: 'horizontal',
          },
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <RecipeVideoPosterItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
