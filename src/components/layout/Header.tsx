'use client'
import { useContext } from 'react'
import { ValidationContext } from '@/providers/validation-provider'
import { Logo } from '@/components/layout/Logo'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuIcon, Search, Heart } from 'lucide-react'

import React from 'react'
import { RouteItem } from '@/lib/route/route-types'
import { useLayoutSidebarStore } from '@/components/layout/layout-store'

// import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

import dictionary from '@/dictionary/lang.json'

const Header: React.FC = () => {
  const { openDialog } = useLayoutSidebarStore()
  const { userEnabled, userID } = useContext(ValidationContext)

  // const { additionalConfig } = useAdditionalComponentsStore()
  // const { additionalSection } = additionalConfig

  const ROUTES: RouteItem[] = [
    {
      title: dictionary['Home'],
      href: '/',
    },
    {
      title: dictionary['Local Flavors'],
      href: '/local-flavors',
    },
    {
      title: dictionary['Recipes'],
      href: '/recipes',
    },
    {
      title: dictionary['Our chefs'],
      href: '/chefs',
    },
    {
      title: dictionary['Content'],
      href: '/content',
    },
    {
      title: dictionary['Mad Tips'],
      href: '/mad-tips',
    },
    {
      title: dictionary['Subscribe'],
      href: '/subscribe',
    },
    {
      Icon: Heart,
      href: '/favorites',
    },
    {
      Icon: Search,
      href: '/search',
    },
  ]

  if (userEnabled && userID) {
    const index = ROUTES.findIndex((item) => item.href === '/subscribe')

    if (index !== -1) {
      ROUTES.splice(index, 1)
    }
  }

  // if (additionalSection && additionalSection?.show) {
  //   ROUTES.splice(2, 0, {
  //     title: additionalSection.title,
  //     href: `/${additionalSection['wp-category-slug']}`,
  //   })
  // }

  return (
    <header className="fixed z-[50] flex h-20 w-full items-center justify-between bg-black px-4 md:px-6 lg:px-8">
      <Logo />
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className=" space-x-2 flex-auto">
          {ROUTES.map(({ title, href, Icon }, index) => {
            return (
              <NavigationMenuLink
                asChild
                key={index}
                className={`${href === '/' && 'hidden xl:flex'} hover:bg-primary hover:text-neutral-700`}
              >
                <Link
                  href={href || '#'}
                  className={`${href === '/subscribe' ? ' bg-primary text-black hover:bg-primary/80 ' : ' text-white bg-black hover:text-black hover:bg-primary '} group inline-flex h-9 w-max items-center justify-center rounded-md px-2 xl:px-4 py-2 text-sm font-medium `}
                  prefetch
                >
                  {Icon ? <Icon /> : null}
                  {title}
                </Link>
              </NavigationMenuLink>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        size="icon"
        className="bg-transparent lg:hidden"
        onClick={() => openDialog()}
      >
        <MenuIcon className="h-6 w-6 text-white" />
      </Button>
    </header>
  )
}

export { Header }
