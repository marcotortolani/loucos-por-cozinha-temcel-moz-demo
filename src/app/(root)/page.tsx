import { CarouselHome } from '@/components/home/CarouselHome'
import { Recipes } from '@/components/home/Recipes'
import { VideoCarousel } from '@/components/home/VideoCarousel'
import { CarouselSection } from '@/components/home/CarouselSection'
import { getWpCategories, getWpPosts } from '@/lib/api/wp/wp-actions'
import { ChefCarouselSection } from '@/components/home/ChefCarouselSection'
import { EditorialCarouselSection } from '@/components/home/EditorialCarouselSection'
// import { CarouselCategorySection } from '@/components/home/CarouselCategorySection'
import { Container } from '@/components/Container'
import { ShortCarousel } from '@/components/short/ShortCarousel'

import { CATEGORIES } from '@/lib/constants'

// import { AdditionalSection } from '@/components/home/AdditionalSection'
import { BannerGame } from '@/components/home/BannerGame'

import dictionary from '@/dictionary/lang.json'

export default async function Page() {
  const chefs = await getWpCategories({
    parent: CATEGORIES.chefs,
    per_page: 50,
  })
  const data = await getWpPosts({ categories: CATEGORIES.editorial.toString() })
  const dataShorts = await getWpPosts({
    categories: CATEGORIES.shorts.toString(),
  })
  const dataLocoTips = await getWpPosts({
    categories: CATEGORIES['mad-tips'].toString(),
  })

  const categories = await getWpCategories({
    parent: CATEGORIES.recipes,
    per_page: 3,
  })
  // const otherCategories = await getWpCategories({
  //   include: [41, 42, 40, 33].toString(),
  //   per_page: 4,
  // })
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
        {/* <AdditionalSection /> */}
        <BannerGame />

        <Recipes recipes={categories} />
        <ShortCarousel
          title={dictionary['Shorts']}
          items={shorts}
          moreLink="/shorts"
        />
        <ChefCarouselSection
          title={dictionary['Our chefs']}
          items={chefs}
          moreLink="/chefs"
        />
        <VideoCarousel
          title={dictionary['Video recipes']}
          items={videos}
          moreLink="/content/videos"
        />
        <EditorialCarouselSection
          title={dictionary['Editorial content']}
          items={editorial}
          moreLink="/content/editorial"
        />
        {/* <CarouselCategorySection
          title={dictionary['Other recipes']}
          items={otherCategories}
          moreLink="/recipes"
        /> */}
        <CarouselSection
          title={dictionary['Mad Tips']}
          items={locoTips}
          moreLink="/mad-tips"
        />
      </Container>
    </div>
  )
}
