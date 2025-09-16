'use client'
import { Heart } from 'lucide-react'
import React from 'react'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { Shared } from '@/components/Shared'

type SharedAndFavoriteEditorialComponentProps = {
  item?: Post
  tags?: Tag[]
}

export const SharedAndFavoriteEditorialComponent: React.FC<
  SharedAndFavoriteEditorialComponentProps
> = ({ item, tags }) => {
  const { addEditorial, editorial, removeEditorial } = useFavoriteStore()
  return (
    <div className="flex">
      <div className="mr-2 cursor-pointer">
        <Heart
          color="white"
          fill={editorial.includes(item?.id as number) ? 'white' : 'none'}
          onClick={() =>
            editorial.includes(item?.id as number)
              ? removeEditorial(item?.id as number)
              : addEditorial(item?.id as number)
          }
        />
      </div>
      <Shared item={item} tags={tags} />
    </div>
  )
}
