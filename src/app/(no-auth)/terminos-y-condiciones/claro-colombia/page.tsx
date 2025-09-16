import React from 'react'
import { Container } from '@/components/Container'
import {
  TitleStyled,
  Title2Styled,
  ParagraphStyled,
} from '@/components/terms/text-elements'

export default async function Page() {
  return (
    <Container className="lg:max-w-screen-lg xl:max-w-screen-xl md:min-h-fit mt-4 md:mt-10 px-4 lg:px-20 py-[2rem] lg:py-14 bg-white rounded-lg">
      <div className=" relative w-full flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Términos y Condiciones</TitleStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>CLARO COLOMBIA:</Title2Styled>
          <ParagraphStyled>35022 - Loco por la cocina</ParagraphStyled>
          <ParagraphStyled>
            Servicio disponible para usuarios Claro.
          </ParagraphStyled>
          <ParagraphStyled>
            Valor del Servicio semanal de $2,000 IVA Inc + Impoconsumo si
            Aplica, y /o Valor del servicio Mensual de $4.000 IVA Inc +
            Impoconsumo si Aplica.
          </ParagraphStyled>
          <ParagraphStyled>
            Aplicarán cargos de navegación según las condiciones de tu Plan
            tarifario o saldo prepago.
          </ParagraphStyled>
          <ParagraphStyled>
            Para Cancelar la suscripción envia SALIR al 35022. Responsable del
            servicio Media Moob Colombia S.A. Mas información: info@moob.club.
          </ParagraphStyled>
        </section>
      </div>
    </Container>
  )
}
