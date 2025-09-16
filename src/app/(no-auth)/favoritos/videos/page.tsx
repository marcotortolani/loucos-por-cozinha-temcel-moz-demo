'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { ContentVideoItem } from '@/components/content/ContentVideoItem'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { Post } from '@/lib/api/wp/wp-types'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { Pagination } from '@/components/pagination/Pagination'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

const PER_PAGE = 12

export default function Page() {
  const { videos } = useFavoriteStore()
  const [videoPosts, setVideoPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  useEffect(() => {
    if (videos.length) {
      setLoading(true)
      const getFavoritePosts = async () => {
        const data = await getWpPosts({
          include: videos.join(','),
          per_page: PER_PAGE,
          offset: currentPage * PER_PAGE,
        })
        setVideoPosts(data.posts || [])
        setPages(data.totalPages)
        setLoading(false)
      }
      getFavoritePosts()
    } else {
      setLoading(false)
    }
  }, [videos.length])

  const content = loading ? (
    <Loading />
  ) : (
    <div className="mb-2">
      {videoPosts.length ? (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {videoPosts.map((item, key) => (
            <ContentVideoItem item={item} key={key} />
          ))}
        </div>
      ) : (
        <div className="text-black text-center bg-[#666666] py-4 rounded-xl ">
          No tienes contenido videos disponible
        </div>
      )}
    </div>
  )

  return (
    <Container>
      <SectionTitle>Videos favoritos</SectionTitle>
      {content}
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onChangePrev={(_currentPage) => setCurrentPage(_currentPage)}
        onChangeNext={(_currentPage) => setCurrentPage(_currentPage)}
      />
    </Container>
  )
}
