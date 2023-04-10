import { useState } from 'react'
import { useMountedState, useWindowSize } from 'react-use'

// components
import { StickyContent } from '~components/common/StickyContent'
import { FadeContent } from '~components/common/FadeContent'

import { ToTopButton } from './ToTopButton'

export const FixedToTopButton: React.FCX = (props) => {
  const { className, style } = props

  const { height: windowHeight } = useWindowSize(0, 0)
  const isMounted = useMountedState()

  const [active, setActive] = useState<boolean>(false)

  return isMounted() && windowHeight > 0 ? (
    <StickyContent
      {...{ className }}
      fixedTop={windowHeight - 100}
      absoluteBottom={50}
      style={{
        ...style,

        left: 'auto',
        right: '68px',
      }}
      onUntil={() => setActive(false)}
      onFixed={() => setActive(true)}
    >
      <FadeContent visible={active}>
        <ToTopButton />
      </FadeContent>
    </StickyContent>
  ) : (
    <></>
  )
}
