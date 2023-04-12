import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// scss
import * as styles from './MainVisual.module.scss'

// images
import { default as ImageObject } from '~images/top/img-mv-object.png'

export const MainVisual: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames('l-inner', styles['component__inner'])}>
          <header
            className={classnames(
              styles['component__header'],
              styles['header']
            )}
          >
            <h2 className={styles['header__title']}>
              CREATING
              <br />
              VALUE
              <br />
              TOGETHER
            </h2>
            <p className={styles['header__sub-title']}>価値を共に創り続ける</p>
            <p className={styles['header__text']}>IT投資の効果を最大限に</p>
          </header>
          <div
            className={classnames(
              styles['component__object'],
              styles['object']
            )}
          >
            <svg
              className={classnames(
                styles['object__outline'],
                'hidden tablet:block'
              )}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <div className={styles['object__circle--1']} />
            <div className={styles['object__circle--2']} />
            <div className={styles['object__image']}>
              <Image
                src={ImageObject.src}
                width="100%"
                placeholder="blur"
                alt="Object"
              />
            </div>
          </div>
          <div
            className={classnames(
              styles['component__scroll'],
              styles['scroll'],
              'tablet:hidden'
            )}
          >
            <span className={styles['scroll__text']}>scroll</span>
          </div>
        </div>
      </div>
    </div>
  )
}
