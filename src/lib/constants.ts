import dictionary from '@/dictionary/lang.json'

export const WP_BACKEND = process.env.NEXT_PUBLIC_API_URL
const OPERATOR_COUNTRY = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY

export const REVALIDATE = 3600 * 2

export const PREFIX_PERSIST_STORE = `${dictionary['siteName']}-${OPERATOR_COUNTRY}`

export const PRIMARY_COLOR = '#FFB626'

export const HASH_TAG = [`#${dictionary['siteName']}`]

export const CATEGORIES = {
  chefs: 23,
  editorial: 22,
  'mad-tips': 315,
  'local-flavors': 39,
  shorts: 21,
  recipes: 20,
  drinks: 41,
  sweets: 33,
  savory: 27,
}
