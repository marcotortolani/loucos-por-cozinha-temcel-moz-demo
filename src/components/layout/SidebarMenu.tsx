'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { SheetUI } from '../ui/sidebar/sheet'
import { Logo } from '@/components/layout/Logo'
import { MenuFooter } from '@/components/layout/MenuFooter'
import { RouteItem } from '@/lib/route/route-types'

import { useLayoutSidebarStore } from './layout-store'

import dictionary from '@/dictionary/lang.json'

export default function SidebarMenu(): React.ReactNode {
  const pathname = usePathname()
  const { open, closeDialog } = useLayoutSidebarStore()

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
