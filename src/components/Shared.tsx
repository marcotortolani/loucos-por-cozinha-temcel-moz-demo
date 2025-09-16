'use client'

import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ShareIcon } from '@/components/icons'
import { Post, Tag } from '@/lib/api/wp/wp-types'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'

import {
  FacebookIcon,
  XtwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from '@/components/icons'
import { HASH_TAG } from '@/lib/constants'

type SharedProps = {
  item?: Post
  tags?: Tag[]
}

export const Shared: React.FC<SharedProps> = ({ item, tags }) => {
  // const url = typeof window !== 'undefined' ? window.location.href : ''
  const [url, setUrl] = useState('')
  const title = item?.title?.rendered
  const tagNames = tags?.map((tag) => `#${tag.name}`) as string[]
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setUrl(window.location.href)
  }, [])

  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenuTrigger>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <ShareIcon width={24} height={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="grid grid-cols-4 gap-2">
          <FacebookShareButton
            url={url}
            hashtag={[...HASH_TAG, ...tagNames].toString()}
          >
            <FacebookIcon width={30} height={30} fill="#363636" />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            hashtags={[...HASH_TAG, ...tagNames]}
          >
            <XtwitterIcon width={30} height={30} fill="#363636" />
          </TwitterShareButton>
          <WhatsappShareButton
            url={url}
            title={`Mirá este contenido de Locos por la cocina: ${title}`}
          >
            <WhatsappIcon width={30} height={30} fill="#363636" />
          </WhatsappShareButton>
          <TelegramShareButton
            url={url}
            title={`Mirá este contenido de Locos por la cocina: ${title}`}
          >
            <TelegramIcon width={30} height={30} fill="#363636" />
          </TelegramShareButton>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
