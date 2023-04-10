import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { Accordion } from '~components/common/Accordion'

// scss
import * as styles from './Faq.module.scss'

const FAQs = [
  {
    head: '【エンジニア様】どのような案件がありますか？',
    body: 'システム・アプリ開発からコーディング・運用・新規事業開発まで様々です。弊社代表による繋がりからの直案件がほとんどのため、案件数は他エージェント会社さんと比べると少ないかもしれません。',
  },
  {
    head: '【エンジニア様】他のエージェントとの違いはなんですか？',
    body: '15年現役エンジニアである弊社代表が直接案件調整・マネジメントを行いますので、ご紹介案件の解像度が高い点、また、望んだ方向性の案件を的確にご紹介可能です。',
  },
  {
    head: '【エンジニア様】常駐先が頻繁に変わりますか？',
    body: '全てとは言えませんが、多くが長期（3年以上）に渡って稼働いただいております。',
  },
  {
    head: '【エンジニア様】未経験案件はありますか？',
    body: '現状未経験エンジニア向け案件は扱っておりません。',
  },
  {
    head: '【企業様】どんなスキルのエンジニアさんがいますか？',
    body: 'Java,PHP,JS,Python,Rubyなど、需要の多い言語で実務経験3年以上のエンジニアさんに多く登録いただいております。',
  },
  {
    head: '【企業様】エンジニアさんにどの程度フォローを行っていますか？',
    body: 'エンジニア様へ月に一度ミーティングを行い、しっかりとフォローを行っております。',
  },
  {
    head: '【企業様】案件のヒアリングは営業さんが来ますか？',
    body: 'ほとんどの場合弊社代表が直接お話を伺います。',
  },
  {
    head: '【企業様】エンジニアさんの面談は営業さんが行いますか？',
    body: '弊社代表が直接行っています。そのためミスマッチも少なく継続いただいております。',
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
