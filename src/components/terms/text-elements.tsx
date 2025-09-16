import React from 'react'
type ContentProps = {
  children?: React.ReactNode
}

export const TitleStyled: React.FC<ContentProps> = ({ children }) => (
  <h1
    className={`w-full uppercase font-oswaldItalic pointer-events-none cursor-default text-[1.8rem] leading-[2rem] md:text-3xl lg:text-4xl text-left  `}
  >
    {children}
  </h1>
)

export const Title2Styled: React.FC<ContentProps> = ({ children }) => (
  <h2
    className={` w-full md:max-w-full font-oswaldItalic uppercase  text-xl md:text-lg lg:text-2xl`}
  >
    {children}
  </h2>
)

export const ParagraphStyled: React.FC<ContentProps> = ({ children }) => (
  <p className={'font-normal text-sm md:text-base lg:text-lg'}>{children}</p>
)
