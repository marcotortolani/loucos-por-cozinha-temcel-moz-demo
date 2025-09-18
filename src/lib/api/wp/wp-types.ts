export type CategoryParams = {
  parent?: number | number[]
  slug?: string
  id?: number
  name?: string
  description?: string
  include?: string
  exclude?: string
  per_page?: number
}

export type TagParams = {
  parent?: number | number[]
  slug?: string
  id?: string
  name?: string
  description?: string
  include?: string
  exclude?: string
  per_page?: number
}

export type Tag = {
  id?: number
  description?: string
  name?: string
  slug?: string
}

export type Category = {
  id?: number
  description?: string
  name?: string
  slug?: string
  image?: string
  parent?: number
  featured?: boolean
}

export type Post = {
  id?: number
  date?: string
  date_gmt?: string
  slug?: string
  title?: {
    rendered: string
  }
  content?: {
    rendered: string
  }
  video: {
    url: string
    post_video_type: 'short' | 'normal'
  }
  categories: number[]
  tags: number[]
  featured_image: [string, number, number, boolean]
}

export type PostParams = {
  categories?: string
  slug?: string
  include?: string
  exclude?: string
  search?: string
  per_page?: number
  offset?: number
}
