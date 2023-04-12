import { useEffect, useState, useMemo } from 'react'
import { default as Link } from 'next/link'
import { useRouter } from 'next/router'
import { default as classnames } from 'classnames'
import { useMeasure, useToggle } from 'react-use'
import { Link as AnchorLink } from 'react-scroll'
import type { LinkProps } from 'react-scroll'
import type { UrlObject } from 'url'
import { useScrollDirection } from 'react-use-scroll-direction'

// hooks
import { useDevice } from '~hooks/useDevice'
import { useAppDispatch } from '~hooks/useAppDispatch'

// stores
import { setHeaderHeight } from '~stores/Header'

// components
import { Mail as MailIcon } from '~components/common/Icons/Mail'
import { Angle as AngleIcon } from '~components/common/Icons/Angle'

import { HamburgerButton } from './HamburgerButton'

import { Image } from '~components/common/Image'
import { default as LogoImage } from '~images/top/logo.png'

// scss
import * as styles from './Header.module.scss'

// utils
import { pagesPath } from '~utils/$path'

type NavigationItem = {
  id: string
  label: string
  subTitle?: string
  href: string | UrlObject
  anchor: boolean
  pc: boolean
  children?: Omit<NavigationItem, 'children'>[]
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'HOME',
    href: '/',
    anchor: false,
    pc: false,
  },
  {
    id: 'service',
    label: 'SERVICE',
    subTitle: 'サービス',
    href: '/',
    anchor: true,
    pc: true,
    children: [
      {
        id: 'contract-development',
        label: '共創する受託開発',
        pc: true,
        anchor: false,
        href: pagesPath.contract_development.$url(),
      },
      {
        id: 'ses',
        label: 'グローイングアイランズのSES',
        pc: true,
        anchor: false,
        href: pagesPath.ses.$url(),
      },
    ],
  },
  {
    id: 'mission',
    label: 'MISSION',
    subTitle: 'ミッション',
    href: '/',
    anchor: true,
    pc: true,
  },
  {
    id: 'company',
    label: 'COMPANY',
    subTitle: '会社概要',
    href: '/',
    anchor: true,
    pc: true,
  },
]

type Props = {
  overBorder?: boolean
  onShow?: (flag: boolean) => void
}

