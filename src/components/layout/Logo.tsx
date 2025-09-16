'use client'
import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-[200px]' }) => {
  return (
    <div className="z-50 flex items-center py-2">
      <Link href="/" prefetch>
        <div className={`relative  ${className}`}>
          <Image
            src="/icons/logo.svg"
            alt="logo-lxc"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </Link>
    </div>
  )
}
