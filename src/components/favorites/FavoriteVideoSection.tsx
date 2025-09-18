'use client'
import React from 'react'
import { Post } from '@/lib/api/wp/wp-types'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { FavoriteVideoSectionItem } from '@/components/favorites/FavoriteVideoSectionItem'
import { SectionTitle } from '@/components/text/SectionTitle'

import dictionary from '@/dictionary/lang.json'

type FavoriteVideoSectionProps = {
  title?: string
  moreLink?: string
  items: Post[]
  isRounded?: boolean
  isLarge?: boolean
  color?: string
}

export const FavoriteVideoSection: React.FC<FavoriteVideoSectionProps> = ({
  title,
  moreLink = '#',
  items = [],
  color = 'text-[#FFB626] ',
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <SectionTitle color={color}>{title}</SectionTitle>
        {items.length > 6 && (
          <Link
            href={moreLink}
            className="text-white text-xs  font-normal md:text-[16px] flex items-center"
          >
            {dictionary['View more']}{' '}
            <ChevronRight size={20} className="ml-1" />
          </Link>
        )}
      </div>

      {items.length ? (
        <div className="grid items-start grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {items.slice(0, 6).map((item, key) => (
            <FavoriteVideoSectionItem item={item} key={key} />
          ))}
        </div>
      ) : (
        <div className="text-black text-center bg-[#666666] py-4 rounded-xl ">
          {dictionary["You don't have any content"]}
        </div>
      )}
    </div>
  )
}
