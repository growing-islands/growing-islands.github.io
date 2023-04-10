import { default as Image } from 'next/image'
import type { ImageProps } from 'next/image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { LineBreakText } from '~components/common/LineBreakText'
import { Angle } from '~components/common/Icons/Angle'

// scss
import * as styles from './Step.module.scss'

// images
import { default as IllustStep1 } from '~images/contract-development/illust-step-01.png'
import { default as IllustStep2 } from '~images/contract-development/illust-step-02.png'
import { default as IllustStep3 } from '~images/contract-development/illust-step-03.png'
import { default as IllustStep4 } from '~images/contract-development/illust-step-04.png'
import { default as IllustStep5 } from '~images/contract-development/illust-step-05.png'

const LIST_ITEMS = [
  {
    image: IllustStep1,
    spMarginTop: 33,
    title: '完成形の想像',
    text: 'お客様側にて「どんな事を解決したいか」理想像を簡単におまとめ下さい。',
  },
  {
    image: IllustStep2,
    spMarginTop: 38,
    title: 'お問い合わせ',
    text: 'フォームから、またはご紹介にて受付けを行なっております。',
  },
  {
    image: IllustStep3,
    spMarginTop: 31,
    title: '初回のお打ち合わせ',
    text: 'お客さまが検討されている事業の概要や現在の課題、将来のビジョンについて説明して頂きます。',
  },
  {
    image: IllustStep4,
    spMarginTop: 35,
    title: 'ご相談期間',
    text: '無料のご相談期間となります。<br class="tablet:hidden" />(月4回まで)<br class="hidden tablet:block" />事業の方向性を決定、実施すべき施策を可視化いたします。',
    attention: '※延長される場合は別途料金が発生する場合がございます',
  },
  {
    image: IllustStep5,
    spMarginTop: 37,
    title: '正式契約',
    text: 'まず3ヶ月以内で実現できる最低限のサービスを目指します。<br />毎週定例会を実施し、1週間単位で成果物を定義、実現していきます。',
  },
]

export const Step: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="step"
      className={classnames(styles['component'], className)}
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames(styles['component__inner'], 'l-inner')}>
          <ColumnHeadingForSection
            className={classnames(
              styles['component__column-header'],
              'hidden tablet:block'
            )}
            texts={{
              en: 'Step',
              ja: '開発開始までの流れ',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <LineBreakText
              className={styles['component__title']}
              tag="h2"
              text="開発開始までの流れ"
            />
          </header>
          <ol className={styles['component__list']} data-aos="fade-up">
            {LIST_ITEMS.map((item, index) => {
              const { title, image, text, attention } = item

              const imageOptions: Partial<ImageProps> = {
                placeholder: 'blur',
              }

              return (
                <li
                  key={item.title}
                  className={classnames(
                    styles['component__item'],
                    styles['item']
                  )}
                >
                  <div className={styles['item__head']}>
                    <div className={styles['item__image']}>
                      <Image
                        src={image}
                        alt={`${title}のイラスト`}
                        width={image.width}
                        height={image.height}
                        {...imageOptions}
                      />
                    </div>
                  </div>
                  <div className={styles['item__body']}>
                    <h3 className={styles['item__title']}>{title}</h3>
                    <p
                      className={styles['item__text']}
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                    />
                    {attention && (
                      <LineBreakText
                        className={styles['item__attention']}
                        text={attention}
                      />
                    )}
                  </div>
                  {index + 1 !== LIST_ITEMS.length && (
                    <Angle className={styles['item__icon']} />
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
