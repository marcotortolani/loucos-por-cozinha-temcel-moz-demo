'use client'
//import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import dictionary from '@/dictionary/lang.json'

export const MenuFooter = () => {
  // const SOCIAL_ROUTES = [
  //   {
  //     Icon: InstagramIcon,
  //     title: 'Instagram',
  //     href: 'https://www.instagram.com/locoxlacocina/',
  //   },
  // ]

  const ROUTES = [
    {
      title: dictionary['Terms and Conditions'],
      path: '/terms',
    },
    {
      title: dictionary['Subscribe'],
      path: '/subscribe',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* <div className="flex border-b border-b-white pb-2">
        <div className="text-white text-[16px] mr-2">
          {dictionary['Follow us']}:
        </div>
        {SOCIAL_ROUTES.map(({ Icon, href }, key) => (
          <Link
            href={href}
            target="_blank"
            className="mr-2 flex items-center"
            key={key}
          >
            <Icon color="white" className="mr-2" />
          </Link>
        ))}
      </div> */}
      <div className="my-4">
        <Image
          src={'/images/logo-mediamoob.webp'}
          alt="logo-moob"
          width={184}
          height={56}
          className="mb-1"
        />
        <div className="text-xs text-white">
          {dictionary['This is a Media Moob site']}
        </div>
      </div>
      <div className="flex">
        {ROUTES.map(({ title, path }) => (
          <Link
            href={path}
            className="mr-2 text-xs text-white underline"
            key={title}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  )
}
