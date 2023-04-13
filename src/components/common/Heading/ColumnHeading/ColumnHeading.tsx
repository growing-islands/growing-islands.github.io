import { default as classnames } from 'classnames'
import type { CSSProperties } from 'react'
import { useInView } from 'react-intersection-observer'

// unique
import * as styles from './ColumnHeading.module.scss'

export type Props = {
  texts: {
    en: string
    ja: string
  }
  textColor?: string
  borderColor?: string
}

export const ColumnHeading: React.FCX<Props> = (props) => {
  const {
    className,
    style,
    texts,
    textColor = styles['palette-white'],
    borderColor = styles['palette-smokegray'],
  } = props

  const intersectionOptions = {
    root: null,
    rootMargin: '0px 0px -30%',
    threshold: 0,
    triggerOnce: true,
  }
  const [ref, inView] = useInView(intersectionOptions)

  return (
    <div
      ref={ref}
      className={classnames(
        styles['component'],
        className,
        inView && styles['is-active']
      )}
      style={Object.assign(style || {}, {
        '--text-color': textColor,
      })}
    >
      <div className={styles['component__inner']}>
        <span className={styles['component__english']} translate="no">
          {texts.en}
        </span>
        <hr
          className={styles['component__border']}
          style={
            {
              '--border-color': borderColor,
            } as CSSProperties
          }
        />
        <span className={styles['component__japanese']}>{texts.ja}</span>
      </div>
    </div>
  )
}
