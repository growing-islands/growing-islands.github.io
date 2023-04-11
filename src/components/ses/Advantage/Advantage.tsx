import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { SymbolMark } from '~components/common/Icons/Logo'

// scss
import * as styles from './Advantage.module.scss'

import { default as ImageTriCircle } from '~images/ses/img-tripartite_circle.png'
import { default as Illust01 } from '~images/ses/illust-advantage-01.png'
import { default as Illust02 } from '~images/ses/illust-advantage-02.png'
import { default as Illust03 } from '~images/ses/illust-advantage-03.png'

export const Advantage: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="advantage"
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
              en: 'Advantage',
              ja: 'ユメラボのSES 3つの強み',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>
              ユメラボのSES 3つの強み
            </h2>
          </header>
          <div className={styles['component__content']} data-aos="fade-up">
            <div className={styles['component__circle']}>
              <Image
                src={ImageTriCircle.src}
                alt="Object"
                width={1029}
                height={1029}
                placeholder="blur"
              />
            </div>
            <div
              className={classnames(
                styles['component__center'],
                styles['center']
              )}
            >
              <div className={styles['center__logo']}>
                <SymbolMark
                  gradient={true}
                  primaryColor={styles['palette-deepblue']}
                  shadowColor={styles['palette-deepblue']}
                />
              </div>
              <p className={styles['center__text']}>
                YumeLab&apos;s
                <br />
                SES
              </p>
            </div>
            <ol className={styles['component__round-list']}>
              <li
                className={classnames(
                  styles['component__item'],
                  styles['item']
                )}
              >
                <div className={styles['item__number']} />
                <h3 className={styles['item__title']}>
                  代表自身が
                  <br className="tablet:hidden" />
                  エンジニア
                </h3>
                <p className={styles['item__text']}>
                  弊社代表が現役エンジニアです。現場で
                  <br />
                  気をつけるべきポイント、案件としてど
                  <br />
                  う伝えるべきか等、総合的にフォロー
                  <br />
                  アップいたします。
                </p>
              </li>
              <li
                className={classnames(
                  styles['component__item'],
                  styles['item']
                )}
              >
                <div className={styles['item__number']} />
                <h3 className={styles['item__title']}>マネジメント</h3>
                <p className={styles['item__text']}>
                  現場に入って頂いている間、弊社代表が
                  <br />
                  しっかりとマネジメントを行い、双方に
                  <br />
                  トラブルのない、良い信頼関係を構築し
                  <br />
                  て参ります。
                </p>
              </li>
              <li
                className={classnames(
                  styles['component__item'],
                  styles['item']
                )}
              >
                <div className={styles['item__number']} />
                <h3 className={styles['item__title']}>長期稼働</h3>
                <p className={styles['item__text']}>
                  信頼できるお客様に対し、しっかりとコミュ
                  <br />
                  ニケーションの取れたエンジニア様を紹介し
                  <br />
                  ておりますので、結果多くの案件で長期稼働
                  <br />
                  となっております。
                </p>
              </li>
            </ol>
            <div className={styles['component__images']}>
              <div className={styles['component__illust']}>
                <Image
                  src={Illust01.src}
                  alt="代表自身がエンジニア"
                  width={132}
                  height={132}
                  placeholder="blur"
                />
              </div>
              <div className={styles['component__illust']}>
                <Image
                  src={Illust02.src}
                  alt="マネジメント"
                  width={128}
                  height={128}
                  placeholder="blur"
                />
              </div>
              <div className={styles['component__illust']}>
                <Image
                  src={Illust03.src}
                  alt="長期稼働"
                  width={144}
                  height={144}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          <ol
            className={classnames(
              styles['component__detail-list'],
              'tablet:hidden'
            )}
            data-aos="fade-up"
          >
            <li
              className={classnames(
                styles['component__detail'],
                styles['detail']
              )}
            >
              <h3 className={styles['detail__title']}>代表自身がエンジニア</h3>
              <p className={styles['detail__text']}>
                弊社代表が現役エンジニアです。
                <br />
                現場で気をつけるべきポイント、案件としてどう伝えるべきか等、
                <br />
                総合的にフォローアップいたします。
              </p>
            </li>
            <li
              className={classnames(
                styles['component__detail'],
                styles['detail']
              )}
            >
              <h3 className={styles['detail__title']}>マネジメント</h3>
              <p className={styles['detail__text']}>
                現場に入って頂いている間、弊社代表がしっかりと
                <br />
                マネジメントを行い、双方にトラブルのない、
                <br />
                良い信頼関係を構築して参ります。
              </p>
            </li>
            <li
              className={classnames(
                styles['component__detail'],
                styles['detail']
              )}
            >
              <h3 className={styles['detail__title']}>長期稼働</h3>
              <p className={styles['detail__text']}>
                信頼できるお客様に対し、しっかりと
                <br />
                コミュニケーションの取れたエンジニア様を紹介しておりますので、
                <br />
                結果多くの案件で長期稼働となっております。
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
