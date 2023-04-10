import { default as classnames } from 'classnames'

// components
import { WithSymbolHeading } from '~components/common/Heading/WithSymbolHeading'
import { Formrun } from '~components/common/Form'
import type { Item } from '~components/common/Form'

// scss
import * as styles from './Contact.module.scss'

// utils
import { REGEX, ERROR_MESSAGES } from '~utils/Validate'

const { NEXT_PUBLIC_FORMRUN_ID } = process.env

type Props = {
  complete?: boolean
}

const FORM_ITEMS: Item[] = [
  {
    name: 'company-name',
    label: '会社名',
    type: 'text',
    attributes: {
      placeholder: '例）株式会社ユメラボ',
    },
  },
  {
    name: 'your-name',
    label: 'お名前',
    type: 'text',
    attributes: {
      placeholder: '例）山田太郎',
    },
    validation: {
      required: {
        value: true,
        message: ERROR_MESSAGES.required,
      },
    },
  },
  {
    name: 'email',
    label: 'メールアドレス',
    type: 'email',
    attributes: {
      placeholder: 'mail@example.co.jp',
    },
    validation: {
      required: {
        value: true,
        message: ERROR_MESSAGES.required,
      },
      pattern: {
        value: REGEX.email,
        message: ERROR_MESSAGES.email,
      },
    },
  },
  {
    name: 'email-confirm',
    label: '確認用メールアドレス',
    type: 'email',
    attributes: {
      placeholder: 'mail@example.co.jp',
    },
    validation: {
      required: {
        value: true,
        message: ERROR_MESSAGES.required,
      },
      pattern: {
        value: REGEX.email,
        message: ERROR_MESSAGES.email,
      },
      match: {
        value: 'email',
        message: 'メールアドレスが一致しません',
      },
    },
  },
  {
    name: 'subject',
    label: 'お問い合わせ項目',
    type: 'selectbox',
    attributes: {
      defaultValue: '',
    },
    options: [
      {
        label: '選択してください',
        value: '',
      },
      {
        label: '共創する受託開発に関して',
        value: '共創する受託開発に関して',
      },
      {
        label: 'SESに関して',
        value: 'SESに関して',
      },
      {
        label: 'エンジニア様のご登録',
        value: 'エンジニア様のご登録',
      },
      {
        label: 'その他',
        value: 'その他',
      },
    ],
  },
  {
    name: 'detail',
    label: 'お問い合わせ内容',
    type: 'textarea',
    attributes: {
      placeholder: 'お問い合わせ内容を入力ください。',
    },
  },
]

export const Contact: React.FCX<Props> = (props) => {
  const { className, style, complete } = props

  return (
    <div
      id="contact"
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className="l-inner">
          <WithSymbolHeading
            className={classnames(
              styles['component__header'],
              styles['header']
            )}
            text={complete ? '送信が完了しました。' : 'CONTACT'}
            symbolColor="gradient"
            textColor={styles['palette-deepblue']}
            data-aos="fade-up"
          >
            {complete ? (
              <p className={styles['header__text']}>
                お問い合わせ頂き誠にありがとうございました。
                <br />
                お問い合わせ内容を確認し、担当者より連絡させていただきます。
                <br />
                今しばらくお待ちいただけますよう、宜しくお願い申し上げます。
              </p>
            ) : (
              <p className={styles['header__text']}>
                システム開発でお悩みの企業様、弊社が「共創する受託開発」で解決いたします。
                <br className="hidden tablet:inline-block" />
                また、エンジニア皆様への案件紹介もこちらから受け付けております。
                <br />
                まずはお気軽にご相談下さい。
              </p>
            )}
          </WithSymbolHeading>
          {NEXT_PUBLIC_FORMRUN_ID && !complete && (
            <Formrun
              id="formrun"
              items={FORM_ITEMS}
              reCaptcha={true}
              privacyPolicy={{
                type: 'block',
              }}
              formrunId={NEXT_PUBLIC_FORMRUN_ID}
              data-aos="fade-up"
            />
          )}
        </div>
      </div>
    </div>
  )
}
