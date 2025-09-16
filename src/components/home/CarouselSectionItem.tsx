import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'

import Default from '/public/images/default.webp'

type CarouselSectionItemProps = {
  item: Post
  section?: string
}

export const CarouselSectionItem: React.FC<CarouselSectionItemProps> = ({
  item,
  section = '',
}) => {
  const image = wpImage(item)

  return (
    <Link href={`${section}/${item?.slug}`} prefetch>
      <div
        className={`relative mb-2 w-full aspect-[3/5] md:aspect-[5/7] lg:aspect-[6/8] `}
      >
        <Image
          className={' object-cover rounded-lg '}
          src={image || Default}
          fill
          alt={item.title?.rendered as string}
        />
      </div>
      <div className="text-white text-[11px] font-medium md:text-[16px] whitespace-pre-line line-clamp-3 text-left">
        {item.title?.rendered}
      </div>
    </Link>
  )
}
