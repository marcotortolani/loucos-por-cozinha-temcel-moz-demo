import Default from '/public/images/default.webp'
import Image from 'next/image'
import React from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type RecipeVideoPosterItemProps = {
  item: Post
}

export const RecipeVideoPosterItem: React.FC<RecipeVideoPosterItemProps> = ({
  item,
}) => {
  const { recipe } = useParams<{ recipe: string }>()

  const image = wpImage(item) || Default
  return (
    <div className="flex flex-col">
      <Link href={`/recetas/${recipe}/${item?.slug}`} prefetch>
        <div
          className={`relative  md:aspect-square h-[178px] md:h-[300px] lg:h-[350px] w-full flex items-center justify-center`}
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
        </div>
      </Link>
      <Link href={`/recetas/${recipe}/${item?.slug}`} prefetch className="mt-2">
        <div className="text-white text-[11.3px]  md:text-[16px]  font-medium  whitespace-pre-line text-left">
          {item?.title?.rendered}
        </div>
      </Link>
    </div>
  )
}
