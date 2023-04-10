/**
 * テキストの改行箇所を自動で付与するコンポーネント
 */
import { default as classnames } from 'classnames'
import type { dataProperty } from 'aos'

// unique
import * as styles from './LineBreakText.module.scss'

type Props = dataProperty & {
  text: string
  tag?: keyof JSX.IntrinsicElements
}

export const LineBreakText: React.FCX<Props> = (props) => {
  const { className, style, text, tag: Tag = 'p', 'data-aos': dataAos } = props

  return (
    <Tag
      className={classnames(styles['component'], className)}
      data-testid="component"
      data-aos={dataAos}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
      {...{ style }}
    />
  )
}
