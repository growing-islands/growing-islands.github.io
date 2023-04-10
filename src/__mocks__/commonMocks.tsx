/**
 * common mocks
 */
import { default as React } from 'react'
import { TextEncoder, TextDecoder } from 'util'

/**
 * next/link
 */
jest.mock('next/link', () => {
  const Link = ({ children }: { children?: React.ReactNode }) => {
    return children
  }
  return Link
})

/**
 * next/head
 */
jest.mock('next/head', () => {
  const Head = ({ children }: { children: React.ReactNode }) => <>{children}</>
  return Head
})

/**
 * next/image
 */
jest.mock('next/image', () => {
  const Image = (props: { src: string; alt: string }) => {
    return <img {...{ ...props }} />
  }
  return Image
})

/**
 * uuid
 */
jest.mock('uuid', () => ({
  v4: () => 'generate-test-id',
}))

/**
 * ses/CaseStudy
 * NOTE：Swiperのmockが定義できないため、このコンポーネントについてはtestから除外する
 */
jest.mock('~components/ses/CaseStudy', () => {
  const CaseStudy = () => <></>
  return {
    CaseStudy,
  }
})

/**
 * Redux
 */
const mockDispatch = jest.fn()
const mockSelector = jest.fn().mockImplementation(() => ({
  status: '',
  result: '',
}))
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector(),
}))

/**
 * Resize Observer Mock
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
let instanceResize: ResizeObserver | null = null
let callbackResize: ResizeObserverCallback | null = null
global.ResizeObserver = class mockResizeObjerver {
  constructor(callback: ResizeObserverCallback) {
    instanceResize = this
    callbackResize = callback
  }
  disconnect() {}
  observe(_target: Element, _options?: ResizeObserverOptions) {}
  unobserve(_target: Element) {}
}
/* eslint-enable @typescript-eslint/no-unused-vars */
/* eslint-enable @typescript-eslint/no-empty-function */

/**
 * Intersection Observer Mock
 */
const mockObserver = jest.fn()
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => mockObserver,
  unobserve: () => mockObserver,
  disconnect: () => mockObserver,
}))

/**
 * TextEncoder
 */
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
