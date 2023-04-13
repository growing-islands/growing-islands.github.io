/**
 * AOSの独自型定義
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Aos } from 'aos'

declare module 'aos' {
  type Directions = {
    column: 'up' | 'down'
    row: 'left' | 'right'
  }

  type Animations = {
    Fade:
      | `fade-${Directions['column' | 'row']}`
      | `fade-${Directions['column']}-${Directions['row']}`
    Flip: `flip-${Directions['column' | 'row']}`
    Slide: `slide-${Directions['column' | 'row']}`
    Zoom:
      | `zoom-${'in' | 'out'}`
      | `zoom-${'in' | 'out'}-${Directions['column' | 'row']}`
  }

  type dataProperty = {
    'data-aos'?: Animations[keyof Animations]
  }
}
