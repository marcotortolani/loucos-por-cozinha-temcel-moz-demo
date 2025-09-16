'use client'
import { Heart } from 'lucide-react'
import React from 'react'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { Shared } from '@/components/Shared'

type SharedAndFavoriteShortComponentProps = {
  item?: Post
  tags?: Tag[]
}

export const SharedAndFavoriteShortComponent: React.FC<
  SharedAndFavoriteShortComponentProps
> = ({ item, tags }) => {
  const { shorts, addShort, removeShort } = useFavoriteStore()
  return (
    <div className="z-50 flex gap-2">
      <div className="mr-2 cursor-pointer">
        <Heart
          color="white"
          className=" cursor-pointer"
          fill={shorts.includes(item?.id as number) ? 'white' : 'none'}
          onClick={() =>
            shorts.includes(item?.id as number)
              ? removeShort(item?.id as number)
              : addShort(item?.id as number)
          }
        />
      </div>
      <Shared item={item} tags={tags} />
    </div>
  )
}
