import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'
import type { dataProperty } from 'aos'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { WithSymbolHeading } from '~components/common/Heading/WithSymbolHeading'
import { RoundButtonLink } from '~components/common/Buttons/RoundButton'

// scss
import * as styles from './Service.module.scss'

// images
import { default as ImageServicePc } from '~images/top/img-service-pc.png'
import { default as ImageServiceSp } from '~images/top/img-service-sp.png'

// utils
import { pagesPath } from '~utils/$path'

export const Service: React.FCX = (props) => {
  const { className, style } = props

  const withSymbolHeadingProps: dataProperty & {
    text: string
  } = {
    text: 'SERVICE',
    'data-aos': 'fade-up',
  }

  return (
    <div
      id="service"
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
              en: 'Service',
              ja: '業務内容',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <WithSymbolHeading
            className={classnames(
              styles['component__header'],
              styles['header'],
              'tablet:hidden'
            )}
            symbolColor={'gradient'}
            textColor={styles['palette-deepblue']}
            {...{ ...withSymbolHeadingProps }}
          >
            <p className={styles['header__text']}>
              お客様の課題をお伺いし、システム受託開発からSESまで幅広くご提案。
              <br />
              共に解決してまいります。
            </p>
          </WithSymbolHeading>
          <WithSymbolHeading
            className={classnames(
              styles['component__header'],
              styles['header'],
              'hidden tablet:block'
            )}
            symbolColor={styles['palette-white']}
            textColor={styles['palette-white']}
            {...{ ...withSymbolHeadingProps }}
          >
            <p className={styles['header__text']}>
              お客様の課題をお伺いし、システム受託開発からSESまで幅広くご提案。
              <br />
              共に解決してまいります。
            </p>
          </WithSymbolHeading>
          <ul className={styles['component__list']}>
            <li
              className={classnames(styles['component__item'], styles['item'])}
              data-aos="fade-up"
            >
              <header className={styles['item__header']}>
                <h4 className={styles['item__title']}>共創する受託開発</h4>
                <p className={styles['item__sub-title']}>
                  Co-Creation Contract Development
                </p>
              </header>
              <p className={styles['item__description']}>
                貴社の事業を成長させるためのシステム開発を通じて、
                <br />
                価値を共に創り続けます。
                <br />
                今までの請負型の開発プロセスのように、時間をかけて
                <br className="inline-block tablet:hidden" />
                開発を行い「納品して終わり」ではなく、オフショアで
                <br className="inline-block tablet:hidden" />
                の定額顧問スタイルを低コストで提供することにより、
                <br className="inline-block tablet:hidden" />
                弊社はお客様のパートナーとなり、事業成長と併走して
                <br className="inline-block tablet:hidden" />
                まいります。
              </p>
              <div className={styles['item__button-wrap']}>
                <RoundButtonLink
                  href={pagesPath.contract_development.$url()}
                  className={styles['item__button']}
                  icon={true}
                >
                  開発をご依頼のお客様
                </RoundButtonLink>
              </div>
            </li>
            <li
              className={classnames(styles['component__item'], styles['item'])}
              data-aos="fade-up"
            >
              <header className={styles['item__header']}>
                <h4 className={styles['item__title']}>
                  グローイングアイランズのSES
                </h4>
                <p className={styles['item__sub-title']}>
                  Growing Islands&apos;s SES
                </p>
              </header>
              <p className={styles['item__description']}>
                代表自身がエンジニアである弊社では、
                <br className="inline-block tablet:hidden" />
                エンジニア人材を探す企業様、そして案件を探す
                <br className="inline-block tablet:hidden" />
                エンジニアの皆様両方の立場を理解し、
                <br className="inline-block tablet:hidden" />
                適切なマッチングとご紹介を行うことで、多くのお客様・
                <br className="inline-block tablet:hidden" />
                エンジニアの皆様よりご好評を頂いております。
              </p>
              <div className={styles['item__button-wrap']}>
                <RoundButtonLink
                  href={pagesPath.ses.$url()}
                  className={styles['item__button']}
                  icon={true}
                >
                  SESをご依頼のお客様
                </RoundButtonLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={classnames(
          styles['component__image'],
          'hidden tablet:block'
        )}
      >
        <Image
          src={ImageServicePc.src}
          alt="共創する受託開発のイメージ"
          width="100%"
          placeholder="blur"
        />
      </div>
      <div className={classnames(styles['component__image'], 'tablet:hidden')}>
        <Image
          src={ImageServiceSp.src}
          alt="共創する受託開発のイメージ"
          width="100%"
          placeholder="blur"
        />
      </div>
    </div>
  )
}
