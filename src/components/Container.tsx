'use client'
import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`container space-y-6 mx-auto px-3 md:px-6 lg:px-8 mb-[4.5rem] md:mb-[8.5rem] xl:max-w-screen-xl md:min-h-[75dvh] ${className}`}
    >
      {children}
    </div>
  )
}
