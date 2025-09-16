import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'
import React from 'react'
import { ValidationProvider } from '@/providers/validation-provider'
import { AdditionalConfigProvider } from '@/providers/additional-config-provider'
import { Toaster } from '@/components/ui/toaster'

//import dictionary from '../dictionary/lang.json'

const poppins = Poppins({
  subsets: ['latin'],
  preload: true,
  weight: ['100', '200', '300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Loco por la cocina | Cocinar nunca fue tan facil',
  description: '',
  icons: '/favicon.ico',
  other: {
    version: '1.6.1',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-[#252525]`}>
        <AdditionalConfigProvider>
          <ValidationProvider>{children}</ValidationProvider>
        </AdditionalConfigProvider>
        <Toaster />
      </body>
    </html>
  )
}
