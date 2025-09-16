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
          <Title2Styled>PERSONAL PARAGUAY:</Title2Styled>
          <ParagraphStyled>
            <span className="font-bold">Loco por la Cocina - 9696</span>
          </ParagraphStyled>
          <ParagraphStyled>
            Servicio de suscripción diaria con renovación automática.
          </ParagraphStyled>
          <ParagraphStyled>Costo por mensaje 2500gs Iva inc.</ParagraphStyled>
          <ParagraphStyled>
            Para salir o cancelar la suscripción enviar baja al 9696.
          </ParagraphStyled>
          <ParagraphStyled>
            Servicio proveído por Media Moob de Paraguay S.R.L.
          </ParagraphStyled>
        </section>
      </div>
    </Container>
  )
}
