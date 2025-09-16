import React from 'react'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { RecipePostItem } from '@/components/recipes/RecipePostItem'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { notFound } from 'next/navigation'

export default async function Page() {
  const categories = await getWpCategories({ parent: 20 })

  if (!categories.length) notFound()

  return (
    <Container>
      <SectionTitle>Recetas</SectionTitle>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((item, key) => (
          <RecipePostItem category={item} key={key} />
        ))}
      </div>
    </Container>
  )
}
