import { default as classnames } from 'classnames'

// components
// import {
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
// } from '~components/common/Icons/Socials'

// scss
import * as styles from './Footer.module.scss'

// utils
// import { PAGE_INFO } from '~utils/Constants'

export const Footer: React.FCX = (props) => {
  const { className, style } = props

  return (
    <footer
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className={styles['component__inner']}>
        <small className={styles['component__copyright']} translate="no">
          &copy;Growing Islands Inc.
        </small>
        {/* <nav className={styles['component__navigation']}>
          <ul
            className={classnames(
              styles['component__socials'],
              styles['social']
            )}
          >
            <li className={styles['social__item']}>
              <a
                className={styles['social__link']}
                href={PAGE_INFO.TWITTER}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon
                  className={classnames(
                    styles['social__icon'],
                    styles['is-twitter']
                  )}
                />
              </a>
            </li>
            <li className={styles['social__item']}>
              <a
                className={styles['social__link']}
                href={PAGE_INFO.FACEBOOK}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon
                  className={classnames(
                    styles['social__icon'],
                    styles['is-facebook']
                  )}
                />
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </footer>
  )
}
