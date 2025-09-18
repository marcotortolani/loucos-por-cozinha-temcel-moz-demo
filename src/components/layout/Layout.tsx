// src/components/layout/Layout.tsx
'use client'
import React from 'react'
import { Header } from '@/components/layout/Header'
import { MenuMobile } from '@/components/ui/menu/MenuMobile'
import { PRIMARY_COLOR } from '@/lib/constants'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '../Chatbot'
import SidebarMenu from './SidebarMenu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <Header />
      <main className=" relative z-0 w-full pt-[5rem] pb-[3rem] md:pb-0">
        {children}
      </main>
      <Chatbot />
      <Footer />
      <SidebarMenu />
      <MenuMobile
        menuClassName={`bg-black`}
        titleColor="text-white"
        titleActiveColor="text-[#FFB626]"
        iconColor="white"
        menuItemClassName="bg-black"
        iconActiveColor={PRIMARY_COLOR}
        hideTitle
      />
    </div>
  )
}