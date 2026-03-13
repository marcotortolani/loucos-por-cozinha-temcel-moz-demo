import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'

import { Toaster } from '@/components/ui/toaster'

import dictionary from '../dictionary/lang.json'
import { ValidatorLoader } from '@/components/ValidatorLoader'

const poppins = Poppins({
  subsets: ['latin'],
  preload: true,
  weight: ['100', '200', '300', '400', '500'],
})

export const metadata: Metadata = {
  title: dictionary['title'],
  description: '',
  icons: '/favicon.ico',
  other: {
    version: '1.6.4',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={dictionary['lang']}>
      <body className={`${poppins.className} bg-[#252525]`}>
        <ValidatorLoader />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
