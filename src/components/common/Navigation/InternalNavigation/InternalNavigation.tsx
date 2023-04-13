import { useState, useEffect } from 'react'
import { default as classnames } from 'classnames'
import { Link as AnchorLink } from 'react-scroll'
import { useMeasure } from 'react-use'

// hooks
import { useAppSelector } from '~hooks/useAppSelector'
import { useDevice } from '~hooks/useDevice'

// stores
import { selectHeaderHeight } from '~stores/Header'

// scss
import * as styles from './InternalNavigation.module.scss'

type Props = {
  params: {
    label: string
    href: string
  }[]
  active: string
  onResize?: (height: number) => void
}

export const InternalNavigation: React.FCX<Props> = (props) => {
  const { className, style, params, active, onResize } = props

  const [overItems, setOverItems] = useState<string[]>([])

  const headerHeight = useAppSelector(selectHeaderHeight)
  const device = useDevice()
  const [ref, { height: selfHeight }] = useMeasure<HTMLElement>()

  useEffect(() => {
    let flag = false
    const formattedOverItems = params.reduce((result, current) => {
      const newResult = result
      if (flag) {
        return result
      } else if (current.href === active) {
        flag = true
        return result
      } else {
        newResult.push(current.href)
      }

      return newResult
    }, [] as string[])

    setOverItems(formattedOverItems)
  }, [active])

  useEffect(() => {
    onResize && onResize(selfHeight)
  }, [selfHeight])

  return (
    <nav
      className={classnames(styles['component'], className)}
      {...{ ref, style }}
    >
      <ul className={styles['component__inner']}>
        {params.map((item) => {
          return (
            <li key={item.label} className={styles['component__item']}>
              <AnchorLink
                className={classnames(
                  styles['component__link'],
                  active === item.href && styles['is-active']
                )}
                to={item.href}
                smooth={true}
                duration={500}
                // ターゲットがアクティブより上部にある場合、header分の高さを空ける
                offset={
                  overItems.some((overItem) => overItem === item.href)
                    ? -headerHeight - (device === 'sp' ? selfHeight : 0)
                    : device === 'sp'
                    ? -selfHeight
                    : 0
                }
              >
                <span
                  className={styles['component__label']}
                  dangerouslySetInnerHTML={{
                    __html: item.label,
                  }}
                />
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
