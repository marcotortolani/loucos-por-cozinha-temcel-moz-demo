'use client'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { ValidationContext } from '@/providers/validation-provider'
import { useToast } from '@/hooks/use-toast'

import { Loader2, X, Mail, User, Calendar } from 'lucide-react'
import Link from 'next/link'

import bannerMobile from '/public/images/banner-lxc-locochef-mobile.webp'
import bannerDesktop from '/public/images/banner-lxc-locochef-desktop.webp'

const OPERATOR = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY
const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_LANDING_SUBSCRIPTION || ''

interface FormData {
  name: string
  email: string
  age: string
}

interface FormErrors {
  name?: string
  email?: string
  age?: string
}

export function BannerCampaign() {
  const { userEnabled, userID } = useContext(ValidationContext)
  const { toast } = useToast()
  const [popupMessage, setPopupMessage] = useState<boolean>(false)
  const [bannerEnabled, setBannerEnabled] = useState(false)
  const [formEnabled, setFormEnabled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validPeriod = {
    startDate: '2025-09-01T00:00:00.000Z',
    endDate: '2025-10-05T23:59:59.000Z',
  }

  useEffect(() => {
    if (OPERATOR == 'test') {
      setBannerEnabled(true)
      return
    }
    if (OPERATOR === 'movistar-venezuela' && validPeriod) {
      const currentDate = new Date()
      const startingDate = new Date(validPeriod.startDate)
      const endingDate = new Date(validPeriod.endDate)
      setBannerEnabled(currentDate >= startingDate && currentDate <= endingDate)
    }
  }, [validPeriod])

  // useEffect(() => {
  //   if (OPERATOR === 'test' || OPERATOR === 'movistar-venezuela') return
  //   if (!bannerEnabled || !userEnabled || !userID) return
  // }, [userID, userEnabled])

  // Validaciones
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!validateName(formData.name)) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    }

    if (!formData.email) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleClickBanner() {
    if (typeof window === 'undefined') return

    if (OPERATOR == 'test') {
      setFormEnabled(true)
      // Resetear formulario cuando se abre
      setFormData({ name: '', email: '', age: '' })
      setErrors({})
      return
    }

    if (!userID || !userEnabled) {
      setPopupMessage(true)
      return
    }
    setFormEnabled(true)
    // Resetear formulario cuando se abre
    setFormData({ name: '', email: '', age: '' })
    setErrors({})
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (typeof window === 'undefined') return
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      submitData.append(
        'access_key',
        process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || '',
      )
      submitData.append('subject', 'Loco x la Cocina TV - Inscripciones')
      // submitData.append('redirect', SUBSCRIBE_URL)
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('age', formData.age)

      const object = Object.fromEntries(submitData)
      const json = JSON.stringify(object)

      const response = await fetch(
        process.env.NEXT_PUBLIC_WEB3FORMS_URL || '',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: json,
        },
      )

      const result = await response.json()

      if (result.success) {
        toast({
          title: '¡Inscripción exitosa!',
          description:
            'Te has registrado correctamente para el evento. Pronto recibirás más información.',
          variant: 'default',
        })
        setFormEnabled(false)
        setFormData({ name: '', email: '', age: '' })
      } else {
        throw new Error(result.message || 'Error en el envío')
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error en el envío',
        description:
          'Hubo un problema al enviar tu inscripción. Por favor intenta nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeForm = () => {
    setFormEnabled(false)
    setFormData({ name: '', email: '', age: '' })
    setErrors({})
  }

  useEffect(() => {
    if (popupMessage) {
      const timer = setTimeout(() => {
        setPopupMessage(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [popupMessage])

  if (!bannerEnabled) {
    return null
  }

  return (
    <>
      <div className="relative w-full h-fit my-6 overflow-hidden">
        <div
          onClick={handleClickBanner}
          className="w-full h-fit px-0 md:px-0 hover:cursor-pointer group overflow-hidden rounded-xl lg:rounded-3xl"
        >
          <Image
            className="w-full h-full md:hidden rounded-xl transition-transform duration-300 group-hover:scale-105"
            src={bannerMobile}
            alt="Banner Mobile Trivia"
          />
          <Image
            className="w-full h-full hidden md:block md:rounded-xl lg:rounded-3xl transition-transform duration-300 group-hover:scale-105"
            src={bannerDesktop}
            alt="Banner Desktop Trivia"
          />
        </div>

        {/* Popup mensaje de usuario no válido */}
        <div
          className={`${
            popupMessage ? 'translate-y-0' : 'translate-y-[100%]'
          } absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-black/60 backdrop-blur-md pointer-events-none rounded-xl lg:rounded-3xl z-50`}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mx-4 text-center">
            <p className="mb-6 text-2xl 2xl:text-3xl font-semibold text-white">
              USUARIO NO VÁLIDO O SIN SUSCRIPCIÓN
            </p>
            <p className="text-lg font-normal text-white/90 mb-6">
              Necesitas estar suscripto al servicio <br />
              ¿Quieres vivir las mejores experiencias?
            </p>
            <Link
              href={SUBSCRIBE_URL}
              target="_blank"
              className="pointer-events-auto uppercase hover:scale-105 hover:bg-primary/80 inline-flex items-center justify-center rounded-lg font-semibold text-lg py-3 px-6 bg-primary text-black transition-all duration-200"
            >
              Suscribite
            </Link>
          </div>
        </div>

        {/* Formulario */}
        <div
          className={`${
            formEnabled ? 'translate-y-0' : 'translate-y-[120%]'
          } absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-black/60 backdrop-blur-md pointer-events-none rounded-xl lg:rounded-3xl z-50`}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mx-4 w-full max-w-md relative">
            <button
              type="button"
              onClick={closeForm}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full pointer-events-auto transition-colors duration-200"
              disabled={isSubmitting}
            >
              <X size={18} />
            </button>

            <h2 className="mb-8 text-2xl 2xl:text-3xl font-semibold text-white text-center">
              COMPLETA TUS DATOS
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 pointer-events-auto"
            >
              {/* Campo Nombre */}
              <div className="relative">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Nombre completo"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 ${
                      errors.name ? 'border-red-400' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors duration-200`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-red-300 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Campo Email */}
              <div className="relative">
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors duration-200`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-300 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Campo Edad */}
              <div className="relative">
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
                    size={20}
                  />
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="Edad"
                    min="13"
                    max="120"
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border-2 ${
                      errors.age ? 'border-red-400' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/60 focus:border-primary focus:outline-none transition-colors duration-200`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.age && (
                  <p className="mt-2 text-red-300 text-sm">{errors.age}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 uppercase hover:scale-105 hover:bg-primary/80 disabled:hover:scale-100 disabled:hover:bg-primary/60 inline-flex items-center justify-center rounded-lg font-semibold text-lg py-4 px-6 bg-primary text-black transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Inscripción'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

// 'use client'
// import Image from 'next/image'

// import { useContext, useEffect, useState } from 'react'
// import { ValidationContext } from '@/providers/validation-provider'

// import bannerMobile from '/public/images/banner-lxc-locochef-mobile.webp'
// import bannerDesktop from '/public/images/banner-lxc-locochef-desktop.webp'
// import Link from 'next/link'

// const OPERATOR = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY
// const SUBSCRIBE_URL = process.env.NEXT_PUBLIC_LANDING_SUBSCRIPTION || ''

// export function BannerCampaign() {
//   const { userEnabled, userID } = useContext(ValidationContext)
//   const [popupMessage, setPopupMessage] = useState<boolean>(false)
//   const [bannerEnabled, setBannerEnabled] = useState(false)
//   const [formEnabled, setFormEnabled] = useState(false)

//   const validPeriod = {
//     startDate: '2025-09-01T00:00:00.000Z',
//     endDate: '2025-10-05T23:59:59.000Z',
//   }

//   useEffect(() => {
//     if (OPERATOR == 'test') {
//       setBannerEnabled(true)
//       return
//     }
//     if (OPERATOR === 'movistar-venezuela' && validPeriod) {
//       const currentDate = new Date()
//       const startingDate = new Date(validPeriod.startDate)
//       const endingDate = new Date(validPeriod.endDate)
//       setBannerEnabled(currentDate >= startingDate && currentDate <= endingDate)
//     }
//   }, [validPeriod])

//   useEffect(() => {
//     if (OPERATOR === 'test' || OPERATOR === 'movistar-venezuela') return
//     if (!bannerEnabled || !userEnabled || !userID) return
//   }, [userID, userEnabled])

//   function handleClickBanner() {
//     if (typeof window === 'undefined') return

//     if (!userID || !userEnabled) {
//       setPopupMessage(true)
//       return
//     }
//     setFormEnabled(true)
//   }

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     if (typeof window === 'undefined') return

//     try {
//       event.preventDefault()
//       const formData = new FormData(event.target as HTMLFormElement)

//       formData.append(
//         'access_key',
//         process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || '',
//       )
//       formData.append('subject', 'Loco x la Cocina TV - Inscripciones')
//       formData.append('redirect', SUBSCRIBE_URL)

//       console.log(formData)

//       const object = Object.fromEntries(formData)
//       const json = JSON.stringify(object)

//       console.log(json)

//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: json,
//       })

//       const result = await response.json()

//       if (result.success) {
//         console.log(result)
//       }

//       setFormEnabled(false)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     if (popupMessage) {
//       setTimeout(() => {
//         setPopupMessage(false)
//       }, 10000)
//     }
//   }, [popupMessage])

//   if (!bannerEnabled) {
//     return null
//   }

//   return (
//     <div className={` relative w-full h-fit my-6 overflow-hidden `}>
//       <div
//         onClick={handleClickBanner}
//         className=" w-full h-fit px-0 md:px-0 hover:cursor-pointer "
//       >
//         <Image
//           className=" w-full h-full md:hidden rounded-xl"
//           src={bannerMobile}
//           alt="Banner Mobile Trivia"
//         />
//         <Image
//           className=" w-full h-full hidden md:block md:rounded-xl lg:rounded-3xl"
//           src={bannerDesktop}
//           alt="Banner Desktop Trivia"
//         />
//       </div>
//       <div
//         className={`${
//           popupMessage ? ' translate-y-0 ' : ' translate-y-[100%] '
//         } absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-black/60 backdrop-blur-md pointer-events-none rounded-xl lg:rounded-3xl z-50`}
//       >
//         <p className=" w-4/5 md:w-3/5 mb-10 flex items-center justify-center uppercase text-2xl 2xl:text-3xl font-semibold text-white text-center rounded-xl">
//           Usuario no válido o sin suscripción
//         </p>

//         <p className=" px-4 text-lg font-normal text-white text-center ">
//           Necesitas estar suscripto al servicio <br />
//           ¿Quieres vivir las mejores experiencias?
//         </p>

//         <Link
//           href={SUBSCRIBE_URL}
//           target="_blank"
//           className="mt-10 pointer-events-auto uppercase hover:scale-105 hover:bg-primary/80 inline-flex items-center justify-center rounded-[5px]  font-semibold text-lg py-2 px-4 bg-primary text-black"
//         >
//           Suscribite
//         </Link>
//       </div>

//       <div
//         className={`${
//           formEnabled ? ' translate-y-0 ' : ' translate-y-[100%] '
//         } absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-black/60 backdrop-blur-md pointer-events-none rounded-xl lg:rounded-3xl z-50`}
//       >
//         <button
//           type="button"
//           onClick={() => setFormEnabled(false)}
//           className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full pointer-events-auto"
//         >
//           x
//         </button>
//         <p className=" w-4/5 md:w-3/5 mb-10 flex items-center justify-center uppercase text-2xl 2xl:text-3xl font-semibold text-white text-center rounded-xl">
//           Completa tus datos
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className=" w-4/5 md:w-3/5 flex flex-col items-center justify-center gap-4 pointer-events-auto"
//         >
//           <input type="text" name="name" placeholder="Nombre" />
//           <input type="email" name="email" placeholder="Email" />
//           <div className="space-x-2">
//             <input type="checkbox" name="mayor_de_18" />
//             <span className=" text-white">Soy mayor de 18 años</span>
//           </div>

//           <button
//             type="submit"
//             className="mt-10 pointer-events-auto uppercase hover:scale-105 hover:bg-primary/80 inline-flex items-center justify-center rounded-[5px]  font-semibold text-lg py-2 px-4 bg-primary text-black"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
