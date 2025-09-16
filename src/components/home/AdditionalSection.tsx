'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import React, { useEffect, useState } from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import { SectionTitle } from '@/components/text/SectionTitle'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

import { AdditionalSectionItem } from './AdditionalSectionItem'

type EditorialCarouselSectionProps = {
  color?: string
}

export const AdditionalSection: React.FC<EditorialCarouselSectionProps> = ({
  color = 'text-[#FFB626] ',
}) => {
  const { additionalConfig } = useAdditionalComponentsStore()
  const { additionalSection } = additionalConfig
  const [posts, setPosts] = useState<Post[]>()
  const [showSection, setShowSection] = useState(false)

  useEffect(() => {
    if (!additionalSection?.show) return
    setShowSection(true)

    getWpPosts({
      categories: additionalSection['wp-category-id'].toString(),
    }).then((res) => setPosts(res?.posts))
  }, [additionalSection?.show])

  if (!showSection) return null

  return (
    <div className=" ">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{additionalSection?.title}</SectionTitle>
        <Link
          href={`/${additionalSection?.['wp-category-slug']}`}
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
        {posts?.map((item, index) => (
          <SwiperSlide key={index}>
            <AdditionalSectionItem
              item={item}
              categorySlug={additionalSection['wp-category-slug']}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
