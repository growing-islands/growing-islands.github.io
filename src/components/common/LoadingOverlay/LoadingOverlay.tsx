/**
 * ローディングスクリーンコンポーネント
 */
import { default as classnames } from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { LoadingIcon } from '~components/common/LoadingIcon'

import * as styles from './LoadingOverlay.module.scss'

type Props = {
  /** 自身のアクティブ／非アクティブ状態を表すprop */
  active: boolean
  color?: string
}

export const LoadingOverlay: React.FCX<Props> = (props) => {
  const { className, style, active, color } = props

  return (
    <CSSTransition
      in={active}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles['transition--enter'],
        enterActive: styles['transition--enter-active'],
        enterDone: styles['transition--enter-done'],
        exit: styles['transition--exit'],
        exitActive: styles['transition--exit-active'],
        exitDone: styles['transition--exit-done'],
      }}
    >
      <div
        className={classnames(styles['component'], className)}
        {...{ style }}
      >
        <div className={styles['component__overlay']} />
        <div className={styles['component__content']}>
          <LoadingIcon
            color={color || 'red'}
            className={styles['component__icon']}
          />
        </div>
      </div>
    </CSSTransition>
  )
}
