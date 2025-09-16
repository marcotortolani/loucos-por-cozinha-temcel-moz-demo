import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parse } from 'node-html-parser'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizeContent = (content: string) => {
  if (!content)
    return 'Si disfrutas experimentar con sabores, ingredientes y técnicas, estás en el lugar indicado. Aquí encontrarás recetas para todos los gustos, desde platos clásicos hasta creaciones innovadoras, siempre con el toque especial que hace que cocinar sea un verdadero placer. ¡Cocinar nunca fue tan fácil!'

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
