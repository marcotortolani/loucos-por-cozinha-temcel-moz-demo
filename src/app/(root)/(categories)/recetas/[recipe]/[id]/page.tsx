import React from 'react'
import { getWpCategories, getWpPosts, getWpTags } from '@/lib/api/wp/wp-actions'
import { notFound } from 'next/navigation'
import { sanitizeContent } from '@/lib/utils'
import { VideoItem } from '@/components/video/VideoItem'
import { SharedAndFavoriteVideoComponent } from '@/components/SharedAndFavoriteVideoComponent'
import { RecipeVideoCarousel } from '@/components/recipes/RecipeVideoCarousel'
import { Container } from '@/components/Container'

type PageProps = Promise<{ id: string; recipe: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { id, recipe } = await params

  const data = await getWpPosts({ slug: id })
  const categories = await getWpCategories({ slug: recipe }) // categorias de recetas
  const dataVideos = await getWpPosts({
    categories: categories.map((cat) => cat.id).join(','),
  })

  const [wpPost] = data.posts || []
  const videos = dataVideos.posts || []

  const tags = await getWpTags({ include: wpPost.tags.toString() })

  if (!wpPost) notFound()

  const content = sanitizeContent(wpPost.content?.rendered as string)

  return (
    <div className="md:pt-4">
      <div className="flex justify-center mb-4">
        <VideoItem item={wpPost} />
      </div>
      <Container>
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold leading-6 text-white text-xl md:text-[24px] w-[80%]">
            {wpPost.title?.rendered}
          </div>
          <SharedAndFavoriteVideoComponent item={wpPost} tags={tags} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-white my-2 font-normal text-sm leading-[1.3rem] md:text-[1rem] md:leading-[1.45rem]"
        ></div>
        <RecipeVideoCarousel
          title="También te podría interesar"
          color="text-white"
          items={videos}
          moreLink="/recetas"
        />
      </Container>
    </div>
  )
}
