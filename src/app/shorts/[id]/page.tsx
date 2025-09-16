import { getWpPosts, getWpTags } from '@/lib/api/wp/wp-actions'
import { VideoPlayerList } from '@/components/video/VideoPlayerList'
import React from 'react'

type PageProps = Promise<{ id: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { id } = await params

  const data = await getWpPosts({
    categories: '21',
  })

  const videos = data.posts || []

  const postTags = videos.reduce((acc: number[], video) => {
    if (video.tags.length) return acc.concat(video.tags)
    return acc
  }, [])

  const tags = await getWpTags({ include: postTags.toString(), per_page: 100 })
  const index = videos.findIndex((item) => item.slug === id)
  return <VideoPlayerList items={videos} defaultIndex={index} tags={tags} />
}
