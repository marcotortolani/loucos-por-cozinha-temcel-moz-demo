import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Category } from '@/lib/api/wp/wp-types'

type CategoryPrincipalItemProps = {
  category: Category
}

export const RecipePrincipalItem: React.FC<CategoryPrincipalItemProps> = ({
  category,
}) => {
  return (
    <div className="flex flex-col">
      <Link href={`/recetas/${category.slug}`} prefetch className="w-full">
        <div className="relative aspect-square mb-1">
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
      <Link href={`/recetas/${category.slug}`} prefetch className="mt-2">
        <div className="text-white text-[10px] font-light md:text-[16px] whitespace-pre-line text-center">
          {category.name}
        </div>
      </Link>
    </div>
  )
}
