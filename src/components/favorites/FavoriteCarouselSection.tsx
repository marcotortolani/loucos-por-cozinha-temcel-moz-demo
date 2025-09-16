'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import React from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import { FavoriteCarouselSectionItem } from '@/components/favorites/FavoriteCarouselSectionItem'
import { SectionTitle } from '@/components/text/SectionTitle'

type FavoriteCarouselSectionProps = {
  title?: string
  moreLink?: string
  items: Post[]
  isRounded?: boolean
  isLarge?: boolean
  color?: string
}

export const FavoriteCarouselSection: React.FC<
  FavoriteCarouselSectionProps
> = ({ title, moreLink = '#', items = [], color = 'text-[#FFB626] ' }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{title}</SectionTitle>
        {items.length > 4 && (
          <Link
            href={moreLink}
            className="text-white text-xs md:text-[16px]  font-normal flex items-center"
          >
            Ver más <ChevronRight size={20} className="ml-1" />
          </Link>
        )}
      </div>

      {items.length ? (
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
          {items.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <FavoriteCarouselSectionItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-black text-center bg-[#666666] py-4 rounded-xl ">
          No tienes contenido editorial disponible
        </div>
      )}
    </div>
  )
}
