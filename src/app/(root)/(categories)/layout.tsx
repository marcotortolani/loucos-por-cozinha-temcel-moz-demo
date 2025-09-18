import React from 'react'
// import { TrialProvider } from '@/providers/trial-provider'

// const operatorCountry = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY

export default function TrialLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
  // if (operatorCountry === 'test') return <>{children}</>

  // return <TrialProvider>{children}</TrialProvider>
}
