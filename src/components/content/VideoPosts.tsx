'use client'
import React, { useEffect, useState } from 'react'
import { Category, Post } from '@/lib/api/wp/wp-types'
import dynamic from 'next/dynamic'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { Pagination } from '@/components/pagination/Pagination'
import { ContentVideoItem } from '@/components/content/ContentVideoItem'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

type Props = {
  categories: Category[]
}

const PER_PAGE = 12

export const VideoPosts: React.FC<Props> = ({ categories }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    setLoading(true)
    const getPosts = async () => {
      const data = await getWpPosts({
        categories: categories.map((category) => category.id).toString(),
        per_page: PER_PAGE,
        offset: PER_PAGE * currentPage,
      })
      setPosts(data.posts || [])
      setLoading(false)
      setPages(data.totalPages)
    }
    getPosts()
  }, [categories.length, currentPage])

  const content = loading ? (
    <Loading />
  ) : (
    <div className="mb-2">
      {posts.length ? (
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
          {posts.map((item, key) => (
            <ContentVideoItem item={item} key={key} />
          ))}
        </div>
      ) : (
        <div className="w-full max-w-[400px] mx-auto text-black text-center bg-[#666666] py-4 rounded-xl ">
          No tienes contenido disponible
        </div>
      )}
    </div>
  )

  return (
    <Container>
      <SectionTitle>Videos</SectionTitle>
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
