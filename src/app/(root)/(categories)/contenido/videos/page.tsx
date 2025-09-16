import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { VideoPosts } from '@/components/content/VideoPosts'
import { notFound } from 'next/navigation'

export default async function Page() {
  const categories = await getWpCategories({ parent: 20 }) // categorias de recetas

  if (!categories.length) notFound()

  return <VideoPosts categories={categories} />
}
