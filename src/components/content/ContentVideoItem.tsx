import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'

type ContentVideoItemProps = {
  item: Post
}

export const ContentVideoItem: React.FC<ContentVideoItemProps> = ({ item }) => {
  const image = wpImage(item)

  return (
    <div>
      <Link href={`/content/videos/${item.slug}`} prefetch>
        <div className="relative mx-auto h-[183px] w-full  md:h-[300px] lg:h-[350px]  rounded-lg mb-2">
          <Image
            className={`rounded-md`}
            src={image || Default}
            fill
            priority
            sizes="(min-width: 180px), 80vw, 100vw"
            alt={item.title?.rendered as string}
            style={{
              objectFit: 'cover',
              animationDuration: `${4000 + 5000}ms`,
            }}
          />
        </div>
      </Link>
      <Link href={`/content/videos/${item.slug}`} prefetch>
        <div className="text-white font-medium text-[11.35px] line-clamp-3 md:text-[16px] text-left">
          {item.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
