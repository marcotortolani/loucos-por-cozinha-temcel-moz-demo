import React from 'react'
import { getWpPosts, getWpTags } from '@/lib/api/wp/wp-actions'

import { notFound } from 'next/navigation'
import { sanitizeContent } from '@/lib/utils'
import { SharedAndFavoriteEditorialComponent } from '@/components/SharedAndFavoriteEditorialComponent'
import { wpImage } from '@/lib/api/wp/wp-utils'
import Default from '/public/images/default.webp'
import Image from 'next/image'
import { Container } from '@/components/Container'

type PageProps = Promise<{ id: string }>

export default async function Page({ params }: { params: PageProps }) {
  const { id } = await params
  const data = await getWpPosts({ slug: id })
  const [editorial] = data.posts
  const tags = await getWpTags({ include: editorial.tags.toString() })

  if (!editorial) notFound()

  const content = sanitizeContent(editorial.content?.rendered as string)

  const image = wpImage(editorial) || Default

  return (
    <div>
      <div className="xl:max-w-screen-xl lg:px-3 lg:max-w-screen-lg xl:px-3 xl:mt-2 lg:container mx-auto mb-4">
        <div className="relative  w-full h-[210px] md:h-[500px] ">
          <Image
            src={image || Default}
            fill
            priority
            alt={editorial?.title?.rendered as string}
            style={{
              objectFit: 'cover',
            }}
            className="xl:rounded-lg"
          />
        </div>
      </div>

      <Container>
        <div className="flex justify-between items-center">
          <div className="font-semibold text-white text-xl lg:text-[24px] w-[80%]">
            {editorial.title?.rendered}
          </div>
          <SharedAndFavoriteEditorialComponent item={editorial} tags={tags} />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-white my-2 font-normal text-sm leading-[1.3rem] md:text-[1rem] md:leading-[1.45rem]"
        ></div>
      </Container>
    </div>
  )
}
