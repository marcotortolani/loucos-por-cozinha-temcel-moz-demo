import React from 'react'
import { Category } from '@/lib/api/wp/wp-types'
import Link from 'next/link'
import Image from 'next/image'
import Default from '/public/images/default.webp'

type ChefPrincipalItemProps = {
  item: Category
}

export const ChefPrincipalItem: React.FC<ChefPrincipalItemProps> = ({
  item,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={`/chefs/${item?.slug}`} prefetch className="w-full">
        <div
          className={` ${item?.featured ? ' border-4 border-primary ' : ''} relative mb-2 aspect-square w-full rounded-full `}
        >
          <Image
            className="rounded-[inherit]"
            src={(item?.image as string) || Default}
            fill
            alt={item?.name as string}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="text-white text-[13px] leading-[auto] font-semibold md:text-xl whitespace-pre-line text-center">
          {item?.name}
        </div>
      </Link>
    </div>
  )
}
