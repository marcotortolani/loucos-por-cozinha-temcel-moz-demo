import Image from 'next/image'

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 min-h-[60dvh]">
      {/* Icon */}
      <div className="mb-6">
        <Image
          src="/images/icono-baja.webp"
          alt="Desistência do serviço"
          width={100}
          height={100}
          className="object-contain mx-auto"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-white font-bold text-4xl uppercase leading-none mb-6">
        DESISTÊNCIA
        <br />
        DO SERVIÇO
      </h1>

      {/* Instructions */}
      <p className="text-white font-semibold text-2xl leading-thight text-pretty max-w-[260px] lg:max-w-[400px] mt-4">
        Para cancelar a assinatura do serviço, envie um SMS com a palavra{' '}
        <span className="text-[#FFB626] font-bold">BAIXA</span> para o número{' '}
        <span className="text-[#FFB626] font-bold">832020</span>.
      </p>
    </div>
  )
}
