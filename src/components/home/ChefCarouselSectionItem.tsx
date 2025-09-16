import React from 'react'
import Image from 'next/image'
import { Category } from '@/lib/api/wp/wp-types'
import Default from '/public/images/default.webp'
import Link from 'next/link'

type ChefCarouselSectionItemProps = {
  category: Category
}

export const ChefCarouselSectionItem: React.FC<
  ChefCarouselSectionItemProps
> = ({ category }) => {
  return (
    <div className={` flex justify-center flex-col w-auto items-center`}>
      <Link href={`/chefs/${category?.slug}`} prefetch className="w-full">
        <div className={`relative mb-2  aspect-square `}>
          <Image
            className={`${category?.featured ? ' border-4 border-primary ' : ''} rounded-full`}
            src={(category?.image as string) || Default}
            fill
            alt={category?.name as string}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="text-white text-[13px] leading-[auto] font-semibold md:text-xl whitespace-pre-line text-center">
          {category?.name}
        </div>
      </Link>
    </div>
  )
}
