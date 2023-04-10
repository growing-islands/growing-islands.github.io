import { default as classnames } from 'classnames'
import { default as Link } from 'next/link'
import type { UrlObject } from 'url'

// unique
import * as styles from './RoundButton.module.scss'

type CommonProps = {
  /** 活性状態 */
  disabled?: boolean
  icon?: boolean
}

type RoundButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CommonProps

export const RoundButton: React.FCX<RoundButtonProps> = (props) => {
  const { className, style, children, disabled, icon, ...attributes } = props

  return (
    <button
      data-testid="button"
      className={classnames(styles['component'], className)}
      {...{ disabled, style, ...attributes }}
    >
      <span className={styles['component__text']}>{children}</span>
      {icon && <span className={styles['component__icon']} />}
    </button>
  )
}

type RoundButtonLinkProps = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  'href'
> &
  CommonProps & {
    href: string | UrlObject
  }

export const RoundButtonLink: React.FCX<RoundButtonLinkProps> = (props) => {
  const { className, style, children, disabled, href, icon, ...attributes } =
    props

  return (
    <Link href={disabled ? '' : href}>
      <a
        data-testid="button"
        className={classnames(styles['component'], className)}
        data-disabled={disabled}
        {...{ ...attributes, style }}
      >
        <span className={styles['component__text']}>{children}</span>
        {icon && <span className={styles['component__icon']} />}
      </a>
    </Link>
  )
}
