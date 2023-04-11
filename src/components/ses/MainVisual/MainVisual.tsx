import { default as classnames } from 'classnames'

// components
import { PageHeading } from '~components/common/Heading/PageHeading'

// images
import { default as BgMvSp } from '~images/ses/bg-mv-sp.png'
import { default as BgMvPc } from '~images/ses/bg-mv-pc.png'

// scss
import * as styles from './MainVisual.module.scss'

export const MainVisual: React.FCX = (props) => {
  const { className, style } = props

  return (
    <PageHeading
      className={classnames(styles['components'], className)}
      title="グローイングアイランズのSES"
      text="YumeLab's SES"
      image={{
        sp: {
          src: BgMvSp,
          alt: 'グローイングアイランズのSESのイメージ',
          width: 375,
          height: 297,
        },
        pc: {
          src: BgMvPc,
          alt: 'グローイングアイランズのSESのイメージ',
          width: 1920,
          height: 918,
        },
      }}
      {...{ style }}
    />
  )
}
