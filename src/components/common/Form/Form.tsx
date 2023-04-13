import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { default as Link } from 'next/link'
import { default as Script } from 'next/script'
import type { RegisterOptions } from 'react-hook-form'
import { default as classnames } from 'classnames'
import type { UrlObject } from 'url'
import { default as ReCAPTCHA } from 'react-google-recaptcha'
import { scroller } from 'react-scroll'
import type { dataProperty } from 'aos'

// hooks
import { useAppSelector } from '~hooks/useAppSelector'

// stores
import { selectHeaderHeight } from '~stores/Header'

// components
import { RoundButton } from '~components/common/Buttons/RoundButton'
import { Loading as LoadingIcon } from '~components/common/Icons/Loading'
import { PrivacyPolicyBlock } from './PrivacyPolicyBlock'

// scss
import * as styles from './Form.module.scss'

const { NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY } = process.env

export type Item = App.FormItemProps & {
  validation?: RegisterOptions & {
    match?: {
      value: string
      message: string
    }
  }
}

type ItemKey = Record<string, string>

type Url = `https://${string}.${string}`

type Props = dataProperty & {
  id: string
  items: Item[]
  action?: Url
  method?: string
  privacyPolicy:
    | {
        type: 'block'
      }
    | {
        type: 'internal'
        url: string | UrlObject
      }
    | {
        type: 'external'
        url: `https://${string}.${string}`
      }
  reCaptcha?: boolean
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    values: ItemKey
  ) => Promise<boolean>
}

