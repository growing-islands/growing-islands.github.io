import type { CSSProperties } from 'react'
import { useState, useEffect, useRef } from 'react'
import { default as classnames } from 'classnames'

// utils
import { GetElementOffsetTop } from '~utils/scripts/GetElementOffsetTop'

// scss
import * as styles from './StickyContent.module.scss'

type Props = Required<React.child> & {
  fixedTop?: number
  absoluteBottom?: number
  endStyle?: CSSProperties
  onFixed?: () => void
  onUntil?: () => void
  onEnd?: () => void
}

type FixedState = 'until' | 'active' | 'end'

export const StickyContent: React.FCX<Props> = (props) => {
  const {
    children,
    className,
    style,
    fixedTop = 0,
    absoluteBottom = 0,
    endStyle,
    onFixed,
    onUntil,
    onEnd,
  } = props

  const [fixedState, setFixedState] = useState<FixedState>('until')

  const self = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 親要素を「position: relative」に設定
    if (!self.current || self.current.parentElement === null) {
      return
    }
    const parentPositionStyle = self.current.parentElement.style.position
    if (parentPositionStyle !== 'relative') {
      self.current.parentElement.style.position = 'relative'
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [fixedTop, absoluteBottom])

  // このコンポーネントの親要素(position: relativeでくっついている要素)のY座標を取得
  function getParentOffsetY(): number {
    return self.current && self.current.parentElement !== null
      ? GetElementOffsetTop(self.current.parentElement)
      : 0
  }

  // このコンポーネントの親要素(position: relativeでくっついている要素)のheightを取得
  function getParentHeight(): number {
    return self.current && self.current.parentElement !== null
      ? self.current.parentElement.getBoundingClientRect().height
      : 0
  }

  function onScroll() {
    if (self.current) {
      const fixedEndBorder =
        getParentHeight() +
        getParentOffsetY() -
        fixedTop -
        absoluteBottom -
        self.current.clientHeight

      if (fixedEndBorder <= window.pageYOffset) {
        setFixedState('end')
        onEnd && onEnd()
      } else if (getParentOffsetY() <= window.pageYOffset) {
        setFixedState('active')
        onFixed && onFixed()
      } else {
        setFixedState('until')
        onUntil && onUntil()
      }
    }
  }

  const variableStyle = {
    top: fixedState !== 'end' ? fixedTop : 'auto',
    bottom: fixedState === 'end' ? absoluteBottom : '',
  }

  return (
    <div
      ref={self}
      style={Object.assign(
        variableStyle,
        style ? style : {},
        fixedState === 'end' && endStyle && endStyle
      )}
      className={classnames(
        styles['component'],
        fixedState === 'active' && styles['is-fixed'],
        fixedState === 'end' && styles['is-end'],
        className && className
      )}
    >
      {children}
    </div>
  )
}
