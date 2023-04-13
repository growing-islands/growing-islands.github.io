/**
 * 現在のデバイスを返却する関数
 */
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

const BreakPoints = 768

export function useDevice(initialWidth?: number): App.DeviceSize {
  const { width } = useWindowSize(initialWidth)

  const [windowWidth, setWindowWidth] = useState<number>(width)

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWindowWidth)
    updateWindowWidth()

    return () => window.removeEventListener('resize', updateWindowWidth)
  })

  return windowWidth <= BreakPoints ? 'sp' : 'pc'
}
