import React from 'react'
import { Button } from '@/components/ui/button'
import { EllipsisVerticalIcon, MenuIcon } from 'lucide-react'
import { useLayoutSidebarStore } from '@/components/layout/layout-store'
import { Logo } from '@/components/layout/Logo'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { RouteItem } from '@/lib/route/route-types'

type ShortMenuProps = {
  routes: RouteItem[]
}

export const ShortMenu: React.FC<ShortMenuProps> = ({ routes = [] }) => {
  const { openDialog } = useLayoutSidebarStore()
  return (
    <>
      <header className="fixed z-50 flex h-20 w-full items-center justify-end bg-transparent px-4 md:px-6 md:hidden">
        <Button
          size="icon"
          className="!bg-transparent lg:hidden"
          onClick={() => openDialog()}
        >
          <EllipsisVerticalIcon className="h-6 w-6 text-white" />
        </Button>
      </header>
      <header className="hidden fixed md:flex z-50  h-20 w-full items-center justify-between bg-black px-4 md:px-6 ">
        <Logo />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {routes.map(({ title, href }, index) => (
              <NavigationMenuLink asChild key={index}>
                <Link
                  href={href || '#'}
                  className={`${href === '/suscribirme' ? ' bg-primary text-black hover:bg-primary/80 ' : ' text-white bg-black hover:text-black hover:bg-primary '} group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium `}
                  prefetch
                >
                  {title}
                </Link>
              </NavigationMenuLink>
            ))}
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
    </>
  )
}
