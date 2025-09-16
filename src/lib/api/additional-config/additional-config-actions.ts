/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/api/additional-config/additional-config-actions.ts

export const getAdditionalConfig = async () => {
  try {
    const res = await fetch('/api/additional-config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Añadir timeout para evitar requests colgados
      signal: AbortSignal.timeout(10000), // 10 segundos
    })

    if (!res.ok) {
      console.error(
        `Endpoint Additional Config - Error ${res.status}: ${res.statusText}`,
      )
      return null
    }

    const data = await res.json()
    return data
  } catch (error: any) {
    if (error.name === 'TimeoutError') {
      console.error('Timeout: La petición tardó demasiado en responder')
    } else {
      console.error('Error en getAdditionalConfig:', error)
    }
    return null
  }
}

// // src/lib/api/additional-config/additional-config-actions.ts

// export const getAdditionalConfig = async () => {
//   const res = await fetch('/api/additional-config', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   if (!res.ok) {
//     console.log(
//       `Endpoint Additional Config - Error ${res.status}: ${res.statusText}`,
//     )
//     return null

//     // throw new Error(`Error ${res.status}: ${res.statusText}`)
//   }

//   return await res.json()
// }
