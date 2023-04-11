import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// components
import { SymbolMark } from '~components/common/Icons/Logo'
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'

// scss
import * as styles from './About.module.scss'

// images
import { default as IllustIdea } from '~images/top/illust-idea.png'
import { default as IllustGoal } from '~images/top/illust-goal.png'

export const About: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames('l-inner', styles['component__inner'])}>
          <ColumnHeadingForSection
            className="hidden tablet:block"
            texts={{
              en: 'About  Yume Lab',
              ja: 'グローイングアイランズについて',
            }}
            textColor={styles['palette-white']}
          />
          <p className={styles['component__text']} data-aos="fade-up">
            株式会社グローイングアイランズは、お客様の事業戦略から
            <br />
            現在抱える課題まで徹底的に理解、
            <br />
            目指す未来に共感し目的を明確に持ち、
            <br />
            適切なIT施策でお客様と共創しながら課題を解決します。
          </p>
          <ul className={styles['component__list']} data-aos="fade-up">
            <li
              className={classnames(styles['component__item'], styles['item'])}
            >
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__inner']}>
                <p className={styles['item__name']} translate="no">
                  ANALYSIS
                </p>
                <p className={styles['item__description']}>分析・理解</p>
                <div className={styles['item__image']}>
                  <SymbolMark className={styles['item__svg']} />
                </div>
              </div>
            </li>
            <li
              className={classnames(styles['component__item'], styles['item'])}
            >
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__inner']}>
                <p className={styles['item__name']} translate="no">
                  IDEA
                </p>
                <p className={styles['item__description']}>共創</p>
                <div className={styles['item__image']}>
                  <Image
                    src={IllustIdea.src}
                    alt="IDEA、共創のイラスト"
                    width={124}
                    height={126}
                  />
                </div>
              </div>
            </li>
            <li
              className={classnames(styles['component__item'], styles['item'])}
            >
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__decoration']} />
              <div className={styles['item__inner']}>
                <p className={styles['item__name']} translate="no">
                  GOAL
                </p>
                <p className={styles['item__description']}>目標</p>
                <div className={styles['item__image']}>
                  <Image
                    src={IllustGoal.src}
                    alt="GOAL、目標のイラスト"
                    width={144}
                    height={160}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
