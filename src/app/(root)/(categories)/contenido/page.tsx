import React from 'react'
import { ContentVideoSection } from '@/components/content/ContentVideoSection'
import { getWpCategories, getWpPosts } from '@/lib/api/wp/wp-actions'
import { CarouselSection } from '@/components/home/CarouselSection'
import { Container } from '@/components/Container'

export default async function Page() {
  const data = await getWpPosts({ categories: '22', per_page: 8 })
  const editorial = data.posts || []
  const categories = await getWpCategories({ parent: 20 }) // categorias de recetas
  const dataVideos = await getWpPosts({
    categories: categories.map((cat) => cat.id).join(','),
    per_page: 12,
  })

  const videos = dataVideos.posts || []

  return (
    <Container>
      <CarouselSection
        title="Contenido editorial"
        items={editorial}
        color="text-white"
        moreLink="/contenido/editorial"
      />

      <ContentVideoSection
        title="Contenido de video"
        items={videos}
        moreLink="/contenido/videos"
      />
    </Container>
  )
}
