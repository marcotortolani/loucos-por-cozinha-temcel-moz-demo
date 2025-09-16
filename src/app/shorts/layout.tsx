import React from 'react'
import { Layout } from '@/components/short/layout/Layout'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout>{children}</Layout>
}
