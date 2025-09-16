import React from 'react'
import { BackIcon, NextIcon } from '@/components/icons'
import { PRIMARY_COLOR } from '@/lib/constants'

type PaginationProps = {
  pages: number
  currentPage: number
  onChangePrev: (value: number) => void
  onChangeNext: (value: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  pages = 0,
  onChangeNext,
  onChangePrev,
  currentPage = 1,
}) => {
  const page = currentPage + 1

  if (!pages) return null
  return (
    <div className="flex justify-center md:justify-between  items-center">
      <div
        className="cursor-pointer"
        onClick={() => page > 1 && onChangePrev(currentPage - 1)}
      >
        <BackIcon fill={PRIMARY_COLOR} height={20} width={10} />
      </div>
      <div className="text-md font-semibold text-white mx-10 md:mx-0">
        {page} / {pages}
      </div>
      <div
        className="cursor-pointer"
        onClick={() => page < pages && onChangeNext(currentPage + 1)}
      >
        <NextIcon height={20} width={10} fill={PRIMARY_COLOR} />
      </div>
    </div>
  )
}
