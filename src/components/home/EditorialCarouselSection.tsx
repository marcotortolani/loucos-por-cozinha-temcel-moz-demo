'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Post } from '@/lib/api/wp/wp-types'
import { SectionTitle } from '@/components/text/SectionTitle'
import { CarouselSectionItem } from './CarouselSectionItem'

type EditorialCarouselSectionProps = {
  title?: string
  moreLink?: string
  items: Post[]
  color?: string
}

export const EditorialCarouselSection: React.FC<
  EditorialCarouselSectionProps
> = ({ title, moreLink = '#', items = [], color = 'text-[#FFB626] ' }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{title}</SectionTitle>
        <Link
          href={moreLink}
          className="text-white text-xs md:text-[16px] font-normal flex items-center"
        >
          Ver más <ChevronRight size={20} className="ml-1" />
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
            slidesPerView: 3.15,
            spaceBetween: 10,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 3.15,
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
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselSectionItem item={item} section={moreLink} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
