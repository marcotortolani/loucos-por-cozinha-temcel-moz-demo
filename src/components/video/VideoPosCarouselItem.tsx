import Default from '/public/images/default.webp'
import Image from 'next/image'
import React from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'

type VideoPostCarouselItemProps = {
  item: Post
  url?: string
}

export const VideoPostCarouselItem: React.FC<VideoPostCarouselItemProps> = ({
  item,
  url = '',
}) => {
  const image = wpImage(item) || Default
  return (
    <div>
      <Link href={`${url}/${item?.slug}`} prefetch>
        <div
          className={`relative  md:aspect-square h-[178px] md:h-[300px] lg:h-[350px] w-full flex items-center justify-center`}
        >
          <Image
            className="rounded-md"
            src={image}
            fill
            alt={item.title?.rendered as string}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      <Link href={`${url}/${item?.slug}`} prefetch>
        <div className="text-white text-[11px] font-medium md:text-[16px] whitespace-pre-line text-left">
          {item?.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
