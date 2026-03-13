// src/components/ValidatorLoader.jsx
'use client'

import { useEffect } from 'react'

export function ValidatorLoader() {
  useEffect(() => {
    const scriptPath = '/validador_base/validator.js'

    // Verificar si existe el archivo en runtime
    fetch(scriptPath, { method: 'HEAD', cache: 'no-store' })
      .then((res) => {
        if (!res.ok) return // No existe, no hacer nada

        // Existe, lo inyectamos
        const script = document.createElement('script')
        script.src = scriptPath
        script.async = false // Para que se ejecute en orden
        document.head.appendChild(script)
      })
      .catch(() => {
        // Error de red o no existe, no hacer nada
      })
  }, [])

  return null
}
