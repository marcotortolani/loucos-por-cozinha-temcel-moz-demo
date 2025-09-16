'use client'
import { createContext, useEffect, useState } from 'react'
import { validateUser } from '@/app/actions/auth'
import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'

const ValidationContext = createContext({ userEnabled: false, userID: '' })

function ValidationProvider({ children }: { children: React.ReactNode }) {
  const { additionalConfig } = useAdditionalComponentsStore()
  const [userEnabled, setUserEnabled] = useState(false)
  const [userID, setUserID] = useState<string>('')

  const getParamHashID = () => {
    if (typeof window === 'undefined') return
    return window.location.href.split('/?')[1]
  }

  useEffect(() => {
    const hashID = getParamHashID() || ''

    validateUser(hashID).then((res) => {
      setUserEnabled(res.userSubscribed)
      setUserID(res.hashID || '')
    })
  }, [])

  if (additionalConfig && additionalConfig?.validatorActive) {
    return (
      <ValidationContext.Provider value={{ userEnabled, userID }}>
        {children}
      </ValidationContext.Provider>
    )
  }

  return <>{children}</>
}

export { ValidationContext, ValidationProvider }
