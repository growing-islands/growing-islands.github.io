import { default as classnames } from 'classnames'

import * as styles from './PrivacyPolicyBlock.module.scss'

export const PrivacyPolicyBlock: React.FCX = (props) => {
  const { className, style } = props

  return (
    <div className={classnames(styles['component'], className)} {...{ style }}>
      <div className={styles['component__inner']}>
        <p className={styles['component__text']}>
          プライバシーポリシー
          <br />
          株式会社グローイングアイランズ（以下「当社」）では、個人情報に関する法令およびその他の規範を遵守し、お客様の大切な個人情報の保護に万全を尽くします。
        </p>
        <p className={styles['component__text']}>
          1 個人情報の収集について
          <br />
          当社では、次のような場合に必要な範囲で個人情報を収集することがあります。
        </p>
        <p className={styles['component__text']}>
          ・当社へのお問い合わせ時
          <br />
          ・当社へのサービスお申し込み時
        </p>
        <p className={styles['component__text']}>
          2 個人情報の利用目的について
          <br />
          当社は、お客様から収集した個人情報を次の目的で利用いたします。また、目的の範囲内であっても、違法または不当な行為を助長または誘発するおそれがある方法でお客様の個人情報を利用しません。
        </p>
        <p className={styles['component__text']}>
          ・お客様への連絡のため
          <br />
          ・お客様からのお問い合せに対する回答のため
          <br />
          ・お客様へのサービス提供のため
        </p>
        <p className={styles['component__text']}>
          3 個人情報の第三者への提供について
          <br />
          当社では、お客様より取得した個人情報を第三者に開示または提供することはありません。
          <br />
          ただし、次の場合は除きます。
        </p>
        <p className={styles['component__text']}>
          ・ご本人の同意がある場合
          <br />
          ・警察からの要請など、官公署からの要請の場合
          <br />
          ・法律の適用を受ける場合
        </p>
        <p className={styles['component__text']}>
          4 個人情報の開示、訂正等について
          <br />
          当社は、お客様ご本人からの自己情報の開示、訂正、削除等のお求めがあった場合は、確実に応じます。
        </p>
        <p className={styles['component__text']}>
          5 苦情や相談への対応と安全管理措置について
          <br />
          当社は、個人情報の取扱いに関するお客様からの苦情や相談を受け付け、適切かつ迅速に対応いたします。また、お客様からの開示・訂正・追加・削除、利用又は提供の停止などのご要望に対しても、迅速適切に対応いたします。これらの受付窓口は、8に記載の窓口となります。
          <br />
          また、当社は、個人情報保護法に基づき、個人情報について、漏えい、滅失又は毀損の防止等、その他の安全管理のために必要かつ適切な安全管理措置を講じます。保有個人データの安全管理のために講じた措置について、8に記載の窓口に問い合わせいただいた場合、当社は個人情報保護法の定めに従い、お客様ご本人の求めに応じて遅滞なく回答を行います。
        </p>
        <p className={styles['component__text']}>
          6 プライバシーポリシーの変更
          <br />
          本ポリシー内容は、ユーザーに通知することなく、変更することができるものとします。また、当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>
        <p className={styles['component__text']}>
          7 当社名称及び代表者氏名
          <br />
          会社名：株式会社グローイングアイランズ
          <br />
          代表取締役：深松一平
          <br />
          住所：千葉県浦安市北栄1-1-3 柳内ビル 3階
        </p>
        <p className={styles['component__text']}>
          8 問い合わせ窓口
          <br />
          本ポリシーに関するお問い合わせは、本ページのお問い合わせフォームからお願いいたします。
        </p>
      </div>
    </div>
  )
}
