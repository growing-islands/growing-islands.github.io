import { useState } from 'react'
import type { NextPage } from 'next'
import { useInView } from 'react-intersection-observer'

// hooks
import { useDevice } from '~hooks/useDevice'

// components
import { SEO } from '~components/common/SEO'
import { Header } from '~components/common/Header'
import { Footer } from '~components/common/Footer'
import { FixedInternalNavigation } from '~components/common/Navigation/FixedInternalNavigation'
import { FixedToTopButton } from '~components/common/Buttons/FixedToTopButton'

import { MainVisual } from '~components/ses/MainVisual'
import { BusinessSummary } from '~components/ses/BusinessSummary'
import { Trouble } from '~components/ses/Trouble'
import { Advantage } from '~components/ses/Advantage'
import { Voice } from '~components/ses/Voice'
import { CaseStudy } from '~components/ses/CaseStudy'
import { Faq } from '~components/ses/Faq'

import { LeadContact } from '~components/common/LeadContact'

// utils
import { INTERSECTION_OPTIONS, PAGE_INFO } from '~utils/Constants'

import { default as BgContactSp } from '~images/ses/bg-contact-sp.jpg'
import { default as BgContactPc } from '~images/ses/bg-contact-pc.jpg'

const Ses: NextPage = () => {
  const { ref, inView } = useInView(INTERSECTION_OPTIONS)
  const device = useDevice()
  const [headerShow, setHeaderShow] = useState<boolean>(false)

  return (
    <div className="l-page">
      <SEO
        title="ユメラボのSES｜幅広いIT事業で価値を共に創り続ける"
        description="千葉県浦安市のIT/Web開発・SES事業でお客様のIT投資を最大限に生かし価値を共に創り続けるシステム開発企業、株式会社ユメラボの「ユメラボのSES」のご紹介ページです。システム開発・保守運用、IT活用・サポート、SESでの体制構築から、Webサイト制作・企画運用まで、IT/Webに関わるトータルソリューションサービスを提供しております。"
        url={PAGE_INFO.URL + '/ses'}
      />
      <Header overBorder={inView} onShow={setHeaderShow} />
      <div className="l-gradient is-ses">
        <MainVisual />
        <main
          className="l-main"
          {...{ ref }}
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <BusinessSummary />
          <Trouble />
          <Advantage />
          <Voice />
          <CaseStudy />
          <Faq />
          <FixedInternalNavigation
            params={[
              {
                label: `事業\n概要`,
                href: 'business-summary',
              },
              {
                label: `こんな\nお困り`,
                href: 'trouble',
              },
              {
                label: `3つの\n強み`,
                href: 'advantage',
              },
              {
                label: `お客様\nの声`,
                href: 'voice',
              },
              {
                label: `ご利用\n企業様`,
                href: 'case-study',
              },
              {
                label: `FAQ`,
                href: 'faq',
              },
              {
                label: `お問い\n合わせ`,
                href: 'contact',
              },
            ]}
            {...{ headerShow }}
          />
          <FixedToTopButton />
        </main>
        <LeadContact
          text={`株式会社ユメラボは代表自らがエンジニアです。\n企業様のエンジニア不足解消のお手伝いから、エンジニア様への案件ご紹介まで安心してご相談頂けます。\nまずはお気軽にご相談下さい。`}
          style={{
            backgroundImage: `url(
              ${device === 'sp' ? BgContactSp.src : BgContactPc.src}
            )`,
          }}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Ses
