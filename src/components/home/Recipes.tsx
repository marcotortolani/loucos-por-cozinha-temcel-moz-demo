'use client'
import { RecipePrincipalItem } from '@/components/recipes/RecipePrincipalItem'
import { Category } from '@/lib/api/wp/wp-types'
import React from 'react'
import { SectionTitle } from '@/components/text/SectionTitle'

import dictionary from '@/dictionary/lang.json'

type RecipesProps = {
  recipes: Category[]
}

export const Recipes: React.FC<RecipesProps> = ({ recipes = [] }) => {
  return (
    <div className="mb-4">
      <SectionTitle color="text-[#FFB626]">
        {dictionary['Popular recipes']}
      </SectionTitle>
      <div className="  grid grid-cols-3 gap-3 md:gap-4">
        {recipes.map((recipe, key) => (
          <RecipePrincipalItem category={recipe} key={key} />
        ))}
      </div>
    </div>
  )
}
