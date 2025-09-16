import React from 'react'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { notFound } from 'next/navigation'
import { EditorialPosts } from '@/components/content/EditorialPosts'

export default async function Page() {
  const [cat] = await getWpCategories({
    include: '315',
  })

  if (!cat) notFound()

  return <EditorialPosts category={cat} url="/loco-tips" />
}
