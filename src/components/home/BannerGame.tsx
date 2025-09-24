'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { ValidationContext } from '@/providers/validation-provider'

import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

import bannerMobile from '/public/images/banner-trivia-lxc-mobile.webp'
import bannerDesktop from '/public/images/banner-trivia-lxc-desktop.webp'

const IS_TEST = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY === 'test'

import dictionary from '@/dictionary/lang.json'

export function BannerGame() {
  const router = useRouter()
  const { userEnabled, userID } = useContext(ValidationContext)
  const [userHash, setUserHash] = useState(null)
  const [popupMessage, setPopupMessage] = useState(false)
  const [bannerEnabled, setBannerEnabled] = useState(false)
  const { additionalConfig } = useAdditionalComponentsStore()
  const { game } = additionalConfig
  const validPeriod = game?.validPeriod

  console.log(game.bannerMobile)

  useEffect(() => {
    if (IS_TEST) {
      setBannerEnabled(true)
      return
    }
    if (validPeriod) {
      const currentDate = new Date()
      const startingDate = new Date(validPeriod.startDate)
      const endingDate = new Date(validPeriod.endDate)
      setBannerEnabled(currentDate >= startingDate && currentDate <= endingDate)
    }
  }, [validPeriod])

  useEffect(() => {
    if (IS_TEST) return
    if (!bannerEnabled || !userEnabled || !userID) return

    const fetchData = async () => {
      try {
        const response = await fetch('/api/create-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            game_user_id: userID,
          }),
        })

        const data = await response.json()
        if (data && data.user) {
          setUserHash(data.user.game_user_id)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    //fetchTriviaData()
    fetchData()
  }, [userID, userEnabled])

  function handleRedirect() {
    if (typeof window === 'undefined') return
    if (IS_TEST) {
      window.open(`${game?.url}&userhash=1`, '_blank')
      return
    }
    if (!userEnabled) {
      router.push('/subscribe')
      return
    }
    if (!userHash) {
      console.log('No userHash')
      setPopupMessage(true)
      return
    }

    window.open(`${game?.url}&userhash=${userHash}`, '_blank')
  }

  useEffect(() => {
    if (popupMessage) {
      setTimeout(() => {
        setPopupMessage(false)
      }, 3000)
    }
  }, [popupMessage])

  if (!bannerEnabled) {
    return null
  }

  return (
    <div className={` relative w-full h-fit my-6 overflow-hidden `}>
      {IS_TEST ? (
        <div
          onClick={handleRedirect}
          className=" w-full h-fit px-0 md:px-0 hover:cursor-pointer "
        >
          <Image
            className=" w-full h-full md:hidden rounded-xl"
            src={bannerMobile}
            alt="Banner Mobile Trivia"
            width={500}
            height={630}
          />
          <Image
            className=" w-full h-full hidden md:block md:rounded-xl lg:rounded-3xl"
            src={bannerDesktop}
            alt="Banner Desktop Trivia"
            width={1200}
            height={520}
          />
        </div>
      ) : (
        <div
          onClick={handleRedirect}
          className=" w-full h-fit px-0 md:px-0 hover:cursor-pointer "
        >
          <Image
            src={game?.bannerMobile || bannerMobile}
            alt="Banner Mobile Trivia"
            className="w-full h-full md:hidden rounded-xl"
            width={500}
            height={630}
          />
          <Image
            src={game?.bannerDesktop || bannerDesktop}
            alt="Banner Desktop Trivia"
            className="w-full h-full hidden md:block md:rounded-xl lg:rounded-3xl"
            width={1200}
            height={520}
          />
        </div>
      )}
      <div
        className={`${
          popupMessage ? ' translate-y-0 ' : ' translate-y-[100%] '
        } absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out bg-black/40 backdrop-blur-sm pointer-events-none z-50`}
      >
        <div className=" w-4/5 md:w-3/5 h-3/5 md:h-1/5 flex items-center justify-center uppercase font-normal text-white bg-primary text-center rounded-xl">
          {dictionary['Invalid user or subscription']}
        </div>
      </div>
    </div>
  )
}
