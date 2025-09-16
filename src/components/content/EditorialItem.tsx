'use client'
import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Post } from '@/lib/api/wp/wp-types'
import Link from 'next/link'
import { wpImage } from '@/lib/api/wp/wp-utils'

type EditorialItemProps = {
  item: Post
  url?: string
}

export const EditorialItem: React.FC<EditorialItemProps> = ({
  item,
  url = '',
}) => {
  const image = wpImage(item)

  return (
    <div>
      <Link href={`${url || '/contenido/editorial/'}/${item.slug}`} prefetch>
        <div className="relative mx-auto h-[144px] md:h-[300px] lg:h-[350px] md:w-full rounded-sm md:rounded-md lg:rounded-lg mb-2">
          <Image
            className={`rounded-[inherit]`}
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
      <Link href={`${url || '/contenido/editorial/'}/${item.slug}`} prefetch>
        <div className="text-white text-[11.3px]  md:text-xl  font-medium line-clamp-3  whitespace-pre-line text-left">
          {item?.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
