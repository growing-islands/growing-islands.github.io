import { default as classnames } from 'classnames'

// styles
import * as styles from './Layout.module.scss'

export const Layout: React.FCX<React.child> = (props) => {
  const { children, className, style } = props

  return (
    <div
      className={classnames(styles['component'], 'l-page', className)}
      {...{ style }}
    >
      {children}
    </div>
  )
}
