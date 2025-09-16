'use client'
import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  const SOCIAL_ROUTES = [
    {
      Icon: InstagramIcon,
      title: 'Instagram',
      href: 'https://www.instagram.com/locoxlacocina/',
    },
  ]

  const ROUTES = [
    {
      title: 'Términos y condiciones',
      path: '/terminos-y-condiciones',
    },
    {
      title: 'Suscribirme',
      path: '/suscribirme',
    },
  ]

  return (
    <div className=" flex-col bg-black py-3 pb-4 justify-center items-center hidden lg:flex">
      <div className="container mx-auto px-3 lg:px-8 xl:max-w-screen-xl flex justify-center items-center my-4">
        <div className="w-full flex flex-col items-center ">
          <div className="w-full flex items-center mb-8 justify-between ">
            <div className="mr-4">
              <Image
                src="/icons/logo.svg"
                alt="logo-lxc"
                width={184}
                height={56}
              />
            </div>
            <div>
              <Image
                src={'/images/logo-mediamoob.webp'}
                alt="logo-moob"
                width={184}
                height={56}
              />
            </div>
          </div>
          <div className="flex items-center gap-8 ">
            {ROUTES.map(({ title, path }) => (
              <Link
                href={path}
                className="text-[16px] text-white mr-auto text-nowrap"
                key={title}
              >
                {title}
              </Link>
            ))}
            <div className="flex justify-start">
              <div className="text-white text-[16px] mr-2">Siguenos:</div>
              {SOCIAL_ROUTES.map(({ Icon, href }, key) => (
                <Link
                  href={href}
                  target="_blank"
                  className=" flex items-center text-[16px]"
                  key={key}
                >
                  <Icon color="white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
