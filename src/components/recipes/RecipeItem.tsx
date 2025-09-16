import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Category, Post } from '@/lib/api/wp/wp-types'
import Link from 'next/link'
import { wpImage } from '@/lib/api/wp/wp-utils'

type CategoryItemProps = {
  item: Post
  category: Category
}

export const RecipeItem: React.FC<CategoryItemProps> = ({ item, category }) => {
  const image = wpImage(item)
  return (
    <div className="flex flex-col">
      <Link
        href={`/recetas/${category.slug}/${item?.slug}`}
        prefetch
        className="mb-2"
      >
        <div className="relative mx-auto w-full h-[183px] md:h-[300px] lg:h-[350px] aspect-square rounded-sm mb-2">
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
      <Link href={`/recetas/${category.slug}/${item?.slug}`} prefetch>
        <div className="text-white text-[11.3px]  md:text-[16px] font-medium  whitespace-pre-line text-left">
          {item?.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
