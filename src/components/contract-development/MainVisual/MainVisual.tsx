import { default as classnames } from 'classnames'

// components
import { PageHeading } from '~components/common/Heading/PageHeading'

// images
import { default as BgMvSp } from '~images/contract-development/bg-mv-sp.jpg'
import { default as BgMvPc } from '~images/contract-development/bg-mv-pc.jpg'

// scss
import * as styles from './MainVisual.module.scss'

export const MainVisual: React.FCX = (props) => {
  const { className, style } = props

  return (
    <PageHeading
      className={classnames(styles['components'], className)}
      title="共創する受託開発"
      text={`Co-Creation\nContract Development`}
      image={{
        sp: {
          src: BgMvSp,
          alt: '共創する受託開発のイメージ',
          width: 375,
          height: 297,
        },
        pc: {
          src: BgMvPc,
          alt: '共創する受託開発のイメージ',
          width: 1920,
          height: 594,
        },
        multiply: true,
      }}
      {...{ style }}
    />
  )
}
