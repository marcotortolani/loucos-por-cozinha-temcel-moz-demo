import { Container } from '@/components/Container'
import Subscribe from '@/components/subscribe/Subscribe'

export default async function Page() {
  return (
    <Container className="md:pt-[6rem] md:min-h-[50dvh] lg:min-h-[50dvh]">
      <Subscribe />
    </Container>
  )
}
