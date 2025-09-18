'use client'
import React, { useEffect, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { ValidationContext } from '@/providers/validation-provider'

import { SheetUI } from '../ui/sidebar/sheet'
import { Logo } from '@/components/layout/Logo'
import { MenuFooter } from '@/components/layout/MenuFooter'
import { RouteItem } from '@/lib/route/route-types'

import { useLayoutSidebarStore } from './layout-store'
//import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

import dictionary from '@/dictionary/lang.json'

export default function SidebarMenu(): React.ReactNode {
  const pathname = usePathname()
  const { open, closeDialog } = useLayoutSidebarStore()
  const { userEnabled, userID } = useContext(ValidationContext)
  // const { additionalConfig } = useAdditionalComponentsStore()
  // const { additionalSection } = additionalConfig
  const MOBILE_ROUTES: RouteItem[] = [
    {
      title: dictionary['Home'],
      href: '/',
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
      title: dictionary['Favorites'],
      href: '/favorites',
    },
    {
      title: dictionary['Search'],
      href: '/search',
    },
    {
      title: dictionary['Subscribe'],
      href: '/subscribe',
    },
  ]

  if (userEnabled && userID) {
    const index = MOBILE_ROUTES.findIndex((item) => item.href === '/subscribe')

    if (index !== -1) {
      MOBILE_ROUTES.splice(index, 1)
    }
  }

  // if (additionalSection && additionalSection?.show) {
  //   MOBILE_ROUTES.splice(2, 0, {
  //     title: additionalSection.title,
  //     href: `/${additionalSection['wp-category-slug']}`,
  //   })
  // }

  useEffect(() => {
    closeDialog()
  }, [pathname])

  return (
    <SheetUI
      sidebarClassName="z-50 bg-black overflow-y-auto sm:overflow-y-hidden"
      open={open}
      onOpenChange={() => {
        closeDialog()
      }}
      items={MOBILE_ROUTES}
      closeColor="white"
      header={<Logo />}
      footer={<MenuFooter />}
      sidebarMenuItemClassName="text-sm hover:text-lxc"
    />
  )
}
