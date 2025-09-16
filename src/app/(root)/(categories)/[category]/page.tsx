'use client'
import React, { useState, useEffect, use } from 'react'
import { redirect } from 'next/navigation'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { EditorialPosts } from '@/components/content/EditorialPosts'

import { Category } from '@/lib/api/wp/wp-types'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'
import Loading from '@/components/Loading'

export default function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = use(params)
  const { additionalConfig } = useAdditionalComponentsStore()
  const { additionalSection } = additionalConfig
  const [cat, setCat] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!additionalSection) return

    if (
      !additionalSection?.show ||
      additionalSection['wp-category-slug'] !== category
    ) {
      redirect('/')
    }

    if (!additionalSection['wp-category-id'] && !additionalSection.show) {
      setLoading(false)
      return
    }

    async function getCat() {
      return await getWpCategories({
        include: additionalSection['wp-category-id'].toString(),
      })
    }

    getCat().then((cat) => {
      setLoading(false)
      setCat(cat[0])
    })
  }, [additionalSection])

  if (loading) return <Loading />

  if (!cat)
    return (
      <div className=" w-full h-[50dvh] flex items-center justify-center">
        <div className=" w-5/6 max-w-[400px] mx-auto h-20 bg-black/80 flex items-center justify-center rounded-xl">
          <p className=" text-white">Contenido no encontrado</p>
        </div>
      </div>
    )

  return <EditorialPosts category={cat} url={`/${cat?.slug}`} />
}
