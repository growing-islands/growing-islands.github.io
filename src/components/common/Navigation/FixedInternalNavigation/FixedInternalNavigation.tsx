import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { useMountedState, useWindowSize } from 'react-use'

// hooks
import { useDevice } from '~hooks/useDevice'
import { useAppSelector } from '~hooks/useAppSelector'

// stores
import { selectHeaderHeight } from '~stores/Header'

// components
import { StickyContent } from '~components/common/StickyContent'
import { FadeContent } from '~components/common/FadeContent'
import { InternalNavigation } from '~components/common/Navigation/InternalNavigation'

type Props = {
  params: {
    label: string
    href: string
  }[]
  headerShow: boolean
}

export const FixedInternalNavigation: React.FCX<Props> = (props) => {
  const { params, headerShow } = props

  const device = useDevice()
  const { height: windowHeight } = useWindowSize()
  const [selfHeight, setSelfHeight] = useState<number>(0)
  const [currentNavigation, setCurrentNavigation] = useState('')
  const [active, setActive] = useState<boolean>(false)
  const headerHeight = useAppSelector(selectHeaderHeight)
  const isMounted = useMountedState()

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      activeNavigationIndex,
      {
        root: null,
        rootMargin: '-50% 0px',
        threshold: 0,
      }
    )

    // ナビゲーションで扱うidのDOMに対してscrollの監視をする
    params.forEach((navigationItem) => {
      const ele = document.querySelector(`#${navigationItem.href}`)
      ele && intersectionObserver.observe(ele)
    })

    return () => {
      // scrollの監視を終了
      intersectionObserver.disconnect()
    }
  }, [])

  // intersectionObserverの引数の型をanyに設定
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function activeNavigationIndex(entries: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entries.forEach((entry: any) => {
      // activeなセクションを探してstateに格納
      entry.isIntersecting &&
        setCurrentNavigation(entry.target.getAttribute('id'))
    })
  }

  const variableStyle: Record<App.DeviceSize, CSSProperties> = {
    sp: {
      textAlign: 'center',
      left: 0,
      right: 'auto',
      width: '100%',
      transition: 'transform 0.25s ease 0s',
      transform: headerShow
        ? `translateY(${headerHeight - 1}px)`
        : 'translateY(0%)',
    },
    pc: {
      textAlign: 'right',
      left: 'auto',
      right: '68px',
    },
  }

  return isMounted() && windowHeight > 0 ? (
    <StickyContent
      style={device === 'sp' ? variableStyle.sp : variableStyle.pc}
      fixedTop={device === 'sp' ? 0 : windowHeight / 2}
      absoluteBottom={
        device === 'sp' ? windowHeight : windowHeight / 2 - selfHeight / 2
      }
      onUntil={() => setActive(false)}
      onFixed={() => setActive(true)}
    >
      <FadeContent visible={active} style={{ width: '100%' }}>
        <InternalNavigation
          {...{ params }}
          active={currentNavigation}
          onResize={setSelfHeight}
        />
      </FadeContent>
    </StickyContent>
  ) : (
    <></>
  )
}
