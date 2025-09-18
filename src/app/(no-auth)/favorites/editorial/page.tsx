'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { getWpPosts } from '@/lib/api/wp/wp-actions'

import { EditorialItem } from '@/components/content/EditorialItem'
import { useFavoriteStore } from '@/lib/modules/favorite/favorite-stores'
import { Post } from '@/lib/api/wp/wp-types'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { Pagination } from '@/components/pagination/Pagination'

import dictionary from '@/dictionary/lang.json'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

const PER_PAGE = 12

export default function Page() {
  const { editorial } = useFavoriteStore()
  const [editorialPosts, setEditorialPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    if (editorial.length) {
      setLoading(true)
      const getFavoritePosts = async () => {
        const data = await getWpPosts({
          include: editorial.join(','),
          per_page: PER_PAGE,
          offset: PER_PAGE * currentPage,
        })
        setEditorialPosts(data.posts || [])
        setLoading(false)
        setPages(data.totalPages)
      }
      getFavoritePosts()
    } else {
      setLoading(false)
    }
  }, [editorial.length])

  const content = loading ? (
    <Loading />
  ) : (
    <div>
      {editorial.length ? (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {editorialPosts.map((item, key) => (
            <EditorialItem item={item} key={key} />
          ))}
        </div>
      ) : (
        <div className="text-black text-center bg-[#666666] py-4 rounded-xl ">
          {dictionary["You don't have any content"]}
        </div>
      )}
    </div>
  )

  return (
    <Container>
      <SectionTitle>{dictionary['Favorite editorials']}</SectionTitle>
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
