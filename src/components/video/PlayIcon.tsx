'use client'
import Image from 'next/image'
import Play from '/public/icons/play.svg'

import React from 'react'

export const PlayIcon = () => (
  <div className={`relative w-[70px] h-[70px] cursor-pointer`}>
    <Image
      className="rounded-md"
      src={Play}
      fill
      alt="video-poster"
      style={{
        objectFit: 'cover',
      }}
    />
  </div>
)
