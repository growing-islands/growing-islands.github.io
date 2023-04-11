import { Image } from '~components/common/Image'
import { default as classnames } from 'classnames'

// unique
import * as styles from './PageHeading.module.scss'

type ImageData = {
  src: StaticImageData
  alt: string
  width: number
  height: number
}

type Props = {
  title: string
  text: string
  image: Record<'pc' | 'sp', ImageData> & {
    multiply?: boolean
  }
  tag?: keyof JSX.IntrinsicElements
}

export const PageHeading: React.FCX<Props> = (props) => {
  const { className, style, title, text, image, tag: Tag = 'h1' } = props

  return (
    <>
      <div
        className={classnames(styles['component'], className)}
        {...{ style }}
      >
        <div className="l-wrap">
          <div className="l-inner">
            <header className={styles['component__header']}>
              <Tag className={styles['component__title']}>{title}</Tag>
              <p className={styles['component__text']}>{text}</p>
            </header>
          </div>
        </div>
      </div>
      <div
        className={classnames(styles['component__image'], 'tablet:hidden')}
        style={
          image.multiply
            ? {
                mixBlendMode: 'multiply',
              }
            : undefined
        }
      >
        <Image {...{ ...image.sp }} placeholder="blur" />
      </div>
      <div
        className={classnames(
          styles['component__image'],
          'hidden tablet:block'
        )}
        style={
          image.multiply
            ? {
                mixBlendMode: 'multiply',
              }
            : undefined
        }
      >
        <Image {...{ ...image.pc }} placeholder="blur" />
      </div>
    </>
  )
}
