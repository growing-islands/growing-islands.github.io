import { default as classnames } from 'classnames'
import { Image } from '~components/common/Image'

// components
import { LineBreakText } from '~components/common/LineBreakText'

// styles
import * as styles from './VoiceItem.module.scss'

type Props = {
  title: string
  tag?: keyof JSX.IntrinsicElements
  position: string
  description: string
  image?: Record<'width' | 'height', number> & {
    src: StaticImageData
  }
  reverse?: boolean
}

export const VoiceItem: React.FCX<Props> = (props) => {
  const {
    className,
    style,
    title,
    position,
    description,
    image,
    tag = 'h3',
    reverse = false,
  } = props

  return (
    <div
      className={classnames(
        styles['component'],
        reverse && styles['is-reverse'],
        className
      )}
      {...{ style }}
    >
      <div className={styles['component__head']}>
        <div className={styles['component__image']}>
          {image && (
            <Image {...{ ...image }} src={image.src.src} placeholder="blur" />
          )}
        </div>
      </div>
      <div className={styles['component__body']}>
        <LineBreakText
          className={styles['component__title']}
          text={title}
          {...{ tag }}
        />
        <LineBreakText
          className={styles['component__position']}
          text={position}
        />
        <LineBreakText
          className={styles['component__description']}
          text={description}
        />
      </div>
    </div>
  )
}
