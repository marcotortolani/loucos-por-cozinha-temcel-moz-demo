'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import React from 'react'
import { Category } from '@/lib/api/wp/wp-types'
import { ChefCarouselSectionItem } from '@/components/home/ChefCarouselSectionItem'
import { SectionTitle } from '@/components/text/SectionTitle'

import dictionary from '@/dictionary/lang.json'

type ChefCarouselSectionProps = {
  title?: string
  moreLink?: string
  items: Category[]
  color?: string
}

export const ChefCarouselSection: React.FC<ChefCarouselSectionProps> = ({
  title,
  moreLink = '#',
  items = [],
  color = 'text-[#FFB626]',
}) => {
  // reorder chefs "featured"
  const chefsSorted = items.sort((a, b) => {
    return Number(b.featured) - Number(a.featured)
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{title}</SectionTitle>
        <Link
          href={moreLink}
          className="text-white text-xs md:text-[16px] font-normal flex items-center"
        >
          {dictionary['View more']} <ChevronRight size={20} className="ml-1" />
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
            slidesPerView: 3.75,
            spaceBetween: 10,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 3.75,
            spaceBetween: 15,
            direction: 'horizontal',
          },
          1024: {
            slidesPerView: 4.75,
            spaceBetween: 20,
            direction: 'horizontal',
          },
          1440: {
            slidesPerView: 5.75,
            spaceBetween: 20,
            direction: 'horizontal',
          },
        }}
      >
        {chefsSorted.map((category, index) => (
          <SwiperSlide key={index}>
            <ChefCarouselSectionItem category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
