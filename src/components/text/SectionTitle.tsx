'use client'
import React from 'react'

type TitleProps = {
  children?: React.ReactNode
  color?: string
}

export const SectionTitle: React.FC<TitleProps> = ({
  children,
  color = 'text-white',
}) => {
  return (
    <h1 className={`${color} text-[14px] md:text-[24px] font-bold my-2`}>
      {children}
    </h1>
  )
}
