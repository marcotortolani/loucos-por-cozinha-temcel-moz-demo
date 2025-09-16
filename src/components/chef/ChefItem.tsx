import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Category, Post } from '@/lib/api/wp/wp-types'
import Link from 'next/link'
import { wpImage } from '@/lib/api/wp/wp-utils'

type ChefItemProps = {
  item: Post
  category?: Category
}

export const ChefItem: React.FC<ChefItemProps> = ({ item, category }) => {
  const image = wpImage(item)

  return (
    <div>
      <Link href={`/chefs/${category?.slug}/${item?.slug}`} prefetch>
        <div className="relative w-[113px] h-[183px] md:w-full md:h-[300px] rounded-sm mb-2">
          <Image
            className={`rounded-sm`}
            src={image || Default}
            fill
            priority
            sizes="(min-width: 180px), 80vw, 100vw"
            alt={item?.title?.rendered as string}
            style={{
              objectFit: 'cover',
              animationDuration: `${4000 + 5000}ms`,
            }}
          />
        </div>
      </Link>
      <Link href={`/chefs/${category?.slug}/${item?.slug}`} prefetch>
        <div className="text-white text-[11.3px]  md:text-xl  font-medium  whitespace-pre-line text-left">
          {item?.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