export const Form: React.FCX<Props> = (props) => {
  const {
    id,
    items,
    action,
    method = 'post',
    privacyPolicy,
    reCaptcha = false,
    onSubmit,
    className,
    style,
    'data-aos': dataAos,
  } = props

  const {
    register,
    trigger,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ItemKey>({
    shouldUnregister: false,
    mode: 'onBlur',
  })

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const headerHeight = useAppSelector(selectHeaderHeight)

  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (reCaptcha) {
      register('re-captcha', {
        required: true,
      })
    }
  }, [reCaptcha])

  async function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formItems = [
      ...items,
      reCaptcha
        ? {
            name: 're-captcha',
          }
        : {},
    ]
    const results = await Promise.all(
      formItems.map((item) => trigger(item.name))
    )

    if (results.every((value) => value)) {
      // ローディング開始
      setSubmitting(true)
      if (onSubmit) {
        await onSubmit(event, getValues())
        setSubmitting(false)
        setSubmitted(true)
        reset()
        return false
      } else {
        return true
      }
    } else {
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -headerHeight,
      })
      event.preventDefault()
      return false
    }
  }

  // react-hook-formに沿ってバリデーションを整形する関数
  function getFormattedValidates(
    validates: typeof items[0]['validation']
  ): RegisterOptions | undefined {
    if (!validates) return
    const { match, ...validatesProps } = validates

    const result: RegisterOptions = {
      ...validatesProps,
    }

    // 等価バリデーションを作成
    if (match) {
      result.validate = (value: string) => {
        return value === getValues(match.value) || match.message
      }
    }
    return result
  }

  return (
    <div
      className={classnames(
        styles['component'],
        className,
        submitted && styles['is-complete']
      )}
      data-aos={dataAos}
    >
      {reCaptcha && <Script src="https://www.google.com/recaptcha/api.js" />}
      {!submitted && (
        <form
          ref={form}
          className={classnames(styles['component'], className)}
          onSubmit={formSubmit}
          {...{ id, style, action, method }}
        >
          {submitting && (
            <div className={styles['loading']}>
              <LoadingIcon
                className={styles['loading__icon']}
                color={styles['palette-deepblue']}
              />
            </div>
          )}
          <div className={styles['component__contents']}>
            {items.map((item) => {
              const { name, type, label, attributes, validation } = item

              const itemId = `${name}-${id}`

              return (
                <div
                  key={name}
                  className={classnames(
                    styles['component__item'],
                    styles['item']
                  )}
                >
                  <label htmlFor={itemId} className={styles['item__head']}>
                    <span className={styles['item__label']}>{label}</span>
                    {validation?.required && (
                      <span className={styles['item__required']}>必須</span>
                    )}
                  </label>
                  <div className={styles['item__body']}>
                    {((): JSX.Element => {
                      switch (type) {
                        case 'selectbox': {
                          const selectAttributes =
                            attributes as Form.SelectType['attributes']
                          return (
                            <div className={styles['item__select-wrap']}>
                              <select
                                id={itemId}
                                {...register(
                                  name,
                                  getFormattedValidates(validation)
                                )}
                                {...{ ...selectAttributes }}
                              >
                                {item.options.map((option) => {
                                  const { label, value, ...rest } = option
                                  return (
                                    <option
                                      key={label}
                                      value={value}
                                      {...{ ...rest }}
                                    >
                                      {option.label}
                                    </option>
                                  )
                                })}
                              </select>
                              <i className={styles['item__select-icon']} />
                            </div>
                          )
                        }
                        case 'textarea': {
                          const textareaAttributes =
                            attributes as Form.TextAreaType['attributes']
                          return (
                            <textarea
                              id={itemId}
                              {...register(
                                name,
                                getFormattedValidates(validation)
                              )}
                              {...{ ...textareaAttributes }}
                            />
                          )
                        }
                        default: {
                          const inputAttributes =
                            attributes as Form.InputType['attributes']

                          return (
                            <input
                              id={itemId}
                              {...register(
                                name,
                                getFormattedValidates(validation)
                              )}
                              {...{ ...inputAttributes }}
                            />
                          )
                        }
                      }
                    })()}
                    {errors[name] && (
                      <span className={styles['item__error']}>
                        {errors[name]?.message}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          {privacyPolicy.type === 'block' && (
            <PrivacyPolicyBlock
              className={styles['component__privacy-policy']}
            />
          )}
          <div
            className={classnames(
              styles['component__policy-check'],
              styles['policy-check']
            )}
          >
            <input
              id={`privacy-policy-${id}`}
              type="checkbox"
              required
              {...register('privacy-policy', {
                required: {
                  value: true,
                  message: '必須項目です',
                },
              })}
            />
            <label
              htmlFor={`privacy-policy-${id}`}
              className={styles['policy-check__label']}
            >
              {((): JSX.Element | string => {
                switch (privacyPolicy.type) {
                  case 'external': {
                    return (
                      <>
                        「
                        <a
                          href={privacyPolicy.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          プライバシーポリシー
                        </a>
                        」に同意します
                      </>
                    )
                  }
                  case 'internal': {
                    return (
                      <>
                        <Link href={privacyPolicy.url}>
                          「<a>プライバシーポリシー</a>」
                        </Link>
                        に同意します
                      </>
                    )
                  }
                  case 'block':
                  default: {
                    return '「プライバシーポリシー」に同意します'
                  }
                }
              })()}
            </label>
          </div>
          {/* Google reCAPTCHA */}
          {NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY && reCaptcha && (
            <div className={classnames(styles['component__re-captcha'])}>
              <ReCAPTCHA
                sitekey={NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  token && setValue('re-captcha', token)
                }}
                onExpired={() => {
                  setValue('re-captcha', '')
                }}
                onErrored={() => {
                  setValue('re-captcha', '')
                }}
              />
              {/* <div
                className="g-recaptcha"
                data-sitekey={NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
              /> */}
              {errors['re-captcha'] && (
                <span className={styles['item__error']}>
                  上記項目にチェックを入れてください。
                </span>
              )}
            </div>
          )}
          <div className={styles['component__buttons']}>
            <RoundButton className={styles['component__button']} type="submit">
              送信
            </RoundButton>
          </div>
        </form>
      )}
    </div>
  )
}

type FormrunProps = Omit<Props, 'action' | 'method' | 'onSubmit'> & {
  formrunId: string
}

export const Formrun: React.FCX<FormrunProps> = (props) => {
  const { formrunId, ...rest } = props
  // formrunの読み込み
  const [formrunReady, setFormrunReady] = useState<boolean>(false)
  const [loadError, setLoadError] = useState<boolean>(false)

  // componentDidMount
  useEffect(() => {
    // formrunの初期化
    loadFormrun()
  }, [])

  // formrunのscriptを読み込み
  function loadFormrun(): void | boolean {
    if (window['Formrun']) {
      initFormrun()
      return false
    }

    new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.addEventListener('load', resolve)
      script.addEventListener('error', reject)
      script.src = 'https://sdk.form.run/js/v2/formrun.js'
      document.head.appendChild(script)
    })
      .then(() => {
        initFormrun()
      })
      .catch((error) => {
        console.error(error)
        setLoadError(true)
      })
  }

  // formrunのscriptをリセット
  function initFormrun() {
    window['Formrun']._reset()
    window['Formrun'].init('.formrun')
    setFormrunReady(true)
  }

  return loadError ? (
    <div className={styles['error']}>
      <p className={styles['error__title']}>通信エラー</p>
      <p className={styles['error__text']}>
        通信エラーが発生しました。
        <br />
        恐れ入りますが画面を読み込み直して再度お試しください。
        <br />
        それでも改善されない場合、システムエラーの可能性がございますので
        <br />
        恐れ入りますが時間をおいて再度お試しください。
      </p>
    </div>
  ) : (
    <>
      <Form
        action={`https://form.run/api/v1/r/${formrunId}`}
        method="post"
        {...{ ...rest }}
      />
      {!formrunReady && (
        <div className={styles['loading']}>
          <LoadingIcon
            className={styles['loading__icon']}
            color={styles['palette-deepblue']}
          />
        </div>
      )}
    </>
  )
}
