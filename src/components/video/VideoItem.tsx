'use client'
import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Post } from '@/lib/api/wp/wp-types'
import { PlayIcon } from '@/components/video/PlayIcon'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type VideoItemProps = {
  item: Post
}

export const VideoItem: React.FC<VideoItemProps> = ({ item }) => {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  if (!item.video.url) return <div></div>
  return (
    <div
      className="relative bg-White/90 w-full aspect-video overflow-hidden h-[210px] md:h-[420px] lg:h-[550px] flex items-center justify-center"
      onClick={() => setPlaying(!playing)}
    >
      <ReactPlayer
        ref={ref}
        url={item.video.url || 'https://player.vimeo.com/video/850634306'}
        width="100%"
        height="100%"
        className=" w-full h-full"
        controls
        playing={playing}
        onPause={() => setPlaying(!playing)}
        config={{
          vimeo: {
            playerOptions: {
              iframeParams: { fullscreen: 0 },
            },
          },
        }}
      />
      {!playing && (
        <div className="absolute w-full h-full flex justify-center items-center z-50">
          <PlayIcon />
        </div>
      )}
    </div>
  )
}
