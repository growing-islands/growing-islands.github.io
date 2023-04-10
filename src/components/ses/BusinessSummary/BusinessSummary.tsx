import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'

// scss
import * as styles from './BusinessSummary.module.scss'

export const BusinessSummary: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="business-summary"
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
              en: 'Business Summary',
              ja: '事業概要',
            }}
            textColor={styles['palette-white']}
            borderColor={styles['palette-smokegray']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>事業概要</h2>
            <p className={styles['component__text']}>
              弊社代表はエンジニアとして15年、様々な現場に携わっており、
              <br className="hidden tablet:inline-block" />
              今も現役エンジニアとして活動しております。
              <br />
              その経験をもとに、現場でお仕事をするエンジニア様の要望や、
              <br className="hidden tablet:inline-block" />
              エンジニアを求める企業様のご希望まで共にしっかりと把握し、
              <br className="hidden tablet:inline-block" />
              手厚いマネジメントを行う事で長期継続の案件を数多く保有、
              <br className="hidden tablet:inline-block" />
              ハイレベルエンジニア様のご紹介も可能としております。
            </p>
          </header>
        </div>
      </div>
    </div>
  )
}
