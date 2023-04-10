import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useDevice } from './'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customGlobal = global as any

describe('useDevice', () => {
  it('sp時', () => {
    const WindowSize = 768
    customGlobal.innerWidth = WindowSize
    const result = renderHook(() => useDevice()).result
    expect(result.current).toBe('sp')
  })

  it('pc時', () => {
    const WindowSize = 769
    customGlobal.innerWidth = WindowSize
    const result = renderHook(() => useDevice()).result
    expect(result.current).toBe('pc')
  })

  it('pc→sp時', () => {
    const InitialWindowSize = 769
    customGlobal.innerWidth = InitialWindowSize
    const result = renderHook(() => useDevice()).result
    expect(result.current).toBe('pc')

    act(() => {
      customGlobal.innerWidth = 768

      fireEvent(customGlobal, new Event('resize'))
    })

    expect(result.current).toBe('sp')
  })

  it('sp→pc時', () => {
    const InitialWindowSize = 768
    customGlobal.innerWidth = InitialWindowSize
    const result = renderHook(() => useDevice()).result
    expect(result.current).toBe('sp')

    act(() => {
      customGlobal.innerWidth = 769

      fireEvent(customGlobal, new Event('resize'))
    })

    expect(result.current).toBe('pc')
  })
})
