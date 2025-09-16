'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import { ShortVideoItem } from '@/components/video/ShortVideoItem'

type VideoPlayerListProps = {
  items: Post[]
  tags: Tag[]
  defaultIndex?: number
}

export const VideoPlayerList: React.FC<VideoPlayerListProps> = ({
  items,
  defaultIndex = 0,
  tags = [],
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(defaultIndex)
  const currentItem = items[currentIndex]

  return (
    <div className="relative w-screen h-[100dvh] md:h-[70dvh] max-w-md ">
      <Swiper
        initialSlide={defaultIndex}
        slidesPerView={1}
        direction="vertical"
        className="w-full h-full md:bg-black md:rounded-lg"
        onSlideChange={(slide) => {
          setCurrentIndex(slide.activeIndex)
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative h-[100dvh] md:h-[70dvh] pointer-events-auto md:bg-black md:rounded-lg"
          >
            <ShortVideoItem item={item} currentItem={currentItem} tags={tags} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
