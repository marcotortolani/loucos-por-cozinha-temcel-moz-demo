// src/providers/AdditionalConfigProvider.tsx
'use client'
import React, { createContext, useContext, useEffect, useRef } from 'react'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'
import { getAdditionalConfig } from '@/lib/api/additional-config/additional-config-actions'

type AdditionalConfigContextType = {
  isLoaded: boolean
  isLoading: boolean
}

const AdditionalConfigContext = createContext<AdditionalConfigContextType>({
  isLoaded: false,
  isLoading: false,
})

export const useAdditionalConfigContext = () =>
  useContext(AdditionalConfigContext)

type AdditionalConfigProviderProps = {
  children: React.ReactNode
}

export const AdditionalConfigProvider: React.FC<
  AdditionalConfigProviderProps
> = ({ children }) => {
  const { setAdditionalConfig } = useAdditionalComponentsStore()
  const hasInitialized = useRef(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

  const defaultConfig = {
    game: {
      title: '',
      bannerMobile: '',
      bannerDesktop: '',
      url: '',
      validPeriod: {
        startDate: '',
        endDate: '',
      },
    },
    additionalSection: {
      show: false,
      title: '',
      'wp-category-slug': '',
      'wp-category-id': 0,
    },
    validatorActive: false,
  }

  useEffect(() => {
    // Solo ejecutar una vez usando ref
    if (hasInitialized.current) return
    hasInitialized.current = true

    const fetchConfig = async () => {
      setIsLoading(true)

      try {
        const res = await getAdditionalConfig()

        if (!res) {
          console.log('No additional config found, using defaults')
          setAdditionalConfig(defaultConfig)
        } else {
          console.log('Additional config loaded successfully')
          setAdditionalConfig(res)
        }

        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading additional config:', error)
        setAdditionalConfig(defaultConfig)
        setIsLoaded(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchConfig()
  }, []) // Sin dependencias para que solo se ejecute una vez

  return (
    <AdditionalConfigContext.Provider value={{ isLoaded, isLoading }}>
      {children}
    </AdditionalConfigContext.Provider>
  )
}
