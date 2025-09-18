import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  TitleStyled,
  Title2Styled,
  ParagraphStyled,
} from '@/components/terms/text-elements'

import dictionary from '@/dictionary/lang.json'

import { getConfig } from '@/config'

const operatorCountry = process.env.NEXT_PUBLIC_OPERATOR_COUNTRY || 'test'
const { prodUrl: URL_SITE_PROD } = getConfig(operatorCountry)

export default async function Page() {
  return (
    <Container className="lg:max-w-screen-lg xl:max-w-screen-xl md:min-h-fit mt-4 md:mt-10 px-4 lg:px-20 py-[2rem] lg:py-14 bg-white rounded-lg">
      <div className=" relative w-full flex flex-col items-center gap-8">
        <section className="w-full flex flex-col gap-4">
          <TitleStyled>Terms and Conditions</TitleStyled>
          <ParagraphStyled>
            This document establishes the terms and conditions that regulate the
            use of the service called "{dictionary['Mad for Cooking']}"
            (hereinafter the "Service" or "Entertainment Option") offered by
            MOOB MEDIA BUSINESS, C.A (the "Provider"), through which users of
            Empresa Operadora S.A. – (hereinafter the "Operator") may access
            from their mobile device, Tablet, laptop or PC, content dedicated to
            the culinary world, exclusive recipe videos, drinks, professional
            chefs, cooking tips, editorial notes.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>
            THE SERVICE: {dictionary['Mad for Cooking']}
          </Title2Styled>
          <ParagraphStyled>
            {dictionary['Mad for Cooking']} is an entertainment service that
            allows the customer to access, through a cell phone, Tablet or
            computer, content dedicated to the culinary world, exclusive recipe
            videos, drinks, professional chefs, cooking tips, editorial notes,
            under the conditions detailed in these Terms and Conditions.
          </ParagraphStyled>
          <ParagraphStyled>
            In this regard, all Operator customers who wish to do so may
            subscribe by requesting their registration in the entertainment
            option by sending an SMS with the command considered valid for such
            action to number 111 (the message price is equivalent to one text
            message per use).
          </ParagraphStyled>
          <ParagraphStyled>
            By sending the word{' '}
            <span className="font-bold">
              SUBSCRIBE, or the command communicated for this action, to number
              111
            </span>
            , the customer will receive an SMS with the link and access
            instructions to the portal, service price, billing frequency and a
            pin to access the entertainment option. Once logged in, they can
            enjoy unlimited access to all the content that{' '}
            {dictionary['Mad for Cooking']}
            offers. Navigation and data transmission charges are not included in
            the service. Users can also subscribe through the Operator's
            website, in the digital entertainment options section, selecting the
            {dictionary['Mad for Cooking']} option, through the service's own
            URL{' '}
            <Link
              className=" text-sky-600 "
              target="_blank"
              href={URL_SITE_PROD}
            >
              {URL_SITE_PROD}
            </Link>{' '}
            or from any other section that the operator provides for this
            purpose.
          </ParagraphStyled>
          <ParagraphStyled>
            The Service is provided through daily renewal subscription mode,
            that is, continuously from the activation of the service by the
            user, until the moment they wish to request service deactivation. To
            unsubscribe, the user must send the word UNSUBSCRIBE to number 111
            and will receive a confirmation message.
          </ParagraphStyled>
          <ParagraphStyled>
            It is an essential requirement for using the subscription that the
            user has SMS and mobile data or WiFi services activated, a
            compatible and properly configured mobile phone. Users must verify
            these aspects prior to requesting the service.
          </ParagraphStyled>
          <ParagraphStyled>
            {dictionary['Mad for Cooking']} will send from number 111 a text
            message with portal access information and pricing at least once a
            month. Additionally, {dictionary['Mad for Cooking']} will send users
            text messages with relevant information during periods when raffles,
            awards and/or activities of interest to the segment are conducted.
          </ParagraphStyled>
          <ParagraphStyled>
            The use of the Service will be subject to acceptance and compliance
            with these Terms and Conditions, which occurs from the moment the
            customer subscribes to the service. All particular conditions,
            notices or operating instructions that are made known to the user
            through the Operator's or Provider's website in relation to the
            Service will also apply.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Service Scope</Title2Styled>
          <ParagraphStyled>
            The Service is available throughout the Operator's Country, for any
            natural person capable of contracting, whose mobile phone line is
            active at the time of requesting registration to the service.
          </ParagraphStyled>
          <ParagraphStyled>
            The content will be available for viewing by the user from the
            moment they successfully complete their registration. The content
            can be viewed from any compatible terminal, requiring mobile data or
            a WiFi connection for this purpose.
          </ParagraphStyled>
          <ParagraphStyled>
            Any User who subscribes to the service and performs the necessary
            authentication steps declares and guarantees full compliance with
            these Terms and Conditions.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Conditions of Use. Intellectual Property</Title2Styled>
          <ParagraphStyled>
            Users are obligated to make lawful use of the Service and the
            content they access as a result of the Subscription, in accordance
            with applicable current law and these Terms and Conditions. It is
            the Users' responsibility to respect the mentioned regulations,
            placing special emphasis on intellectual and industrial property
            rights, and to refrain from using the Service for illicit purposes
            or in a way that attacks or violates the rights of third parties or
            the Provider. Users will be exclusively responsible for damages or
            harm of any nature that may derive from incorrect, illegitimate or
            illicit use of the Service.
          </ParagraphStyled>
          <ParagraphStyled>
            The Provider is the sole owner of the content, and/or has received a
            license to use from the respective owners of said content. All
            content that comprises the Subscription is protected by copyright
            under current regulations. The content may be used by Users only to
            the extent permitted by these Terms and Conditions and applicable
            legislation.
          </ParagraphStyled>
          <ParagraphStyled>
            Unless expressly specified otherwise, content may not be downloaded
            to users' devices.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Responsibility</Title2Styled>
          <ParagraphStyled>
            The responsibility and payment obligation for sending or receiving
            text messages related to the Subscription will be the responsibility
            of the holder of the mobile number used for such purpose, and cannot
            be opposed due to{' '}
            <span className=" font-semibold">
              loss, theft, robbery, misplacement or damage of said mobile
              equipment
            </span>
            , except with prior report to any sending or receiving of these
            messages, made to the Operator through the latter's service centers.
          </ParagraphStyled>
          <ParagraphStyled>
            The Provider and the Operator cannot be considered responsible for
            any damage or harm caused or that could be caused to Users or third
            parties, in their persons or property, by contracting or using the
            Service. They will not be responsible in case of dissatisfaction
            with the service content either. For these cases, users will be free
            to unsubscribe by sending the word{' '}
            <span className=" font-semibold">UNSUBSCRIBE to number 111</span>.
          </ParagraphStyled>
          <ParagraphStyled>
            The Provider is not responsible for Subscriptions that do not
            contain the requested data or that contain erroneous data, nor for
            text messages that do not include the keywords established for
            Service access. It will also not be responsible for requests or
            submissions that are not accepted by the Provider's technological
            platform, nor for delays that content visualizations, text messages
            or any other submission related to the Subscription may suffer, for
            any cause not attributable to the Provider, including but not
            limited to network connectivity failures, excess or saturation of
            network traffic, and/or any characteristics of mobile phones that
            prevent the transmission of said submissions or requests.
          </ParagraphStyled>
          <ParagraphStyled>
            The Provider reserves the right to make all types of modifications
            to the Subscription mechanics without prior notice, with the sole
            requirement of communicating any relevant changes on the website and
            other media.
          </ParagraphStyled>
        </section>
        <section className=" w-full flex flex-col gap-4">
          <Title2Styled>Jurisdiction</Title2Styled>
          <ParagraphStyled>
            Any relationship generated between Users and the Provider by virtue
            of this Service will be governed and agreed upon in total subjection
            to the laws of the Operator's Country, with Users waiving any other
            law to whose application they might be entitled.
          </ParagraphStyled>
          <ParagraphStyled>
            These Terms and Conditions are governed by the law of the Operator's
            Country. For any controversy that may arise from the provision of
            Services or the interpretation and application of the Terms and
            Conditions, the Provider and Users agree to submit to the competent
            courts of the Operator's Country with express waiver of any other
            jurisdiction that might correspond to them.
          </ParagraphStyled>
        </section>
      </div>
    </Container>
  )
}
