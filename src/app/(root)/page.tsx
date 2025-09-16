import { CarouselHome } from '@/components/home/CarouselHome'
import { Recipes } from '@/components/home/Recipes'
import { VideoCarousel } from '@/components/home/VideoCarousel'
import { CarouselSection } from '@/components/home/CarouselSection'
import { getWpCategories, getWpPosts } from '@/lib/api/wp/wp-actions'
import { ChefCarouselSection } from '@/components/home/ChefCarouselSection'
import { EditorialCarouselSection } from '@/components/home/EditorialCarouselSection'
import { CarouselCategorySection } from '@/components/home/CarouselCategorySection'
import { Container } from '@/components/Container'
import { ShortCarousel } from '@/components/short/ShortCarousel'

import { AdditionalSection } from '@/components/home/AdditionalSection'
import { BannerGame } from '@/components/home/BannerGame'
import { BannerCampaign } from '@/components/home/BannerCampaign'

export default async function Page() {
  const chefs = await getWpCategories({ parent: 23, per_page: 50 })
  const data = await getWpPosts({ categories: '22' })
  const dataShorts = await getWpPosts({ categories: '21' })
  const dataLocoTips = await getWpPosts({ categories: '315' })

  const categories = await getWpCategories({
    include: [27, 31, 30, 32].toString(),
    per_page: 4,
  })
  const otherCategories = await getWpCategories({
    include: [41, 42, 40, 33].toString(),
    per_page: 4,
  })
  const dataVideos = await getWpPosts({
    categories: categories?.map((cat) => cat.id).join(','),
  })

  const editorial = data.posts || []
  const shorts = dataShorts.posts || []
  const locoTips = dataLocoTips.posts || []
  const videos = dataVideos.posts || []

  return (
    <div>
      <div className="md:mt-4">
        <CarouselHome />
      </div>

      <Container>
        <AdditionalSection />
        <BannerGame />
        <BannerCampaign />
        <Recipes recipes={categories} />
        <ShortCarousel title="Shorts" items={shorts} moreLink="/shorts" />
        <ChefCarouselSection
          title="Nuestros chefs"
          items={chefs}
          moreLink="/chefs"
        />
        <VideoCarousel
          title="Video recetas"
          items={videos}
          moreLink="/contenido/videos"
        />
        <EditorialCarouselSection
          title="Contenido editorial"
          items={editorial}
          moreLink="/contenido/editorial"
        />
        <CarouselCategorySection
          title="Otras recetas"
          items={otherCategories}
          moreLink="/recetas"
        />
        <CarouselSection
          title="Loco tips"
          items={locoTips}
          moreLink="/loco-tips"
        />
      </Container>
    </div>
  )
}
