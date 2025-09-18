'use client'
import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { PRIMARY_COLOR } from '@/lib/constants'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'

type FavoriteCarouselSectionItemProps = {
  item: Post
}

export const FavoriteCarouselSectionItem: React.FC<
  FavoriteCarouselSectionItemProps
> = ({ item }) => {
  const image = wpImage(item)
  const { removeEditorial } = useFavoriteStore()
  return (
    <div className="flex justify-center flex-col w-auto relative">
      <Link href={`/content/editorial/${item.slug}`} prefetch>
        <div
          className={`relative mb-2   h-[178px]  md:h-[300px] lg:h-[350px]  w-full`}
        >
          <Image
            className={'rounded-lg'}
            src={image || Default}
            fill
            alt={item.title?.rendered as string}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      <div
        className="absolute z-50 right-0 mt-2 mr-2 top-2"
        onClick={() => removeEditorial(item.id as number)}
      >
        <Heart color={PRIMARY_COLOR} fill={PRIMARY_COLOR} size={15} />
      </div>
      <Link href={`/content/editorial/${item.slug}`} prefetch>
        <div className="text-white text-[11px] font-medium md:text-[16px] line-clamp-3 whitespace-pre-line text-left">
          {item.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
