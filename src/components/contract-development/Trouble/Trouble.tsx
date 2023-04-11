import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { LineBreakText } from '~components/common/LineBreakText'

// scss
import * as styles from './Trouble.module.scss'

// images
import { default as ImageTroubleSp } from '~images/contract-development/img-trouble-sp.png'
import { default as ImageTroublePc } from '~images/contract-development/img-trouble-pc.png'

export const Trouble: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="trouble"
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
              en: 'Trouble',
              ja: 'このような事でお困りではありませんか？',
            }}
            textColor={styles['palette-white']}
            borderColor={styles['palette-smokegray']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <LineBreakText
              className={styles['component__title']}
              tag="h2"
              text={`このような事で<br class="tablet:hidden" />お困りではありませんか？`}
            />
            <LineBreakText
              className={styles['component__text']}
              text="システム開発におけるよくある問題"
            />
          </header>
          <div className={styles['component__images']} data-aos="fade-up">
            <div
              className={classnames(
                styles['component__image'],
                'tablet:hidden'
              )}
            >
              <Image
                src={ImageTroubleSp}
                width={705}
                height={1098}
                placeholder="blur"
                alt="低予算でスタートしたい、新規事業を立ち上げたいがエンジニアがいない、物はできたものの事業が立ち上がらない、採用したいがどんな人材を雇えば良いのかわからない、システム担当のエンジニアが退職してブラックボックスになった、途中で仕様を変えたくなっても追加料金を請求される、開発会社と突然連絡が取れなくなった"
              />
            </div>
            <div
              className={classnames(
                styles['component__image'],
                'hidden tablet:block'
              )}
            >
              <Image
                src={ImageTroublePc}
                width={1264}
                height={1198}
                placeholder="blur"
                alt="低予算でスタートしたい、新規事業を立ち上げたいがエンジニアがいない、物はできたものの事業が立ち上がらない、採用したいがどんな人材を雇えば良いのかわからない、システム担当のエンジニアが退職してブラックボックスになった、途中で仕様を変えたくなっても追加料金を請求される、開発会社と突然連絡が取れなくなった"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
