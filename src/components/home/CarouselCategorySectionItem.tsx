import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Category } from '@/lib/api/wp/wp-types'
import Link from 'next/link'

type CarouselCategorySectionItemProps = {
  item: Category
  section: string
}

export const CarouselCategorySectionItem: React.FC<
  CarouselCategorySectionItemProps
> = ({ item, section }) => {
  return (
    <Link href={`${section}/${item?.slug}`} prefetch>
      <div
        className={`relative mb-2 w-full aspect-[3/5] md:aspect-[5/7] lg:aspect-[6/8] `}
      >
        <Image
          className={' object-cover rounded-lg '}
          src={item.image || Default}
          fill
          alt={item.name as string}
        />
      </div>
      <div className="text-white text-[11px] font-medium md:text-[16px] whitespace-pre-line line-clamp-3 text-left">
        {item.name}
      </div>
    </Link>
  )
}
