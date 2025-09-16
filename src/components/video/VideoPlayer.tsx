'use client'

import type { PlayerProps } from 'next-video'
import ReactPlayer from 'react-player'
import React, { useRef } from 'react'

export default function VideoPlayer(props: PlayerProps) {
  // const { asset, src, poster, blurDataURL, thumbnailTime, ...rest } = props
  const ref = useRef(null)

  const { poster } = props
  const config = {
    file: { attributes: { poster } },
    iframeParams: { fullscreen: 0 },
  }

  return (
    <ReactPlayer
      ref={ref}
      url="https://player.vimeo.com/video/322076576?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      config={config}
      width="100%"
      height="100%"
      controls={false}
      // playIcon={<div className='absolute top-0'>test</div>}
      controlsList="nofullscreen"
    />
  )
}
