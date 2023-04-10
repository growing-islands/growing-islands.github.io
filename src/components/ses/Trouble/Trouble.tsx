import { default as Image } from 'next/image'
import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'

// scss
import * as styles from './Trouble.module.scss'

import { default as BgBalloon } from '~images/ses/bg-balloon.png'
import { default as ImagePerson01 } from '~images/ses/img-person-01.png'
import { default as ImagePerson02 } from '~images/ses/img-person-02.png'

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
            <h2 className={styles['component__title']}>
              このような事で
              <br />
              お困りではありませんか？
            </h2>
            <p className={styles['component__sub-title']}>
              SESにおける企業様・エンジニア様の抱える課題
            </p>
          </header>
          <div className={styles['component__contents']} data-aos="fade-up">
            <div
              className={classnames(styles['component__item'], styles['item'])}
            >
              <div
                className={classnames(
                  styles['item__balloon'],
                  styles['balloon']
                )}
              >
                <Image
                  className={styles['balloon__image']}
                  src={BgBalloon}
                  alt="エンジニア様イメージ画像"
                  width={542}
                  height={274}
                  placeholder="blur"
                  layout="responsive"
                />
                <ul className={styles['balloon__list']}>
                  <li className={styles['balloon__text']}>
                    ・営業さんが見当違いの案件を紹介してくる。
                  </li>
                  <li className={styles['balloon__text']}>
                    ・現場がどう考えてもブラックだった。
                  </li>
                  <li className={styles['balloon__text']}>
                    ・営業さんに改善を求めても何も変わらない。
                  </li>
                </ul>
              </div>
              <div
                className={classnames(styles['item__person'], styles['person'])}
              >
                <div className={styles['person__image']}>
                  <Image
                    src={ImagePerson01}
                    width={661}
                    height={660}
                    placeholder="blur"
                  />
                </div>
                <p className={styles['person__name']}>エンジニア様</p>
              </div>
            </div>
            <div
              className={classnames(styles['component__item'], styles['item'])}
            >
              <div
                className={classnames(
                  styles['item__balloon'],
                  styles['balloon']
                )}
              >
                <Image
                  className={styles['balloon__image']}
                  src={BgBalloon}
                  alt="企業様イメージ画像"
                  width={542}
                  height={274}
                  placeholder="blur"
                />
                <ul className={styles['balloon__list']}>
                  <li className={styles['balloon__text']}>
                    ・案件内容を営業さんが理解してくれているか不安。
                  </li>
                  <li className={styles['balloon__text']}>
                    ・ジョインした人が事前に話したスキルに足りない
                    <br />
                    エンジニアさんだった。
                  </li>
                  <li className={styles['balloon__text']}>
                    ・もう少し柔軟に対応してくれる
                    <br />
                    エンジニアさんを探したかった。
                  </li>
                </ul>
              </div>
              <div
                className={classnames(styles['item__person'], styles['person'])}
              >
                <div className={styles['person__image']}>
                  <Image
                    src={ImagePerson02}
                    width={636}
                    height={670}
                    placeholder="blur"
                  />
                </div>
                <p className={styles['person__name']}>企業様</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
