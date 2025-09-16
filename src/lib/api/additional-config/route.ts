// src/app/api/additional-config/route.ts
import { NextResponse } from 'next/server'

const ENDPOINT_ADDITIONAL_CONFIG =
  process.env.NEXT_PUBLIC_ENDPOINT_ADDITIONAL_COMPONENTS || ''

export async function POST() {
  try {
    // Validar que existe el endpoint
    if (!ENDPOINT_ADDITIONAL_CONFIG) {
      console.error(
        'NEXT_PUBLIC_ENDPOINT_ADDITIONAL_COMPONENTS no está configurado',
      )
      return NextResponse.json(
        { error: 'Endpoint no configurado' },
        { status: 500 },
      )
    }

    const response = await fetch(ENDPOINT_ADDITIONAL_CONFIG, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Timeout para evitar requests colgados
      signal: AbortSignal.timeout(8000), // 8 segundos
    })

    if (!response.ok) {
      console.error(
        `Error al obtener datos del endpoint externo: ${response.status} ${response.statusText}`,
      )
      return NextResponse.json(
        { error: `Error del servidor externo: ${response.status}` },
        { status: response.status },
      )
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // Cache por 5 minutos para reducir llamadas
        'Cache-Control': 'public, max-age=300',
      },
    })
  } catch (error) {
    console.error('Error en /api/additional-config:', error)

    const errorMessage =
      error instanceof Error ? error.message : 'Error desconocido'

    return NextResponse.json(
      { error: `Error al obtener los datos: ${errorMessage}` },
      { status: 500 },
    )
  }
}

// // src/lib/api/additional-config/route.ts

// 'use server'
// import { NextResponse } from 'next/server'

// const ENDPOINT_ADDITIONAL_CONFIG =
//   process.env.NEXT_PUBLIC_ENDPOINT_ADDITIONAL_COMPONENTS || ''

// export async function POST() {
//   try {
//     const response = await fetch(ENDPOINT_ADDITIONAL_CONFIG)
//     const data = await response.json()

//     return NextResponse.json(data, {
//       status: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*', // Permitir CORS
//         'Content-Type': 'application/json',
//       },
//     })
//   } catch (error) {
//     return NextResponse.json(
//       { error: `${error} - Error al obtener los datos` },
//       { status: 500 },
//     )
//   }
// }
