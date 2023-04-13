import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { LineBreakText } from '~components/common/LineBreakText'

// scss
import * as styles from './BusinessSummary.module.scss'

// images
import { default as ImageFlowSp } from '~images/contract-development/img-flow-sp.png'
import { default as ImageFlowPc } from '~images/contract-development/img-flow-pc.png'

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
              お客様の事業戦略から徹底的に理解し、目的を明確化。
              <br />
              目指す未来に共感し、オフショアでの低コストを軸に
              <br />
              適切なIT施策をご提案いたします。
            </p>
          </header>
        </div>
      </div>
      <div className={styles['component__images']} data-aos="fade-up">
        <div
          className={classnames(styles['component__image'], 'tablet:hidden')}
        >
          <Image
            src={ImageFlowSp.src}
            width={750}
            height={880}
            placeholder="blur"
            alt="事業概要フロー図"
          />
        </div>
        <div
          className={classnames(
            styles['component__image'],
            'hidden tablet:block'
          )}
        >
          <Image
            src={ImageFlowPc.src}
            width={1920}
            height={1681}
            placeholder="blur"
            alt="事業概要フロー図"
          />
        </div>
      </div>
      <div className="l-wrap" data-aos="fade-up">
        <div className={classnames(styles['component__inner'], 'l-inner')}>
          <div className={styles['component__detail']}>
            <LineBreakText
              className={styles['component__attention']}
              text="※システムの開発フローに関し「PDCAを小さく早く回す」をコンセプトとしております。"
            />
            <LineBreakText
              className={styles['component__text']}
              text="今までの請負型の開発プロセスのように時間をかけて開発を行い「納品して終わり」ではなく、オフショアでの低コスト定額顧問スタイルを提供することで、弊社はお客様のパートナーとなり、事業成長と併走いたします。"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
