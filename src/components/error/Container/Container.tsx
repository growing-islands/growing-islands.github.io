import { default as classnames } from 'classnames'

// components
import { RoundButtonLink } from '~components/common/Buttons/RoundButton'

// scss
import * as styles from './Container.module.scss'

type Props = {
  statusCode: number
}

export const Container: React.FCX<Props> = (props) => {
  const { className, style, statusCode } = props

  function getErrorDetail(code: number) {
    switch (code) {
      case 500:
        return {
          title: 'Server Error',
          text: 'サーバーエラーが発生いたしました。\n恐れ入りますが時間をおいて再度アクセスしてください。',
        }
      case 404:
        return {
          title: '404\nNot Found',
          text: 'お探しのページが見つかりません。\nURLをご確認ください。',
        }
      default:
        return {
          title: 'Error',
          text: 'エラーが発生いたしました。\n恐れ入りますが時間をおいて再度アクセスしてください。',
        }
    }
  }

  return (
    <div
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames('l-inner', styles['component__inner'])}>
          <header className={styles['component__header']}>
            <h1 className={styles['component__title']}>
              {getErrorDetail(statusCode).title}
            </h1>
          </header>
          <div className={styles['component__content']}>
            <p className={styles['component__text']}>
              {getErrorDetail(statusCode).text}
            </p>
            <div className={styles['component__buttons-wrap']}>
              <RoundButtonLink
                className={styles['component__button']}
                href="/"
                icon={true}
              >
                TOPページ
              </RoundButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
