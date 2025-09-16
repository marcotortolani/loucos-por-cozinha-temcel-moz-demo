'use client'
import React, { useEffect, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { ValidationContext } from '@/providers/validation-provider'

import { SheetUI } from '../ui/sidebar/sheet'
import { Logo } from '@/components/layout/Logo'
import { MenuFooter } from '@/components/layout/MenuFooter'
import { RouteItem } from '@/lib/route/route-types'

import { useLayoutSidebarStore } from './layout-store'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

export default function SidebarMenu(): React.ReactNode {
  const pathname = usePathname()
  const { open, closeDialog } = useLayoutSidebarStore()
  const { userEnabled, userID } = useContext(ValidationContext)
  const { additionalConfig } = useAdditionalComponentsStore()
  const { additionalSection } = additionalConfig
  const MOBILE_ROUTES: RouteItem[] = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Recetas',
      href: '/recetas',
    },
    {
      title: 'Nuestros Chefs',
      href: '/chefs',
    },
    {
      title: 'Contenido',
      href: '/contenido',
    },

    {
      title: 'Loco tips',
      href: '/loco-tips',
    },
    {
      href: '/favoritos',
      title: 'Favoritos',
    },
    {
      href: '/busqueda',
      title: 'Búsqueda',
    },
    {
      href: '/suscribirme',
      title: 'Suscribite',
    },
  ]

  if (userEnabled && userID) {
    const index = MOBILE_ROUTES.findIndex(
      (item) => item.href === '/suscribirme',
    )

    if (index !== -1) {
      MOBILE_ROUTES.splice(index, 1)
    }
  }

  if (additionalSection && additionalSection?.show) {
    MOBILE_ROUTES.splice(2, 0, {
      title: additionalSection.title,
      href: `/${additionalSection['wp-category-slug']}`,
    })
  }

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
