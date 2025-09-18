import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { VideoPosts } from '@/components/content/VideoPosts'
import { notFound } from 'next/navigation'
import { CATEGORIES } from '@/lib/constants'

export default async function Page() {
  const categories = await getWpCategories({ parent: CATEGORIES.recipes }) 

  if (!categories.length) notFound()

  return <VideoPosts categories={categories} />
}
