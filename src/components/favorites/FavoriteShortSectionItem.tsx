'use client'
import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'

import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { PlayIcon } from '@/components/video/PlayIcon'
import { Heart } from 'lucide-react'
import { PRIMARY_COLOR } from '@/lib/constants'

type FavoriteShortSectionItemProps = {
  item: Post
}

export const FavoriteShortSectionItem: React.FC<
  FavoriteShortSectionItemProps
> = ({ item }) => {
  const image = wpImage(item) || Default
  const { removeShort } = useFavoriteStore()
  return (
    <div className="flex justify-center flex-col w-auto relative">
      <Link href={`/content/videos/${item.slug}`} prefetch>
        <div
          className={`relative h-[220px] md:h-[300px] lg:h-[350px] w-full flex items-center justify-center mb-2`}
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
      <div
        className="absolute z-50 right-0 mt-2 mr-2 top-0 cursor-pointer"
        onClick={() => removeShort(item.id as number)}
      >
        <Heart color={PRIMARY_COLOR} fill={PRIMARY_COLOR} size={15} />
      </div>
      <Link href={`/content/videos/${item.slug}`} prefetch>
        <div className="text-white text-[11px] font-medium md:text-[16px] line-clamp-3 whitespace-pre-line text-left">
          {item.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
