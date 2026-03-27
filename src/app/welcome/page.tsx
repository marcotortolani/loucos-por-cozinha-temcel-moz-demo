import Image from 'next/image'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#252525] flex flex-col items-center">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="pt-2">
          <Image
            src="/images/logo-welcome.webp"
            alt="Loucos por Cozinha"
            width={120}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        {/* Hero image */}
        <div className="relative w-full h-[40vh]">
          <div className="absolute top-0 -translate-y-0.5 bg-gradient-to-b from-[#252525] via-[#252525BB] to-transparent w-full h-1/5"></div>
          <div className="absolute bottom-0 translate-y-0.5 bg-gradient-to-t from-[#252525] via-[#252525BB] to-transparent w-full h-1/5"></div>
          <Image
            src="/images/img-welcome.webp"
            alt="Loucos por Cozinha"
            width={400}
            height={320}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text content */}
        <div className="px-6 pb-8 flex flex-col items-center text-center gap-4">
          <div>
            <h1 className="text-3xl font-bold leading-none">
              <span className="text-4xl text-[#FFB626]">Bem-vindo</span>
              <br />
              <span className="text-white">ao Loucos</span>
              <br />
              <span className="text-white">por cozinha!!</span>
            </h1>
          </div>

          <p className="text-white/80 text-sm font-normal leading-tight max-w-[240px] lg:max-w-[320px]">
            Agora pode aceder a todo o nosso conteúdo exclusivo e tornar-se um
            verdadeiro chef! Cozinhar nunca foi tão fácil!
          </p>

          <Link
            href="/"
            className="mt-2 bg-[#FFB626] text-black font-semibold text-3xl rounded-full px-5 py-2 text-center block hover:brightness-95 transition-all"
          >
            Comece já!
          </Link>
        </div>
      </div>
    </div>
  )
}
