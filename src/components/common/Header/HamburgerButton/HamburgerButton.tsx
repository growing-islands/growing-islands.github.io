import { useEffect } from 'react'
import { default as classnames } from 'classnames'
import { useToggle } from 'react-use'

import * as styles from './HamburgerButton.module.scss'

type Props = {
  active?: boolean
  onClick?: (event?: React.MouseEvent) => void
}

export const HamburgerButton: React.FCX<Props> = (props) => {
  const { active = false, onClick, className, style } = props

  const [isActive, toggleIsActive] = useToggle(active)

  function handleClick() {
    onClick ? onClick() : toggleIsActive()
  }

  useEffect(() => {
    isActive !== active && toggleIsActive(active)
  }, [active])

  return (
    <div
      className={classnames(
        styles['component'],
        isActive && styles['is-active'],
        className
      )}
      onClick={handleClick}
      {...{ style }}
    >
      <span />
    </div>
  )
}
