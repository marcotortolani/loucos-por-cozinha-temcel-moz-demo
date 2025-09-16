import Default from '/public/images/default.webp'
import Image from 'next/image'
import React from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import { PlayIcon } from '@/components/video/PlayIcon'
import Link from 'next/link'

type ShortPosterItemProps = {
  item: Post
}

export const ShortPosterItem: React.FC<ShortPosterItemProps> = ({ item }) => {
  const image = wpImage(item) || Default
  return (
    <Link href={`/shorts/${item.slug}`} prefetch>
      <div
        className={`relative aspect-square h-[268px] md:h-[300px] lg:h-[350px]  w-full flex items-center justify-center`}
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
        <div className="bg-black bg-opacity-30 absolute z-1 w-full h-full"></div>
        <PlayIcon />
      </div>
    </Link>
  )
}
