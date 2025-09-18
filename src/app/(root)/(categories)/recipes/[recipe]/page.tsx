import React from 'react'
import { notFound } from 'next/navigation'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { RecipePosts } from '@/components/recipes/RecipePosts'

type PageProps = Promise<{ recipe: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { recipe } = await params
  const [category] = await getWpCategories({
    slug: recipe,
  })

  if (!category) notFound()

  return <RecipePosts category={category} />
}
