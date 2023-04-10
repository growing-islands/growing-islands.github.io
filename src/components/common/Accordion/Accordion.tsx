import { useEffect } from 'react'
import { default as classnames } from 'classnames'
import { Collapse } from 'react-collapse'
import { useToggle } from 'react-use'
import type { dataProperty } from 'aos'

import * as styles from './Accordion.module.scss'

type Props = dataProperty & {
  data: {
    head: string
    body: string
  }
  opened?: boolean
}

export const Accordion: React.FCX<Props> = (props) => {
  const { data, opened = false, className, style, 'data-aos': dataAos } = props

  // 開閉状態の管理
  const [isOpened, toggleIsOpened] = useToggle(false)

  useEffect(() => {
    isOpened !== opened && toggleIsOpened(opened)
  }, [opened])

  return (
    <div
      className={classnames(styles['component'], className)}
      onClick={toggleIsOpened}
      data-aos={dataAos}
      {...{ style }}
    >
      <div className={styles['component__inner']}>
        <div className={styles['component__head']}>
          <span className={styles['component__label']}>Q</span>
          <p className={styles['component__question']}>{data.head}</p>
          <button
            className={classnames(
              styles['component__icon'],
              isOpened && styles['is-opened']
            )}
          />
        </div>
        <Collapse
          theme={{
            collapse: styles['component__toggle'],
            content: styles['component__body'],
          }}
          {...{ isOpened }}
        >
          <span className={styles['component__label']}>A</span>
          <p className={styles['component__answer']}>{data.body}</p>
        </Collapse>
      </div>
    </div>
  )
}
