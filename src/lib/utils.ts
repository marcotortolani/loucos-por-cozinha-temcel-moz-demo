import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parse } from 'node-html-parser'

import dictionary from '@/dictionary/lang.json'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizeContent = (content: string) => {
  if (!content)
    return dictionary[
      "If you enjoy experimenting with flavors, ingredients, and techniques, you're in the right place. Here you'll find recipes for all tastes, from classic dishes to innovative creations, always with that special touch that makes cooking a true pleasure. Cooking has never been easier!"
    ]

  const root = parse(content.replaceAll('&nbsp;', ''))
  root
    .getElementsByTagName('p')

    .map((tag) => tag.setAttribute('style', 'margin-bottom:15px'))
  root
    .getElementsByTagName('img')
    .map((tag) =>
      tag.setAttribute(
        'style',
        'width:100%;margin-bottom:15px;border-radius:5px',
      ),
    )
  return root.toString()
}
