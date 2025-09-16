'use client'
import { Heart } from 'lucide-react'
import React from 'react'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { Shared } from '@/components/Shared'

type SharedAndFavoriteVideoComponentProps = {
  item?: Post
  tags?: Tag[]
}

export const SharedAndFavoriteVideoComponent: React.FC<
  SharedAndFavoriteVideoComponentProps
> = ({ item, tags }) => {
  const { addVideo, videos, removeVideo } = useFavoriteStore()
  return (
    <div className="flex">
      <div className="mr-3 cursor-pointer">
        <Heart
          color="white"
          fill={videos.includes(item?.id as number) ? 'white' : 'none'}
          onClick={() =>
            videos.includes(item?.id as number)
              ? removeVideo(item?.id as number)
              : addVideo(item?.id as number)
          }
        />
      </div>
      <Shared tags={tags} />
    </div>
  )
}
