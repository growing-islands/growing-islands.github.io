import { default as classnames } from 'classnames'

// scss
import * as styles from './FadeContent.module.scss'

type Props = Required<React.child> & {
  visible: boolean
}

export const FadeContent: React.FCX<Props> = (props) => {
  const { children, className, style, visible } = props

  return (
    <div
      className={classnames(
        styles['component'],
        visible ? styles['is-visible'] : styles['is-hidden'],
        className && className
      )}
      {...{ style }}
    >
      {children}
    </div>
  )
}
