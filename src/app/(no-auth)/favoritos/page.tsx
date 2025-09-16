'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { Post } from '@/lib/api/wp/wp-types'
import { FavoriteCarouselSection } from '@/components/favorites/FavoriteCarouselSection'
import { FavoriteVideoSection } from '@/components/favorites/FavoriteVideoSection'
import { Container } from '@/components/Container'
import { FavoriteShortSection } from '@/components/favorites/FavoriteShortSection'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

export default function Page() {
  const { editorial, videos, shorts } = useFavoriteStore()
  const [editorialPosts, setEditorialPosts] = useState<Post[]>([])
  const [videoPosts, setVideoPosts] = useState<Post[]>([])
  const [shortPosts, setShortPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (editorial.length || videos.length || shorts.length) {
      const getFavoritePosts = async () => {
        const _editorial = editorial.length
          ? await getWpPosts({ include: editorial.join(',') })
          : { posts: [] }
        const _videos = videos.length
          ? await getWpPosts({ include: videos.join(',') })
          : { posts: [] }
        const _shorts = shorts.length
          ? await getWpPosts({ include: shorts.join(',') })
          : { posts: [] }
        setEditorialPosts(_editorial.posts || [])
        setVideoPosts(_videos.posts || [])
        setShortPosts(_shorts.posts || [])
        setLoading(false)
      }
      getFavoritePosts()
    } else {
      setLoading(false)
    }
  }, [editorial.length, videos.length, shorts.length])

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <FavoriteCarouselSection
        title="Editoriales favoritos"
        items={editorialPosts}
        color="text-white"
        moreLink="/favoritos/editorial"
      />

      <FavoriteVideoSection
        items={videoPosts}
        title="Videos favoritos"
        color="text-white"
        moreLink="/favoritos/videos"
      />
      <FavoriteShortSection
        items={shortPosts}
        title="Shorts favoritos"
        color="text-white"
        moreLink="/favoritos/shorts"
      />
    </Container>
  )
}
