import { default as classnames } from 'classnames'

// components
import { ColumnHeadingForSection } from '~components/common/Heading/ColumnHeadingForSection'
import { WithSymbolHeading } from '~components/common/Heading/WithSymbolHeading'

// scss
import * as styles from './Company.module.scss'

type ListItem = {
  label: string
  text: string
}

const LIST_ITEMS: ListItem[] = [
  {
    label: '会社名',
    text: '株式会社グローイングアイランズ',
  },
  {
    label: '住所',
    text: `〒 279-0002<br class='tablet:hidden' /> 千葉県浦安市北栄1-1-3 柳内ビル 3階`,
  },
  {
    label: '事業内容',
    text: 'WEBシステムの企画立案・設計・構築 運用及びコンサルタント業務<br class="hidden tablet:inline-block" />ソフトウェアの開発、販売',
  },
  {
    label: '代表取締役',
    text: '深松一平',
  },
  {
    label: '設立',
    text: '2022年12月',
  },
  {
    label: '取引銀行',
    text: 'みずほ銀行 新浦安支店',
  },
]

export const Company: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div
      id="company"
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <div className="l-wrap">
        <div className={classnames('l-inner', styles['component__inner'])}>
          <ColumnHeadingForSection
            className={classnames(
              styles['component__column-header'],
              'hidden tablet:block'
            )}
            texts={{
              en: 'Company',
              ja: '会社概要',
            }}
            textColor={styles['palette-deepblue']}
            borderColor={styles['palette-deepblue']}
          />
          <WithSymbolHeading
            className={styles['component__header']}
            text="COMPANY"
            symbolColor="gradient"
            textColor={styles['palette-deepblue']}
            data-aos="fade-up"
          />
          <div className={styles['component__map']} data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.51387623262!2d139.89392581525823!3d35.664346880198224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d3fa682b8fd%3A0xc64b91f80bf68808!2z5qCq5byP5Lya56S-44Om44Oh44Op44Oc!5e0!3m2!1sja!2sjp!4v1638179648047!5m2!1sja!2sjp"
              loading="lazy"
            />
          </div>
          <div className={styles['component__list']} data-aos="fade-up">
            {LIST_ITEMS.map((item) => {
              const { label, text } = item
              return (
                <dl
                  key={label}
                  className={classnames(
                    styles['component__item'],
                    styles['item']
                  )}
                >
                  <dt
                    className={styles['item__label']}
                    dangerouslySetInnerHTML={{
                      __html: label,
                    }}
                  />
                  <dd
                    className={styles['item__body']}
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                </dl>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
