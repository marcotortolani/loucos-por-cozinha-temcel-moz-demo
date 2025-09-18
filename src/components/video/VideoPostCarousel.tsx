'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Post } from '@/lib/api/wp/wp-types'
import { VideoPostCarouselItem } from '@/components/video/VideoPosCarouselItem'
import { SectionTitle } from '@/components/text/SectionTitle'

import dictionary from '@/dictionary/lang.json'

type VideoPostCarouselProps = {
  title?: string
  moreLink?: string
  items: Post[]
  color?: string
}

export const VideoPostCarousel: React.FC<VideoPostCarouselProps> = ({
  title,
  moreLink = '#',
  items = [],
  color = 'text-[#FFB626]',
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{title}</SectionTitle>
        <Link
          href={moreLink}
          className="text-white text-xs md:text-[16px]  font-normal flex items-center"
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
            slidesPerView: 3.25,
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
            slidesPerView: 4,
            spaceBetween: 20,
            direction: 'horizontal',
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 40,
            direction: 'horizontal',
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <VideoPostCarouselItem item={item} url={moreLink} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
