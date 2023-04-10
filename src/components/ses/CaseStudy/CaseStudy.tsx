import { default as classnames } from 'classnames'
import { default as Image } from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper'
import type { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// hooks
import { useDevice } from '~hooks/useDevice'

// scss
import * as styles from './CaseStudy.module.scss'

import { default as LogoShikilab } from '~images/ses/logo-shikilab.png'
import { default as LogoGranthope } from '~images/ses/logo-granthope.png'
import { default as LogoConnectill } from '~images/ses/logo-connectill.png'
import { default as LogoBonzuttner } from '~images/ses/logo-bonzuttner.png'
import { default as LogoSps } from '~images/ses/logo-sps.png'

const SliderImages = [
  {
    src: LogoShikilab,
    alt: '株式会社シキラボ',
    width: 230,
    height: 100,
  },
  {
    src: LogoGranthope,
    alt: 'Granthope',
    width: 230,
    height: 100,
  },
  {
    src: LogoConnectill,
    alt: 'Connectill',
    width: 230,
    height: 100,
  },
  {
    src: LogoBonzuttner,
    alt: 'BonZuttner',
    width: 230,
    height: 100,
  },
  {
    src: LogoSps,
    alt: 'SPS',
    width: 230,
    height: 100,
  },
]

export const CaseStudy: React.FCX = (props) => {
  const { className, style } = props
  const device = useDevice()

  const swiperEnabled =
    device === 'pc' ? SliderImages.length > 5 : SliderImages.length > 3

  const SwiperOptions: SwiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    enabled: swiperEnabled,
    slidesPerView: device === 'pc' ? 5 : 3,
    loop: swiperEnabled,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    spaceBetween: device === 'pc' ? 32 : 12,
    resizeObserver: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    touchRatio: 0,
  }

  return (
    <div
      id="case-study"
      className={classnames(styles['component'], className)}
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames(styles['component__inner'], 'l-inner')}>
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>ご利用企業様</h2>
          </header>
          <div
            className={classnames(
              styles['component__slider'],
              styles['slider'],
              !swiperEnabled && styles['is-disabled']
            )}
            data-aos="fade-up"
          >
            <div className={styles['slider__inner']}>
              <Swiper {...{ ...SwiperOptions }}>
                {SliderImages.map((image, index) => {
                  const { alt } = image
                  return (
                    <SwiperSlide key={`${alt}-${index}`}>
                      <div className={styles['slider__item']}>
                        <Image
                          {...{ ...image }}
                          layout="responsive"
                          placeholder="blur"
                        />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </div>
  )
}
