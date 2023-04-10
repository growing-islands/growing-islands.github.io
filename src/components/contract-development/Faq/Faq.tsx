import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { Accordion } from '~components/common/Accordion'

// scss
import * as styles from './Faq.module.scss'

const FAQs = [
  {
    head: '月額予算の最低金額はありますか？',
    body: '予算に合わせて適切な稼働時間の配分を提案させて頂きます、まずはお気軽にご相談下さい。',
  },
  {
    head: 'オフショアでの開発だと不安がありますが大丈夫でしょうか？',
    body: '実績のあるパートナー先と連携して対応しておりますのでご安心ください。',
  },
  {
    head: '開発以外のデザインやマーケティングなどの相談もできますか？',
    body: '可能です。システム以外にも、デザイン・マーケティング・広告運用など、事業をスケールするための様々なチーム構築をご提案いたします。',
  },
  {
    head: 'やりたい事が固まっていないのですが、相談できますか？',
    body: '具体的なビジョンを固めていただいた後にご連絡ください。事業の方向性を決定するお手伝いは、別途ご相談となります。',
  },
  {
    head: '開発の着手までどれくらいかかりますか？',
    body: '内容にもよりますが、最短2週間程度で着手可能な場合がございます。',
  },
]

export const Faq: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="faq"
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
              en: 'FAQ',
              ja: 'よくあるご質問',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>よくあるご質問</h2>
          </header>
          <div className={styles['component__content']}>
            {FAQs.map((faq, index) => {
              return (
                <Accordion
                  key={`${faq.head}-${index}`}
                  className={styles['component__item']}
                  data={{ ...faq }}
                  data-aos="fade-up"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
