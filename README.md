This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Versiones

- v1.6.1:
  Se elimina la dependencia html-to-text
  Se hace la traducción del sitio para portugues de Portugal e inglés

- v1.6.0:
  Se agrega banner y formulario para inscripción a Loco Chef - Movistar/Venezuela y Test

- v1.5.9:
  Corrección request endpoint additional config con un provider

- v1.5.7:
  Se coloca banner de "Sabores Venezolanos" en el slider inicial
  Se sube el slider de la categoría "Sabores Venezolanos" mas arriba
  Se arregla la animación del slider inicial con Framer Motion

- v1.5.6:
  Chefs destacados, se pueden marcar en WP con un "featured" checked
  Se ponen como orden de prioridad los chefs destacados, con un borde de color
  Se habilita nuevamente Validator Provider y Trial Provider
  Se agrega activacion/desactivacion de Validator y Trial en el endpoint de AdditionalConfig

- v1.5.5:
  Corrección en petición de Additional Config cuando falla el endpoint

- v1.5.4:
  Deshabilitación del Validator Provider y del Trial Provider

- v1.5.3:
  Correción falla en generación de cookies de validación
