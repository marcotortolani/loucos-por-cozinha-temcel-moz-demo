'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { ChatBotIcon } from '@/components/icons'

const URL_CHATBOT = process.env.NEXT_PUBLIC_URL_CHATBOT

export const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setChatOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setChatOpen(false)
      }
    }
    if (chatOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [chatOpen])

  return (
    <div
      ref={modalRef}
      className={
        'z-10 fixed lg:sticky bottom-0 right-0 md:right-4 w-full md:w-[380px] lg:w-full h-fit flex flex-col items-end pointer-events-auto'
      }
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={chatOpen ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
      >
        {chatOpen && (
          <iframe
            src={URL_CHATBOT}
            className={`${
              chatOpen ? ' scale-100 flex ' : ' scale-100 hidden '
            }  absolute bottom-[7.5rem] right-0 md:bottom-32 lg:bottom-20 md:right-0 lg:right-2 xl:right-10 w-full md:w-[380px] lg:w-[400px] 
        h-[60svh] max-h-[550px]
        transition-all duration-100 ease-in-out`}
          />
        )}
      </motion.div>
      <div className=" absolute bottom-16 md:bottom-16 lg:bottom-4 right-2 lg:right-4 w-fit my-2 pr-2 sm:pr-0 flex items-center justify-end gap-2 md:justify-between">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" relative w-12 h-12 md:w-16 md:h-16 p-1 shadow-black shadow-md bg-primary rounded-full "
        >
          <ChatBotIcon />
        </button>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" hidden lg:flex px-4 lg:px-8 py-4 shadow-black shadow-md text-nowrap text-lg lg:text-lg xl:text-xl text-White bg-primary rounded-full "
        >
          ¡Hablá con nuestro asistente online!
        </button>
      </div>
    </div>
  )
}
