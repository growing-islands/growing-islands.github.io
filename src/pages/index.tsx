import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { scroller } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { Parallax, Background } from 'react-parallax'

// hooks
import { useHash } from '~hooks/useHash'
import { useDevice } from '~hooks/useDevice'
import { useAppSelector } from '~hooks/useAppSelector'

// stores
import { selectHeaderHeight } from '~stores/Header'

// components
import { SEO } from '~components/common/SEO'
import { Header } from '~components/common/Header'
import { Footer } from '~components/common/Footer'
import { FixedToTopButton } from '~components/common/Buttons/FixedToTopButton'
import { AnimationParticles } from '~components/common/AnimationParticles'

import { MainVisual } from '~components/top/MainVisual'
import { About } from '~components/top/About'
import { Service } from '~components/top/Service'
import { Mission } from '~components/top/Mission'
import { Company } from '~components/top/Company'
import { Contact } from '~components/top/Contact'

// utils
import { INTERSECTION_OPTIONS, PAGE_INFO } from '~utils/Constants'

type ScrollOptionType = Partial<{
  duration: number
  offset: number
  smooth: boolean
}>

const Top: NextPage = () => {
  const [hash, newHash] = useHash()
  const headerHeight = useAppSelector(selectHeaderHeight)
  const router = useRouter()
  const device = useDevice()
  const [isComplete, setIsComplete] = useState<boolean>()
  const { ref, inView } = useInView(INTERSECTION_OPTIONS)

  // mount
  useEffect(() => {
    const scrollOptions: ScrollOptionType = {
      duration: 500,
      smooth: true,
      offset: -headerHeight,
    }
    const { complete } = router.query
    // フォーム送信完了時
    if (typeof complete === 'string' && complete === 'true') {
      // 本当にフォーム送信で得たクエリパラメータなのか確認
      if (
        document.referrer !== '' &&
        document.referrer.indexOf(window.location.origin) > -1
      ) {
        scroller.scrollTo('contact', scrollOptions)
        setIsComplete(true)
        // クエリパラメータの削除
        history.replaceState('', '', '/')
      } else {
        router.replace('/')
      }
    }

    // ハッシュクエリが付与されていた場合、その要素へスムーススクロールする
    if (hash) {
      scroller.scrollTo(hash, scrollOptions)
      newHash('')
    }
  }, [router.query])

  return (
    <div className="l-page">
      <SEO title="幅広いIT事業で価値を共に創り続ける" url={PAGE_INFO.URL} />
      <Header overBorder={inView} />
      <Parallax
        strength={device === 'pc' ? 7000 : 4500}
        contentClassName="l-gradient"
        className="l-parallax is-top"
      >
        <MainVisual />
        <Background className="l-parallax__background">
          <AnimationParticles />
        </Background>
        <main className="l-main" {...{ ref }}>
          <About />
          <Service />
          <Mission />
          <Company />
          <Contact complete={isComplete} />
          <FixedToTopButton />
        </main>
      </Parallax>
      <Footer />
    </div>
  )
}

export default Top
