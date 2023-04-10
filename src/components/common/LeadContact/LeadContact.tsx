import { default as classnames } from 'classnames'

// component
import { RoundButtonLink } from '~components/common/Buttons/RoundButton'
import { LineBreakText } from '~components/common/LineBreakText'

// unique
import * as styles from './LeadContact.module.scss'

// utils
import { pagesPath } from '~utils/$path'

type Props = {
  text: string
}

export const LeadContact: React.FCX<Props> = (props) => {
  const { className, style, text } = props

  return (
    <div
      id="contact"
      className={classnames(styles['component'], className)}
      {...{ style }}
    >
      <div className="l-wrap">
        <div className="l-inner">
          <LineBreakText
            className={styles['component__text']}
            {...{ text }}
            data-aos="fade-up"
          />
          <div className={styles['component__button-wrap']} data-aos="fade-up">
            <RoundButtonLink
              href={pagesPath.$url({
                hash: 'contact',
              })}
              className={styles['component__button']}
              icon={true}
            >
              お問い合わせはこちら
            </RoundButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
