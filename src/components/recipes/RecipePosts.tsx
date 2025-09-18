'use client'
import React, { useEffect, useState } from 'react'
import { Category, Post } from '@/lib/api/wp/wp-types'
import dynamic from 'next/dynamic'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { Pagination } from '@/components/pagination/Pagination'
import { RecipeItem } from '@/components/recipes/RecipeItem'

import dictionary from '@/dictionary/lang.json'

const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

type Props = {
  category: Category
}

const PER_PAGE = 12

export const RecipePosts: React.FC<Props> = ({ category }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    setLoading(true)
    const getPosts = async () => {
      const data = await getWpPosts({
        categories: category.id?.toString(),
        per_page: PER_PAGE,
        offset: PER_PAGE * currentPage,
      })
      setPosts(data.posts || [])
      setLoading(false)
      setPages(data.totalPages)
    }
    getPosts()
  }, [category, currentPage])

  const content = loading ? (
    <Loading />
  ) : (
    <div>
      {posts.length ? (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((item, key) => (
            <RecipeItem item={item} key={key} category={category} />
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
      <SectionTitle>{category.name}</SectionTitle>
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