export const Header: React.FCX<Props> = (props) => {
  const { className, style, overBorder = false, onShow } = props

  const dispatch = useAppDispatch()
  const router = useRouter()
  const device = useDevice()
  const [activeNavigation, toggleActiveNavigation] = useToggle(false)
  const { scrollDirection } = useScrollDirection()
  const [currentDirection, setCurrentDirection] = useState<'UP' | 'DOWN'>(
    'DOWN'
  )

  const Logo: keyof JSX.IntrinsicElements =
    router.pathname === '/' ? 'h1' : 'div'

  const [ref, { height }] = useMeasure<HTMLElement>()

  useEffect(() => {
    dispatch(setHeaderHeight(height))
  }, [device, height])

  useEffect(() => {
    device === 'pc' && toggleActiveNavigation(false)
  }, [device])

  useEffect(() => {
    const hideFlag =
      overBorder && !activeNavigation && currentDirection === 'DOWN'
    onShow && onShow(!hideFlag)
  }, [overBorder, device, activeNavigation, currentDirection])

  useEffect(() => {
    scrollDirection === 'UP' &&
      currentDirection !== 'UP' &&
      setCurrentDirection('UP')
    scrollDirection === 'DOWN' &&
      currentDirection !== 'DOWN' &&
      setCurrentDirection('DOWN')
  }, [scrollDirection])

  const ScrollOptions: Omit<LinkProps, 'to' | 'ref'> = {
    smooth: true,
    offset: -height,
    duration: 500,
  }

  const LinkElement: React.FCX<NavigationItem> = (props) => {
    const {
      className,
      style,
      anchor,
      href,
      id,
      label,
      subTitle,
      pc,
      children,
    } = props
    return router.pathname === href && anchor ? (
      <AnchorLink
        to={id}
        className={classnames(
          styles['link'],
          className,
          !pc && 'tablet:hidden'
        )}
        onClick={() => device === 'sp' && toggleActiveNavigation()}
        {...{ style, ...ScrollOptions }}
      >
        <span className={styles['link__title']}>{label}</span>
        {subTitle && (
          <span
            className={classnames(styles['link__sub-title'], 'tablet:hidden')}
          >
            {subTitle}
          </span>
        )}
        {children && (
          <AngleIcon
            className={classnames(
              styles['link__icon'],
              'hidden tablet:inline-block'
            )}
            primaryColor={styles['palette-white']}
          />
        )}
      </AnchorLink>
    ) : (
      <Link href={anchor ? `${href}#${id}` : href}>
        <a
          className={classnames(
            styles['link'],
            className,
            !pc && 'tablet:hidden'
          )}
          onClick={() => device === 'sp' && toggleActiveNavigation()}
          {...{ style }}
        >
          <span className={styles['link__title']}>{label}</span>
          {subTitle && (
            <span
              className={classnames(styles['link__sub-title'], 'tablet:hidden')}
            >
              {subTitle}
            </span>
          )}
          {children && (
            <AngleIcon
              className={classnames(
                styles['link__icon'],
                'hidden tablet:inline-block'
              )}
              primaryColor={styles['palette-white']}
            />
          )}
        </a>
      </Link>
    )
  }

  return useMemo(() => {
    const hideFlag =
      overBorder && !activeNavigation && currentDirection === 'DOWN'

    return (
      <header
        className={classnames(
          styles['component'],
          className,
          overBorder && styles['is-change'],
          hideFlag && styles['is-hide']
        )}
        data-testid="component"
        {...{ ref, style }}
      >
        <div className={styles['component__inner']}>
          <Logo className={styles['component__logo']} data-testid="logo">
            <Link href="/">
              <a>
                <Image
                  src={LogoImage.src}
                  alt="グローイングアイランズ"
                  width="60%"
                />
              </a>
            </Link>
          </Logo>
          <div className={styles['component__content']}>
            <nav
              className={classnames(
                styles['component__navigation'],
                styles['navigation'],
                activeNavigation && styles['is-active']
              )}
              onClick={() => {
                device === 'sp' && toggleActiveNavigation()
              }}
              style={
                activeNavigation
                  ? {
                      paddingTop: height,
                    }
                  : {}
              }
            >
              <ul className={styles['navigation__list']}>
                {NAVIGATION_ITEMS.map((item) => {
                  const { id, children } = item
                  return (
                    <li key={id} className={styles['navigation__item']}>
                      <LinkElement
                        className={styles['navigation__link']}
                        {...{ ...item }}
                      />
                      {children && (
                        <ul className={styles['navigation__children']}>
                          {children.map((child) => {
                            const { id } = child
                            return (
                              <li key={id}>
                                <LinkElement {...{ ...child }} />
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                })}
                <li className={styles['navigation__contact']}>
                  {router.pathname === '/' ? (
                    <AnchorLink
                      to="contact"
                      onClick={() =>
                        device === 'sp' && toggleActiveNavigation()
                      }
                      {...{ ...ScrollOptions }}
                    >
                      <MailIcon primaryColor={styles['palette-deepblue']} />
                      <span>CONTACT</span>
                    </AnchorLink>
                  ) : (
                    <Link href="/#contact">
                      <a>
                        <MailIcon primaryColor={styles['palette-deepblue']} />
                        <span>CONTACT</span>
                      </a>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
            <HamburgerButton
              className={classnames(
                styles['component__hamburger'],
                'tablet:hidden'
              )}
              active={activeNavigation}
              onClick={toggleActiveNavigation}
            />
          </div>
        </div>
      </header>
    )
  }, [overBorder, device, activeNavigation, currentDirection])
}
