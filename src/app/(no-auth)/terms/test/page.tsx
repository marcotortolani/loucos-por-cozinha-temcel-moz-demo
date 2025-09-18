import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  TitleStyled,
  Title2Styled,
  ParagraphStyled,
} from '@/components/terms/text-elements'
import { getConfig } from '@/config'

import dictionary from '@/dictionary/lang.json'

const operatorCountry = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY || 'test'
const { prodUrl: URL_SITE_PROD } = getConfig(operatorCountry)

export default async function Page() {
  return (
    <Container className="lg:max-w-screen-lg xl:max-w-screen-xl mt-10 px-4 lg:px-20 py-[2rem] lg:py-14 bg-white rounded-lg">
      <div className=" relative w-full flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Termos e Condições</TitleStyled>
          <ParagraphStyled>
            Este documento estabelece os termos e condições que regulam o uso do
            serviço denominado {dictionary['Mad for Cooking']}
            (doravante o Serviço ou Opção de Entretenimento) oferecido pela MOOB
            MEDIA BUSINESS, C.A (o Fornecedor), através do qual os utilizadores
            da Empresa Operadora S.A. - (doravante a Operadora) podem aceder a
            partir do seu dispositivo móvel, Tablet, portátil ou PC, a conteúdo
            dedicado ao mundo culinário, vídeos exclusivos de receitas, bebidas,
            chefs profissionais, dicas de cozinha, notas editoriais.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>
            O SERVIÇO: {dictionary['Mad for Cooking']}
          </Title2Styled>
          <ParagraphStyled>
            {dictionary['Mad for Cooking']} é um serviço de entretenimento que
            permite ao cliente aceder, através de um telemóvel, Tablet ou
            computador, a conteúdo dedicado ao mundo culinário, vídeos
            exclusivos de receitas, bebidas, chefs profissionais, dicas de
            cozinha, notas editoriais, nas condições detalhadas nestes Termos e
            Condições.
          </ParagraphStyled>
          <ParagraphStyled>
            Neste sentido, todos os clientes da Operadora que assim o desejem
            podem subscrever solicitando o seu registo na opção de
            entretenimento através do envio de um SMS com o comando considerado
            válido para tal ação ao número 111 (o preço da mensagem é
            equivalente a uma mensagem de texto por utilização).
          </ParagraphStyled>
          <ParagraphStyled>
            Ao enviar a palavra{' '}
            <span className="font-bold">
              SUBSCREVER, ou o comando comunicado para esta ação, ao número 111
            </span>
            , o cliente receberá um SMS com o link e instruções de acesso ao
            portal, preço do serviço, frequência de faturação e um pin para
            aceder à opção de entretenimento. Uma vez autenticado, pode
            desfrutar de acesso ilimitado a todo o conteúdo que o{' '}
            {dictionary['Mad for Cooking']}
            oferece. Os custos de navegação e transmissão de dados não estão
            incluídos no serviço. Os utilizadores também podem subscrever
            através do website da Operadora, na secção de opções de
            entretenimento digital, selecionando a opção{' '}
            {dictionary['Mad for Cooking']}, através do URL próprio do serviço{' '}
            <Link
              className=" text-sky-600 "
              target="_blank"
              href={URL_SITE_PROD}
            >
              {URL_SITE_PROD}
            </Link>{' '}
            ou a partir de qualquer outra secção que a operadora disponibilize
            para este fim.
          </ParagraphStyled>
          <ParagraphStyled>
            O Serviço é prestado através da modalidade de subscrição de
            renovação diária, ou seja, de forma contínua desde a ativação do
            serviço pelo utilizador, até ao momento em que este deseja solicitar
            a desativação do serviço. Para cancelar a subscrição, o utilizador
            deve enviar a palavra CANCELAR ao número 111 e receberá uma mensagem
            de confirmação.
          </ParagraphStyled>
          <ParagraphStyled>
            É um requisito essencial para utilizar a subscrição que o utilizador
            tenha os serviços SMS e dados móveis ou WiFi ativados, um telemóvel
            compatível e corretamente configurado. Os utilizadores devem
            verificar estes aspetos antes de solicitar o serviço.
          </ParagraphStyled>
          <ParagraphStyled>
            {dictionary['Mad for Cooking']} enviará do número 111 uma mensagem
            de texto com informação de acesso ao portal e preços pelo menos uma
            vez por mês. Adicionalmente, {dictionary['Mad for Cooking']} enviará
            aos utilizadores mensagens de texto com informação relevante durante
            períodos em que sejam realizados sorteios, prémios e/ou atividades
            de interesse para o segmento.
          </ParagraphStyled>
          <ParagraphStyled>
            O uso do Serviço estará sujeito à aceitação e cumprimento destes
            Termos e Condições, que ocorre desde o momento em que o cliente
            subscreve o serviço. Também serão aplicáveis todas as condições
            particulares, avisos ou instruções de funcionamento que sejam
            comunicadas ao utilizador através do website da Operadora ou do
            Fornecedor em relação ao Serviço.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Âmbito do Serviço</Title2Styled>
          <ParagraphStyled>
            O Serviço está disponível em todo o País da Operadora, para qualquer
            pessoa singular capaz de contratar, cuja linha de telemóvel esteja
            ativa no momento de solicitar o registo no serviço.
          </ParagraphStyled>
          <ParagraphStyled>
            O conteúdo estará disponível para visualização pelo utilizador a
            partir do momento em que este complete com sucesso o seu registo. O
            conteúdo pode ser visualizado a partir de qualquer terminal
            compatível, requerendo dados móveis ou uma ligação WiFi para este
            fim.
          </ParagraphStyled>
          <ParagraphStyled>
            Qualquer Utilizador que subscreva o serviço e execute os passos de
            autenticação necessários declara e garante o cumprimento total
            destes Termos e Condições.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Condições de Uso. Propriedade Intelectual</Title2Styled>
          <ParagraphStyled>
            Os utilizadores são obrigados a fazer uso lícito do Serviço e do
            conteúdo que acedem como resultado da Subscrição, de acordo com a
            lei atual aplicável e estes Termos e Condições. É responsabilidade
            dos Utilizadores respeitar os regulamentos mencionados, colocando
            especial ênfase nos direitos de propriedade intelectual e
            industrial, e abster-se de usar o Serviço para fins ilícitos ou de
            forma que ataque ou viole os direitos de terceiros ou do Fornecedor.
            Os Utilizadores serão exclusivamente responsáveis por danos ou
            prejuízos de qualquer natureza que possam derivar do uso incorreto,
            ilegítimo ou ilícito do Serviço.
          </ParagraphStyled>
          <ParagraphStyled>
            O Fornecedor é o único proprietário do conteúdo, e/ou recebeu uma
            licença de uso dos respetivos proprietários de dito conteúdo. Todo o
            conteúdo que compreende a Subscrição está protegido por direitos de
            autor sob os regulamentos atuais. O conteúdo pode ser usado pelos
            Utilizadores apenas na medida permitida por estes Termos e Condições
            e legislação aplicável.
          </ParagraphStyled>
          <ParagraphStyled>
            A menos que seja expressamente especificado o contrário, o conteúdo
            não pode ser descarregado para os dispositivos dos utilizadores.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Responsabilidade</Title2Styled>
          <ParagraphStyled>
            A responsabilidade e obrigação de pagamento pelo envio ou receção de
            mensagens de texto relacionadas com a Subscrição será da
            responsabilidade do titular do número móvel usado para tal fim, e
            não pode ser contestada devido a{' '}
            <span className=" font-semibold">
              perda, furto, roubo, extravio ou dano do dito equipamento móvel
            </span>
            , exceto com denúncia prévia a qualquer envio ou receção destas
            mensagens, feita à Operadora através dos centros de atendimento
            desta última.
          </ParagraphStyled>
          <ParagraphStyled>
            O Fornecedor e a Operadora não podem ser considerados responsáveis
            por qualquer dano ou prejuízo causado ou que possa ser causado aos
            Utilizadores ou terceiros, nas suas pessoas ou propriedade, pela
            contratação ou uso do Serviço. Também não serão responsáveis em caso
            de insatisfação com o conteúdo do serviço. Para estes casos, os
            utilizadores serão livres de cancelar a subscrição enviando a
            palavra{' '}
            <span className=" font-semibold">CANCELAR ao número 111</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            O Fornecedor não é responsável pelas Subscrições que não contenham
            os dados solicitados ou que contenham dados erróneos, nem pelas
            mensagens de texto que não incluam as palavras-chave estabelecidas
            para acesso ao Serviço. Também não será responsável por solicitações
            ou submissões que não sejam aceites pela plataforma tecnológica do
            Fornecedor, nem por atrasos que as visualizações de conteúdo,
            mensagens de texto ou qualquer outra submissão relacionada com a
            Subscrição possam sofrer, por qualquer causa não atribuível ao
            Fornecedor, incluindo mas não limitado a falhas de conectividade de
            rede, excesso ou saturação do tráfego de rede, e/ou quaisquer
            características dos telemóveis que impeçam a transmissão de ditas
            submissões ou solicitações.
          </ParagraphStyled>
          <ParagraphStyled>
            O Fornecedor reserva-se o direito de fazer todos os tipos de
            modificações na mecânica da Subscrição sem aviso prévio, com o único
            requisito de comunicar quaisquer mudanças relevantes no website e
            outros meios de comunicação.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Jurisdição</Title2Styled>
          <ParagraphStyled>
            Qualquer relação gerada entre Utilizadores e o Fornecedor em virtude
            deste Serviço será regida e acordada em total sujeição às leis do
            País da Operadora, com os Utilizadores renunciando a qualquer outra
            lei à qual possam ter direito de aplicação.
          </ParagraphStyled>
          <ParagraphStyled>
            Estes Termos e Condições são regidos pela lei do País da Operadora.
            Para qualquer controvérsia que possa surgir da prestação de Serviços
            ou da interpretação e aplicação dos Termos e Condições, o Fornecedor
            e os Utilizadores concordam em submeter-se aos tribunais competentes
            do País da Operadora com renúncia expressa a qualquer outra
            jurisdição que lhes possa corresponder.
          </ParagraphStyled>
        </section>
      </div>
    </Container>
  )
}
