import React from 'react'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { notFound } from 'next/navigation'
import { ChefPosts } from '@/components/chef/ChefPosts'

type PageProps = Promise<{ chef: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { chef } = await params
  const [category] = await getWpCategories({
    slug: chef,
  })

  if (!category) notFound()

  return <ChefPosts category={category} />
}
