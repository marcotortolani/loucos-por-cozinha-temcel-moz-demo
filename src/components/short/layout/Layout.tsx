'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ShortMenu } from '@/components/short/ShortMenu'
import { SheetUI } from '@/components/ui/sidebar/sheet'
import { Logo } from '@/components/layout/Logo'
import { MenuFooter } from '@/components/layout/MenuFooter'
import { useLayoutSidebarStore } from '@/components/layout/layout-store'
import { RouteItem } from '@/lib/route/route-types'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname()
  const { open, closeDialog } = useLayoutSidebarStore()
  const { additionalConfig } = useAdditionalComponentsStore()
  const { additionalSection } = additionalConfig

  const ROUTES: RouteItem[] = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Recetas',
      href: '/recipes',
    },
    {
      title: 'Nuestros Chefs',
      href: '/chefs',
    },
    {
      title: 'Contenido',
      href: '/content',
    },
    {
      title: 'Favoritos',
      href: '/favorites',
    },
    {
      title: 'Suscribite',
      href: '/subscribe',
    },
  ]

  if (additionalSection && additionalSection?.show) {
    ROUTES.splice(2, 0, {
      title: additionalSection.title,
      href: `/${additionalSection['wp-category-slug']}`,
    })
  }

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
