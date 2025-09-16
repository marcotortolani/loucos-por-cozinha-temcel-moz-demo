'use client'
import React, { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { SearchItem } from '@/components/search/SearchItem'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Post } from '@/lib/api/wp/wp-types'
import { getWpPosts } from '@/lib/api/wp/wp-actions'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'
import { Pagination } from '@/components/pagination/Pagination'
//import Loading from '@/components/Loading'
const Loading = dynamic(() => import('@/components/Loading'), {
  ssr: false,
})

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const callback = useCallback(async (search: string, currentPage: number) => {
    const PER_PAGE = 12
    const data = await getWpPosts({
      search,
      per_page: PER_PAGE,
      offset: currentPage * PER_PAGE,
    })
    setPosts(data.posts)
    setPages(data.totalPages)
    setLoading(false)
  }, [])

  useEffect(() => {
    setLoading(true)
    callback(search, currentPage)
  }, [search, currentPage])

  const content = loading ? (
    <Loading />
  ) : posts.length > 0 ? (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mb-2">
      {posts.map((item, key) => (
        <SearchItem item={item} key={key} />
      ))}
    </div>
  ) : (
    <div className=" w-full max-w-[400px] mx-auto mt-10 text-black text-center md:text-xl bg-[#666666] p-4 rounded-xl ">
      No se encontraron resultados para <br></br>
      <span className="font-bold">{search}</span>
    </div>
  )

  return (
    <div className="pt-4">
      <div className="w-full md:px-4 md:mx-auto xl:max-w-screen-xl">
        <Input
          Icon={Search}
          className="bg-[#727272] w-full h-[50px] border-none rounded-none text-white md:rounded-md placeholder:text-white indent-2 placeholder:text-[16px] placeholder:font-normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ingrese su búsqueda"
        />
      </div>
      <Container>
        <SectionTitle>
          {!search ? 'Sugerencias' : `Resultados de `}
          {search && <span className=" text-primary">{search}</span>}
        </SectionTitle>
        {content}
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onChangePrev={(_currentPage) => setCurrentPage(_currentPage)}
          onChangeNext={(_currentPage) => setCurrentPage(_currentPage)}
        />
      </Container>
    </div>
  )
}

export default SearchPage
