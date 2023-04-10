/**
 * React型を拡張する
 */
import { default as React } from 'react'
import type { dataProperty } from 'aos'

// Don't use `{}` as a typeを回避するためban-typesを許容する
/* eslint-disable @typescript-eslint/ban-types */
declare module 'react' {
  type child = {
    children?: ReactNode
  }
  // デフォルトでclassNameとstyleを受け取るようにする
  type FCX<P = {}> = React.VFC<
    P & {
      className?: string
      style?: React.CSSProperties
    }
  >

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes extends dataProperty {}
}
