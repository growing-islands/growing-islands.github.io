import { default as classnames } from 'classnames'
import type { CSSProperties } from 'react'
import { useMeasure } from 'react-use'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { LineBreakText } from '~components/common/LineBreakText'

// scss
import * as styles from './Advantage.module.scss'

const LIST_ITEMS = [
  {
    prefix: '大きな投資が',
    description:
      'オフショアによる低コスト\n定額顧問制のため企画のみに\n専念していただけます',
  },
  {
    prefix: '追加費用が',
    description: 'いつでも仕様変更や\n優先度の変更が可能です',
  },
  {
    prefix: '採用が',
    description: '開発体制を最短で\n所有することができます',
  },
  {
    prefix: '指示書が',
    description: 'まず専任のディレクターに\nお気軽にご相談ください',
  },
]

export const Advantage: React.FCX = (props) => {
  const { className, style } = props

  const [ref, { width }] = useMeasure<HTMLDivElement>()

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
              ja: '共創する受託開発 4つの強み',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <header className={styles['component__header']} data-aos="fade-up">
            <LineBreakText
              className={styles['component__title']}
              tag="h2"
              text="共創する受託開発 4つの強み"
            />
            <LineBreakText
              className={styles['component__text']}
              text={`事業成長を目的とした<br class="tablet:hidden" />低コストIT活用で問題を解決します！`}
            />
          </header>
          <ul className={styles['component__list']} data-aos="fade-up">
            {LIST_ITEMS.map((item, index) => {
              const { prefix, description } = item

              return (
                <li
                  key={prefix}
                  className={classnames(
                    styles['component__item'],
                    styles['item']
                  )}
                  style={
                    {
                      '--primary-color': styles[`palette-list${index + 1}`],
                    } as CSSProperties
                  }
                >
                  <div
                    className={styles['item__head']}
                    {...{ ref }}
                    style={{
                      height: `${width}px`,
                    }}
                  >
                    <div className={styles['item__circle']}>
                      <h3 className={styles['item__title']}>
                        {prefix}
                        <strong>不要</strong>
                      </h3>
                    </div>
                  </div>
                  <div className={styles['item__body']}>
                    <LineBreakText
                      className={styles['item__description']}
                      text={description}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
