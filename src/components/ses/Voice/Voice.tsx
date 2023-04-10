import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { VoiceItem } from '~components/common/VoiceItem'

// scss
import * as styles from './Voice.module.scss'

// images
import { default as IllustVoice01 } from '~images/ses/illust-voice-01.png'
import { default as IllustVoice02 } from '~images/ses/illust-voice-02.png'

export const Voice: React.FCX = (props) => {
  const { className, style } = props

  const VoiceItems: React.ComponentProps<typeof VoiceItem>[] = [
    {
      title: '柔軟な案件と安心のサポートで未来志向に',
      // eslint-disable-next-line no-irregular-whitespace
      position: `R.Y様　バックエンドエンジニア\n経験19年`,
      description:
        '参画案件は結果を出していれば自分のペースで仕事ができて、無理な要求もありません。\nしかもユメラボさんは定期的に現場まで来て頂けるので、悩みがあればすぐに相談できるのでとても助かります。\nもし今の現場が終了となった場合でも、すぐ別案件を紹介頂けるという安心感もすごいです（笑）\nまた、技術的な相談ができるのも大きなメリットで、「今後お互いこの方向性でいこう」という未来志向のワクワクする話でモチベーションアップにもつながります！\n将来的にはエンジニア以外の仕事でも結果を出せるように色々と挑戦して行きたいです！',
      image: {
        src: IllustVoice01,
        width: IllustVoice01.width,
        height: IllustVoice01.height,
      },
    },
    {
      title: '信頼と成長で次のステップにも視野に',
      // eslint-disable-next-line no-irregular-whitespace
      position: `S.T様　バックエンドエンジニア\n経験13年`,
      description:
        '前職の経歴なども含め相談に乗ってもらい、自分のスキルにマッチした案件を紹介いただきました！\nプロジェクトメンバーの技術スキル水準はもちろん、スピード感・モチベーションも高く、とても成長できる案件です。\nユメラボさんは業務連絡以外にも(web)懇親会を開催するなど、コミュニケーションも大事にされる会社でとても働きやすいです。\n現在バックエンドが中心ですが、知識の幅を広げフロントエンド技術も習得し今後のキャリアに活かしたいと考えています！',
      image: {
        src: IllustVoice02,
        width: IllustVoice02.width,
        height: IllustVoice02.height,
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
              ja: '稼働エンジニア様の声',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <h2 className={styles['component__title']}>稼働エンジニア様の声</h2>
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
