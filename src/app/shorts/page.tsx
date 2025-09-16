import { getWpPosts, getWpTags } from '@/lib/api/wp/wp-actions'
import { VideoPlayerList } from '@/components/video/VideoPlayerList'
import React from 'react'

export default async function Page() {
  const data = await getWpPosts({
    categories: '21',
  })

  const videos = data.posts || []

  const postTags = videos.reduce((acc: number[], video) => {
    if (video.tags.length) return acc.concat(video.tags)
    return acc
  }, [])

  const tags = await getWpTags({ include: postTags.toString(), per_page: 100 })

  return <VideoPlayerList items={videos} tags={tags} />
}
