// src/components/layout/Layout.tsx
'use client'
import React from 'react'
import { Header } from '@/components/layout/Header'
import { MenuMobile } from '@/components/ui/menu/MenuMobile'
import { PRIMARY_COLOR } from '@/lib/constants'
import { Footer } from '@/components/layout/Footer'
import { Chatbot } from '../Chatbot'
import SidebarMenu from './SidebarMenu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <Header />
      <main className=" relative z-0 w-full pt-[5rem] pb-[3rem] md:pb-0">
        {children}
      </main>
      <Chatbot />
      <Footer />
      <SidebarMenu />
      <MenuMobile
        menuClassName={`bg-black`}
        titleColor="text-white"
        titleActiveColor="text-[#FFB626]"
        iconColor="white"
        menuItemClassName="bg-black"
        iconActiveColor={PRIMARY_COLOR}
        hideTitle
      />
    </div>
  )
}

// version anterior: falla, carga la peticion en loop interminable

// 'use client'
// import React, { useEffect } from 'react'
// import { Header } from '@/components/layout/Header'
// import { MenuMobile } from '@/components/ui/menu/MenuMobile'

// import { PRIMARY_COLOR } from '@/lib/constants'
// import { Footer } from '@/components/layout/Footer'
// import { Chatbot } from '../Chatbot'
// import SidebarMenu from './SidebarMenu'

// import { useAdditionalComponentsStore } from '@/lib/modules/additional-components/additional-components-store'
// import { getAdditionalConfig } from '@/lib/api/additional-config/additional-config-actions'

// type LayoutProps = {
//   children: React.ReactNode
// }

// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const { setAdditionalConfig } = useAdditionalComponentsStore()

//   useEffect(() => {
//     const fetchAdditionalConfig = async () => {
//       getAdditionalConfig().then((res) =>
//         // set additional config store
//         {
//           if (!res) {
//             console.log('No additional config found')
//             setAdditionalConfig({
//               game: {
//                 title: '',
//                 bannerMobile: '',
//                 bannerDesktop: '',
//                 url: '',
//                 validPeriod: {
//                   startDate: '',
//                   endDate: '',
//                 },
//               },
//               additionalSection: {
//                 show: false,
//                 title: '',
//                 'wp-category-slug': '',
//                 'wp-category-id': 0,
//               },
//               validatorActive: false,
//             })
//             return
//           }
//           setAdditionalConfig(res)
//         },
//       )
//     }
//     fetchAdditionalConfig()
//   }, [])

//   return (
//     <div className=" min-h-screen flex flex-col justify-between ">
//       <Header />
//       <main className="relative z-0 w-full pt-[5rem] pb-[3rem] md:pb-0">
//         {children}
//       </main>
//       <Chatbot />
//       <Footer />
//       <SidebarMenu />
//       <MenuMobile
//         menuClassName={`bg-black`}
//         titleColor="text-white"
//         titleActiveColor="text-[#FFB626]"
//         iconColor="white"
//         menuItemClassName="bg-black"
//         // activeItemColor='bg-[#FFB626]'
//         iconActiveColor={PRIMARY_COLOR}
//         hideTitle
//       />
//     </div>
//   )
// }
