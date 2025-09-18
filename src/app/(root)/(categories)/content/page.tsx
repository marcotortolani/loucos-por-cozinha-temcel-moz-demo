import React from 'react'
import { ContentVideoSection } from '@/components/content/ContentVideoSection'
import { getWpCategories, getWpPosts } from '@/lib/api/wp/wp-actions'
import { CarouselSection } from '@/components/home/CarouselSection'
import { Container } from '@/components/Container'
import { CATEGORIES } from '@/lib/constants'

import dictionary from '@/dictionary/lang.json'

export default async function Page() {
  const data = await getWpPosts({
    categories: CATEGORIES.editorial.toString(),
    per_page: 8,
  })
  const editorial = data.posts || []
  const categories = await getWpCategories({ parent: CATEGORIES.recipes })
  const dataVideos = await getWpPosts({
    categories: categories.map((cat) => cat.id).join(','),
    per_page: 12,
  })

  const videos = dataVideos.posts || []

  return (
    <Container>
      <CarouselSection
        title={dictionary['Editorial content']}
        items={editorial}
        color="text-white"
        moreLink="/content/editorial"
      />

      <ContentVideoSection
        title={dictionary['Video content']}
        items={videos}
        moreLink="/content/videos"
      />
    </Container>
  )
}
