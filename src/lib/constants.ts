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
  'sabores-venezolanos': 39,
  shorts: 21,
  recipes: 20,
  'bebidas-con-alcohol': 41,
  'bebidas-sin-alcohol': 42,
  'postres-y-dulces': 33,
  'recetas-con-carne': 27,
  'recetas-con-pescado': 31,
  'recetas-con-pollo': 30,
  'recetas-con-verduras': 32,
  'recetas-de-pastas': 40,
}
