import { getWpCategories } from '@/lib/api/wp/wp-actions'
import { EditorialPosts } from '@/components/content/EditorialPosts'
import dictionary from '@/dictionary/lang.json'

export default async function Page() {
  const [category] = await getWpCategories({
    slug: 'local-flavors',
  })

  if (!category)
    return (
      <div className=" w-full h-[50dvh] flex items-center justify-center">
        <div className=" w-5/6 max-w-[400px] mx-auto h-20 bg-black/80 flex items-center justify-center rounded-xl">
          <p className=" text-white">{dictionary['Content not found']}</p>
        </div>
      </div>
    )

  return <EditorialPosts category={category} url={`/local-flavors`} />
}
