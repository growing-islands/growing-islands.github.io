import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { VoiceItem } from '~components/common/VoiceItem'

// scss
import * as styles from './Voice.module.scss'

// images
import { default as IllustVoice01 } from '~images/contract-development/illust-voice-01.png'
import { default as IllustVoice02 } from '~images/contract-development/illust-voice-02.png'
import { default as IllustVoice03 } from '~images/contract-development/illust-voice-03.png'

export const Voice: React.FCX = (props) => {
  const { className, style } = props

  const VoiceItems: React.ComponentProps<typeof VoiceItem>[] = [
    {
      title: '自社サービスを無駄なコストをかける事なく開発',
      position: `有限会社スズキプリンティングサービス様\n自社サービス開発`,
      description:
        '自社サービスの開発を依頼し、開発期間が1年と長期に渡る中、やはり要件の変更なども柔軟に対応できるユメラボさんの「共創する受託開発」で良かったと思える分岐がたくさんありました。開発開始までの期間も短く、月額の初期投資も抑えながら、必要な機能作成と検証を繰り返す事で、結果的に無駄なコストをかける事なく開発できたと感じています。',
      image: {
        src: IllustVoice01,
        width: IllustVoice01.width,
        height: IllustVoice01.height,
      },
    },
    {
      title: 'プロジェクトの途中からでも柔軟に対応',
      position: `人材サービス系企業様\n自社サービス開発`,
      description:
        '自社のSaaSに関して開発途中から参画頂きました。\n市場を取り巻く環境が変わる中、月額制の顧問契約で開発の要件変更にも対応いただき、インフラからフロントまで幅広く対応いただきました。\n週に1回の定例ミーティングで進捗のすり合わせを行い、ディレクターの方に柔軟な対応を頂いたのが特に印象的です。\n公開後もPDCAを回しながら、マーケティングの観点からも様々な相談ができるので、とても心強いと感じています。',
      image: {
        src: IllustVoice02,
        width: IllustVoice02.width,
        height: IllustVoice02.height,
      },
    },
    {
      title: '定額制でDXの第一歩からサポート',
      position: `食品系メーカー様\n社内システム開発`,
      description:
        '社内で使うシステムの構築を依頼しました。\n別の会社に見積もりを取った際、最終的に一括でまとまった金額が必要との話になり難しい判断を迫られていた所、月額制で対応していただけるユメラボさんにお話を聞ける機会がありました。\n毎月定額で契約できる所が予算を取りやすく、また、オフショア開発との事で満足できる価格感で進んでおります。\n内容的も定例の際に丁寧な対応を頂き、スケジュール通り機能ができて行くので安心しています。',
      image: {
        src: IllustVoice03,
        width: IllustVoice03.width,
        height: IllustVoice03.height,
      },
    },
  ]

  return (
    <div
      id="voice"
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
              en: 'Voice',
              ja: 'お客様の声',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>お客様の声</h2>
          </header>
          <ul className={styles['component__list']}>
            {VoiceItems.map((item, index) => {
              const { title } = item
              return (
                <li
                  key={`${title}-${index}`}
                  className={styles['component__item']}
                  data-aos="fade-up"
                >
                  <VoiceItem reverse={(index + 1) % 2 === 0} {...{ ...item }} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
