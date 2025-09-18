import React from 'react'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { notFound } from 'next/navigation'
import { EditorialPosts } from '@/components/content/EditorialPosts'

import { CATEGORIES } from '@/lib/constants'

export default async function Page() {
  const [cat] = await getWpCategories({
    include: CATEGORIES['mad-tips'].toString(),
  })

  if (!cat) notFound()

  return <EditorialPosts category={cat} url="/mad-tips" />
}
