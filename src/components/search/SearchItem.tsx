import React from 'react'
import Image from 'next/image'
import Default from '/public/images/default.webp'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'

type SearchItemProps = {
  item: Post
}

export const SearchItem: React.FC<SearchItemProps> = ({ item }) => {
  const image = wpImage(item)

  const editorialRoute = item.video.url ? 'videos' : 'editorial'

  return (
    <div>
      <Link href={`/content/${editorialRoute}/${item.slug}`} prefetch>
        <div className="relative h-[184px] w-full md:h-[300px] rounded-sm mb-1">
          <Image
            className="rounded-sm"
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
      <Link href={`/content/${editorialRoute}/${item.slug}`} prefetch>
        <div className="text-white text-[11px] font-medium md:text-[16px] whitespace-pre-line text-left">
          {item.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
