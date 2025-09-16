'use client'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import { SharedAndFavoriteShortComponent } from '@/components/SharedAndFavoriteShortComponent'
import { PlayIcon } from '@/components/video/PlayIcon'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type ShortVideoItemProps = {
  item: Post
  currentItem: Post
  tags: Tag[]
}

export const ShortVideoItem: React.FC<ShortVideoItemProps> = ({
  item,
  currentItem,
  tags = [],
}) => {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (item.id !== currentItem.id) setPlaying(false)
  }, [item.id, currentItem.id])

  if (!item.video.url) return <div></div>
  return (
    <div className="h-full relative w-full aspect-video">
      <ReactPlayer
        ref={ref}
        url={`${item.video.url}` || 'https://player.vimeo.com/video/850634306'}
        width="100%"
        height="100%"
        playing={playing}
        autoPlay={1}
        controls={false}
      />
      <div className="absolute z-50 bottom-0 py-4 md:h-20 px-3 w-full  bg-black/20 md:rounded-b-lg flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold text-white text-xl w-[80%]">
            {(item.title?.rendered as string).replace(/&#8217;/g, "'")}
          </div>
          <SharedAndFavoriteShortComponent item={item} tags={tags} />
        </div>
      </div>
      <div
        className="absolute z-30 w-full h-[100dvh] md:h-full top-0 flex flex-col items-center justify-center "
        onClick={() => playing && setPlaying(!playing)}
      >
        <div onClick={() => setPlaying(!playing)}>
          {!playing ? <PlayIcon /> : null}
        </div>
      </div>
    </div>
  )
}
