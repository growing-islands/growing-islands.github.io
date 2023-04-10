import { default as Image } from 'next/image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { WithSymbolHeading } from '~components/common/Heading/WithSymbolHeading'

// scss
import * as styles from './Mission.module.scss'

// images
import { default as ImageMission01 } from '~images/top/img-mission-01.png'
import { default as ImageMission02 } from '~images/top/img-mission-02.png'
import { default as ImageMission03 } from '~images/top/img-mission-03.png'

type MissionItem = {
  title: string
  image: {
    src: StaticImageData
    width: number
    height: number
  }
  contents: JSX.Element[]
}

const ITEMS: MissionItem[] = [
  {
    title: 'MISSION',
    image: {
      src: ImageMission01,
      width: 532.5,
      height: 532.5,
    },
    contents: [
      <div key="mission" className={styles['item__content']}>
        <p className={styles['item__text']}>
          ITで
          <br className="hidden tablet:inline-block" />
          困っている
          <br className="tablet:hidden" />
          人を助ける
        </p>
      </div>,
    ],
  },
  {
    title: 'VISION',
    image: {
      src: ImageMission02,
      width: 532.5,
      height: 532.5,
    },
    contents: [
      <div key="vision" className={styles['item__content']}>
        <p className={styles['item__text']}>
          IT投資に対する
          <br className="tablet:hidden" />
          ハードルを
          <br />
          極限まで低くする
        </p>
      </div>,
    ],
  },
  {
    title: 'VALUE',
    image: {
      src: ImageMission03,
      width: 532.5,
      height: 532.5,
    },
    contents: [
      <div key="value-1" className={styles['item__content']}>
        <p className={styles['item__text']}>共想「共に想う」</p>
        <p className={styles['item__description']}>
          お客様が考える未来、プロダクトを世に出した
          <br className="hidden tablet:inline-block" />
          後の理想、我々は同じ夢を、同じ視点で見ます。
        </p>
      </div>,
      <div key="value-2" className={styles['item__content']}>
        <p className={styles['item__text']}>共創「共に創る」</p>
        <p className={styles['item__description']}>
          お客様が社会に提供する価値を、
          <br />
          システムを通して共に創ります。
        </p>
      </div>,
      <div key="value-3" className={styles['item__content']}>
        <p className={styles['item__text']}>共走「共に走る」</p>
        <p className={styles['item__description']}>
          変化の激しい時代に飲まれることなく、
          <br className="hidden tablet:inline-block" />
          共に伴走します。
        </p>
      </div>,
    ],
  },
]

export const Mission: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="mission"
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames('l-inner', styles['component__inner'])}>
          <ColumnHeadingForSection
            className={classnames(
              styles['component__column-header'],
              'hidden tablet:block'
            )}
            texts={{
              en: 'Service Mission',
              ja: 'ユメラボのポリシー',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <WithSymbolHeading
            className={styles['component__header']}
            text="SERVICE MISSION"
            symbolColor="gradient"
            textColor={styles['palette-deepblue']}
            data-aos="fade-up"
          />
          <svg width="0" height="0" className={styles['svg']}>
            <linearGradient id="gradient-mission" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={styles['palette-deepblue']} />
              <stop offset="50%" stopColor={styles['palette-emeraldgreen']} />
              <stop offset="100%" stopColor={styles['palette-pastelgreen']} />
            </linearGradient>
            <mask id="mask-circle">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="white"
              />
            </mask>
          </svg>
          <ul className={styles['component__list']}>
            {ITEMS.map((item) => {
              const { title, image, contents } = item
              return (
                <li
                  key={title}
                  className={classnames(
                    styles['component__item'],
                    styles['item']
                  )}
                  data-aos="fade-up"
                >
                  <div className={styles['item__inner']}>
                    <header className={styles['item__header']}>
                      <svg
                        className={styles['item__svg']}
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="50"
                          fill="url(#gradient-mission)"
                          mask="url(#mask-circle)"
                        />
                      </svg>
                      <h4 className={styles['item__title']}>{title}</h4>
                    </header>
                    <div className={styles['item__contents']}>
                      {contents.map((content) => content)}
                    </div>
                  </div>
                  <div className={styles['item__image']}>
                    <Image
                      alt={`${title}のモチーフオブジェクト`}
                      placeholder="blur"
                      {...{ ...image }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
