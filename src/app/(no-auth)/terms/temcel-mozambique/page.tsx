// src/app/(no-auth)/terms/tmcel-mozambique/page.tsx

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  TitleStyled,
  Title2Styled,
  ParagraphStyled,
} from '@/components/terms/text-elements'
import { PricingTable } from '@/components/terms/PricingTable'
import { getConfig } from '@/config'

import dictionary from '@/dictionary/lang.json'

const operatorCountry = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY || 'test'
const { prodUrl: URL_SITE_PROD } = getConfig(operatorCountry)

const pricingData = [
  {
    serviceType: 'Local e Conteúdo de Vídeo Internacional',
    daily: 'MT7',
    weekly: '15MT',
    monthly: '50MT',
  },
  {
    serviceType: 'Conteúdo SMS',
    daily: 'MT3',
    weekly: 'Não disponível',
    monthly: 'Não disponível',
  },
]

export default async function Page() {
  return (
    <Container className="lg:max-w-screen-lg xl:max-w-screen-xl mt-10 px-4 lg:px-24 py-[2rem] lg:py-14 bg-white rounded-lg">
      <div className="relative w-full flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Termos e Condições</TitleStyled>
          <ParagraphStyled>
            Os seguintes termos e condições aplicam-se ao serviço{' '}
            {dictionary['Mad for Cooking']} (o &quot;Serviço&quot;) e, ao subscrever o
            Serviço, será considerado como tendo lido, compreendido e aceite o
            mesmo:
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>1. Serviço</Title2Styled>
          <ParagraphStyled>
            Este serviço permite aos utilizadores ter fácil acesso e controlo
            sobre conteúdos gastronómicos locais e internacionais de que gostam,
            com a conveniência dos seus telemóveis.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>2. Elegibilidade</Title2Styled>
          <ParagraphStyled>
            Este Serviço está aberto a todos os subscritores TMCEL Prépagos,
            Pós-pagos e Híbridos no território da República de Moçambique.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>3. Duração do serviço</Title2Styled>
          <ParagraphStyled>
            O serviço funcionará a partir das 00:00 do dia 1 de abril de 2026
            (&quot;Data de Lançamento do Serviço&quot;).
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>4. Como Aceder ao Serviço</Title2Styled>
          <ParagraphStyled>
            (a) Poderá transmitir conteúdos gastronómicos locais e
            internacionais acedendo à URL:{' '}
            <Link
              className="text-sky-600 underline"
              target="_blank"
              href={URL_SITE_PROD}
            >
              {URL_SITE_PROD}
            </Link>{' '}
            do seu smartphone Android ou iOS com navegador ou enviando para o
            número curto <span className="font-semibold">832020</span>:
          </ParagraphStyled>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-sm md:text-base lg:text-lg">
              a palavra <span className="font-bold">CHEF</span> para o Serviço
              Diário
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              a palavra <span className="font-bold">RECEITAS</span> para o
              Serviço Semanal
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              a palavra <span className="font-bold">LOUCOS</span> para o Serviço
              Mensal
            </li>
          </ul>
          <ParagraphStyled>
            (b) Poderá receber conteúdos gastronómicos via SMS para o seu
            telemóvel móvel sem navegador, enviando a palavra{' '}
            <span className="font-bold">COZINHA</span> para o número curto{' '}
            <span className="font-semibold">832020</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            (c) Depois de subscrever, pode transmitir ou receber conteúdos
            gastronómicos no Serviço aos preços indicados abaixo.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>5. Preço e Validade do Conteúdo:</Title2Styled>
          <ParagraphStyled>(a)</ParagraphStyled>
          <PricingTable rows={pricingData} />
          <ParagraphStyled>
            (b) Para aceder ao Serviço, o Cliente deve estar subscrito ao
            serviço {dictionary['Mad for Cooking']}. É uma subscrição diária,
            semanal ou mensal, com renovação automática após o pagamento do
            respetivo preço após o término do período.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>6. Como cancelar a subscrição do serviço</Title2Styled>
          <ParagraphStyled>
            (a) Poderá cancelar a subscrição do serviço clicando no botão
            Descredenciar na URL:{' '}
            <Link
              className="text-sky-600 underline"
              target="_blank"
              href={URL_SITE_PROD}
            >
              {URL_SITE_PROD}
            </Link>{' '}
            a partir do seu smartphone Android ou iOS ou enviando a palavra{' '}
            <span className="font-bold">BAIXA</span> para o número curto{' '}
            <span className="font-semibold">832020</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            (b) Poderá cancelar a subscrição do conteúdo gastronómico por SMS a
            partir do seu telemóvel básico, enviando a palavra{' '}
            <span className="font-bold">BAIXA</span> para o número curto{' '}
            <span className="font-semibold">832020</span>.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>Outros Termos</Title2Styled>
          <ParagraphStyled>
            (a) Não poderá subscrever mais do que uma subscrição da{' '}
            {dictionary['Mad for Cooking']} ao mesmo tempo. Se desejar alterar a
            sua subscrição, primeiro terá de cancelar a subscrição da atual. Se
            cancelar e voltar a subscrever, mesmo que seja na mesma linha, a
            hora da sua subscrição não será reconhecida, tendo de começar do
            zero no momento da nova subscrição.
          </ParagraphStyled>
        </section>

        <section className="w-full flex flex-col gap-4">
          <Title2Styled>7. Prorrogação dos Mandatos</Title2Styled>
          <ParagraphStyled>
            (a) Salvo as modificações acima, estes Termos e Condições são
            suplementares e sujeitos aos Termos e Condições da Empresa
            publicados e aos termos de utilização de qualquer outro serviço de
            que possa usufruir.
          </ParagraphStyled>
          <ParagraphStyled>
            (b) A TMCEL reserva-se o direito de alterar ou alterar estes termos
            e condições ou de se retirar do Serviço a qualquer momento.
          </ParagraphStyled>
          <ParagraphStyled>
            (c) Estes Termos e Condições estão disponíveis em{' '}
            <Link
              className="text-sky-600 underline"
              target="_blank"
              href={URL_SITE_PROD}
            >
              {URL_SITE_PROD}
            </Link>
          </ParagraphStyled>
        </section>
      </div>
    </Container>
  )
}
