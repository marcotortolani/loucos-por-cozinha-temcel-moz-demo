'use client'
import Link from 'next/link'

import dictionary from '@/dictionary/lang.json'

const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_LANDING_SUBSCRIPTION || ''

export default function Subscribe() {
  return (
    <div className=" mx-4 sm:mx-auto max-w-[400px] flex flex-col items-center gap-6 mt-40 mb-20 p-6 bg-Primary text-white rounded-lg shadow-xl bg-black">
      <p className=" px-4 text-center">
        {dictionary['You need to be subscribed to the service']} <br />
        {dictionary['You want to live the best experiences?']}
      </p>

      <Link
        href={SUBSCRIBE_URL}
        target="_blank"
        className="uppercase inline-flex items-center justify-center rounded-[5px]  font-semibold text-[14px] h-10 py-[3px] px-[10px] bg-[#FFB626] text-black"
      >
        {dictionary['Join']}
      </Link>
    </div>
  )
}
