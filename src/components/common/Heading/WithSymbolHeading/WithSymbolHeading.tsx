import { default as classnames } from 'classnames'
import type { CSSProperties } from 'react'
import type { dataProperty } from 'aos'

// components
import { SymbolMark } from '~components/common/Icons/Logo'

// unique
import * as styles from './WithSymbolHeading.module.scss'

type Props = React.child &
  dataProperty & {
    text: string
    tag?: keyof JSX.IntrinsicElements
    textColor?: string
    symbolColor?: string | 'gradient'
  }

export const WithSymbolHeading: React.FCX<Props> = (props) => {
  const {
    className,
    style,
    children,
    text,
    tag: Tag = 'h3',
    textColor = styles['palette-white'],
    symbolColor = styles['palette-white'],
    'data-aos': dataAos,
  } = props

  return (
    <header
      className={classnames(styles['component'], className)}
      data-aos={dataAos}
      {...{ style }}
    >
      <SymbolMark
        className={classnames(styles['component__symbol'])}
        primaryColor={
          symbolColor !== 'gradient' ? symbolColor : styles['palette-deepblue']
        }
        shadowColor={
          symbolColor !== 'gradient' ? symbolColor : styles['palette-deepblue']
        }
        gradient={symbolColor === 'gradient'}
      />
      <Tag
        className={styles['component__title']}
        style={
          {
            '--text-color': textColor,
          } as CSSProperties
        }
      >
        {text}
      </Tag>
      {children}
    </header>
  )
}
