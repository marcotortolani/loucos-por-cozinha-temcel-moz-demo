import { getWpCategories } from '@/lib/api/wp/wp-actions'

import { notFound } from 'next/navigation'
import { EditorialPosts } from '@/components/content/EditorialPosts'

export default async function Page() {
  const [category] = await getWpCategories({
    slug: 'editorial',
  })

  if (!category) notFound()

  return <EditorialPosts category={category} />
}
