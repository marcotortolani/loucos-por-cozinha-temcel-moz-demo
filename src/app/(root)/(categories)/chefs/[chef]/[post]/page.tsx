import React from 'react'
import { getWpCategories, getWpPosts, getWpTags } from '@/lib/api/wp/wp-actions'
import { notFound } from 'next/navigation'
import { sanitizeContent } from '@/lib/utils'
import { VideoItem } from '@/components/video/VideoItem'
import { SharedAndFavoriteVideoComponent } from '@/components/SharedAndFavoriteVideoComponent'
import { VideoPostCarousel } from '@/components/video/VideoPostCarousel'
import { Container } from '@/components/Container'

type PageProps = Promise<{ chef: string; post: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { post, chef } = await params

  const data = await getWpPosts({ slug: post })
  const [wpPost] = data.posts
  const categories = await getWpCategories({ slug: chef }) // categorias de recetas
  const dataVideos = await getWpPosts({
    categories: categories.map((cat) => cat.id).join(','),
    exclude: wpPost.id?.toString(),
  })

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
        <div className="flex justify-between items-center">
          <div className="font-semibold text-white text-xl w-[80%]">
            {wpPost.title?.rendered}
          </div>
          <SharedAndFavoriteVideoComponent item={wpPost} tags={tags} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-white my-2 font-normal text-sm leading-[1.3rem] md:text-[1rem] md:leading-[1.45rem]"
        ></div>
        <VideoPostCarousel
          title="También te podría interesar"
          items={videos}
          color="text-white"
          moreLink={`/chefs/${chef}`}
        />
      </Container>
    </div>
  )
}
