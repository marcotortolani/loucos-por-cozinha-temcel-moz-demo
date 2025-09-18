import React from 'react'
import { ChefPrincipalItem } from '@/components/chef/ChefPrincipalItem'
import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/text/SectionTitle'

import { CATEGORIES } from '@/lib/constants'

import dictionary from '@/dictionary/lang.json'

export default async function Page() {
  const chefs = await getWpCategories({
    parent: CATEGORIES.chefs,
    per_page: 100,
  })

  // reorder chefs "featured"
  const chefsSorted = chefs.sort((a, b) => {
    return Number(b.featured) - Number(a.featured)
  })

  return (
    <Container>
      <SectionTitle>{dictionary['Our chefs']}</SectionTitle>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
        {chefsSorted.map((item, key) => (
          <ChefPrincipalItem item={item} key={key} />
        ))}
      </div>
    </Container>
  )
}
