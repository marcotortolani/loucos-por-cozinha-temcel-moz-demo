'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { MenuItem } from '@/components/ui/menu/menu-types'

import {
  BookIcon,
  FavoriteIcon,
  HomeIcon,
  SearchIcon,
  ShortIcon,
} from '@/components/icons'

type MenuMobileProps = {
  menuClassName?: string
  menuItemClassName?: string
  color?: string
  hideTitle?: boolean
  titleColor?: string
  titleActiveColor?: string
  iconActiveColor?: string
  iconColor?: string
  itemColor?: string
  activeItemColor?: string
}

const ICON_WIDTH = 28
const ICON_HEIGHT = 28

import dictionary from '@/dictionary/lang.json'

const MenuMobile: React.FC<MenuMobileProps> = ({
  menuClassName = 'bg-black',
  menuItemClassName = 'text-white',
  titleActiveColor = 'text-white',
  iconActiveColor = 'white',
  titleColor = 'text-black',
  iconColor = 'black',
  hideTitle = false,
  itemColor = 'bg-transparent',
  activeItemColor = 'bg-transparent',
}) => {
  const currentPath = usePathname() ?? '/'
  const items: MenuItem[] = [
    {
      title: dictionary['Shorts'],
      href: '/shorts',
      Icon: ShortIcon,
    },
    {
      title: dictionary['Search'],
      Icon: SearchIcon,
      href: '/search',
    },
    {
      title: dictionary['Home'],
      href: '/',
      Icon: HomeIcon,
    },

    {
      title: dictionary['Content'],
      href: '/content',
      Icon: BookIcon,
    },
    {
      title: dictionary['Favorites'],
      href: '/favorites',
      Icon: FavoriteIcon,
    },
  ]
  return (
    <div
      className={`shadow-t fixed bottom-0 left-0 z-10 flex w-full items-center justify-around py-3 dark:bg-gray-950 lg:hidden ${menuClassName}`}
    >
      {items.map(({ href, action, title, Icon }) => {
        const routeLevelPath =
          href !== '/' && currentPath.includes(href as string)

        const textColor =
          currentPath === href || routeLevelPath ? titleActiveColor : titleColor
        const color =
          currentPath === href || routeLevelPath ? iconActiveColor : iconColor
        const activeColor =
          currentPath === href || routeLevelPath ? activeItemColor : itemColor
        if (action) {
          return (
            <div
              key={`${title}-icon`}
              onClick={action}
              className={`flex flex-col items-center gap-1 text-xs font-medium py-1 ${menuItemClassName} ${textColor} ${activeItemColor} ${activeColor}`}
            >
              <Icon height={ICON_HEIGHT} width={ICON_WIDTH} fill={color} />
              {!hideTitle && title}
            </div>
          )
        }

        return (
          <Link
            key={`${title}-icon`}
            href={href || '#'}
            className={`flex flex-col items-center gap-1 text-xs font-medium ${menuItemClassName} ${textColor} ${activeItemColor} ${activeColor} rounded-sm p-1`}
            prefetch
          >
            <Icon height={ICON_HEIGHT} width={ICON_WIDTH} fill={color} />

            {!hideTitle && title}
          </Link>
        )
      })}
    </div>
  )
}

export { MenuMobile }
