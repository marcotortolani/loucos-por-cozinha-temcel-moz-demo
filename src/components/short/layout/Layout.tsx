'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ShortMenu } from '@/components/short/ShortMenu'
import { SheetUI } from '@/components/ui/sidebar/sheet'
import { Logo } from '@/components/layout/Logo'
import { MenuFooter } from '@/components/layout/MenuFooter'
import { useLayoutSidebarStore } from '@/components/layout/layout-store'
import { RouteItem } from '@/lib/route/route-types'
import dictionary from '@/dictionary/lang.json'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname()
  const { open, closeDialog } = useLayoutSidebarStore()

  const ROUTES: RouteItem[] = [
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
      title: dictionary['Subscribe'],
      href: '/subscribe',
    },
  ]

  useEffect(() => {
    closeDialog()
  }, [pathname])

  return (
    <div className="relative">
      <ShortMenu routes={ROUTES} />
      <main className="flex flex-col items-center justify-center h-[100dvh]">
        {children}
      </main>
      <SheetUI
        sidebarClassName="bg-black overflow-y-scroll "
        open={open}
        onOpenChange={() => {
          closeDialog()
        }}
        items={ROUTES}
        closeColor="white"
        header={<Logo />}
        footer={<MenuFooter />}
        sidebarMenuItemClassName="text-sm hover:text-lxc"
      />
    </div>
  )
}
