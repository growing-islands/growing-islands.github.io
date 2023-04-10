import { default as classnames } from 'classnames'
import { animateScroll } from 'react-scroll'

// unique
import * as styles from './GoToTopButton.module.scss'

export const GoToTopButton: React.FCX = (props) => {
  const { className, style } = props

  function scrollToTop() {
    animateScroll.scrollToTop({
      smooth: true,
      duration: 1000,
    })
  }

  return (
    <button
      data-testid="button"
      className={classnames(styles['component'], className)}
      {...{ style }}
      onClick={scrollToTop}
    />
  )
}
