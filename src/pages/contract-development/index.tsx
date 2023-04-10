import { useState } from 'react'
import type { NextPage } from 'next'
import { useInView } from 'react-intersection-observer'
import { Parallax, Background } from 'react-parallax'

// hooks
import { useDevice } from '~hooks/useDevice'

// components
import { SEO } from '~components/common/SEO'
import { Header } from '~components/common/Header'
import { Footer } from '~components/common/Footer'
import { FixedInternalNavigation } from '~components/common/Navigation/FixedInternalNavigation'
import { FixedToTopButton } from '~components/common/Buttons/FixedToTopButton'
import { AnimationParticles } from '~components/common/AnimationParticles'

import { MainVisual } from '~components/contract-development/MainVisual'
import { BusinessSummary } from '~components/contract-development/BusinessSummary'
import { Trouble } from '~components/contract-development/Trouble'
import { Advantage } from '~components/contract-development/Advantage'
import { Voice } from '~components/contract-development/Voice'
import { Step } from '~components/contract-development/Step'
import { Faq } from '~components/contract-development/Faq'

import { LeadContact } from '~components/common/LeadContact'

// utils
import { INTERSECTION_OPTIONS, PAGE_INFO } from '~utils/Constants'

import { default as BgContactSp } from '~images/contract-development/bg-contact-sp.jpg'
import { default as BgContactPc } from '~images/contract-development/bg-contact-pc.jpg'

const ContractDevelopment: NextPage = () => {
  const { ref, inView } = useInView(INTERSECTION_OPTIONS)
  const device = useDevice()
  const [headerShow, setHeaderShow] = useState<boolean>(false)

  return (
    <div className="l-page">
      <SEO
        title="共創する受託開発｜幅広いIT事業で価値を共に創り続ける"
        description="千葉県浦安市のIT/Web開発・SES事業でお客様のIT投資を最大限に生かし価値を共に創り続けるシステム開発企業、株式会社ユメラボの「共創する受託開発」のご紹介ページです。システム開発・保守運用、IT活用・サポート、SESでの体制構築から、Webサイト制作・企画運用まで、IT/Webに関わるトータルソリューションサービスを提供しております。"
        url={PAGE_INFO.URL + '/contract-development'}
      />
      <Header overBorder={inView} onShow={setHeaderShow} />
      <Parallax
        strength={4000}
        contentClassName="l-gradient"
        className="l-parallax is-contract"
      >
        <MainVisual />
        <Background className="hidden tablet:block l-parallax__background">
          <AnimationParticles />
        </Background>
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
          <Step />
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
                label: `4つの\n強み`,
                href: 'advantage',
              },
              {
                label: `お客様\nの声`,
                href: 'voice',
              },
              {
                label: `開始<br class="hidden tablet:inline-block" />まで<br class="tablet:hidden" />の<br class="hidden tablet:inline-block" />流れ`,
                href: 'step',
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
          text={`オフショアの低コスト定額顧問スタイルで、\n安心してご依頼いただける企業様の強力なパートナーとして事業を共創してまいります。\nまずはお気軽にご相談下さい。`}
          style={{
            backgroundImage: `url(
              ${device === 'sp' ? BgContactSp.src : BgContactPc.src}
            )`,
          }}
        />
      </Parallax>
      <Footer />
    </div>
  )
}

export default ContractDevelopment
