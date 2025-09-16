import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@/lib/api/wp/wp-types'

type RecipePostItemProps = {
  category: Category
}

export const RecipePostItem: React.FC<RecipePostItemProps> = ({ category }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/recetas/${category.slug}`} prefetch>
        <div className="relative mx-auto w-full h-[183px] md:h-[300px] lg:h-[350px] md:w-full aspect-square rounded-sm mb-2">
          <Image
            className={`rounded-sm`}
            src={category.image as string}
            fill
            priority
            sizes="(min-width: 180px), 80vw, 100vw"
            alt={category.name as string}
            style={{
              objectFit: 'cover',
              animationDuration: `${4000 + 5000}ms`,
            }}
          />
        </div>
      </Link>
      <Link href={`/recetas/${category.slug}`} prefetch className="md:mt-1">
        <div className="text-white text-[11.3px] leading-[24px] font-medium md:text-[18px] whitespace-pre-line text-left">
          {category.name}
        </div>
      </Link>
    </div>
  )
}
