type defaultMetaDataType = {
  description: string
  ogType: 'website' | 'article'
  ogUrl: string
  ogImage: string
  ogSiteName: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: `@${string}`
}

export const defaultMetaData: defaultMetaDataType = {
  description:
    '株式会社グローイングアイランズは千葉県浦安市のIT/Web開発・SES事業でお客様のIT投資を最大限に生かし価値を共に創り続けるシステム開発企業です。システム開発・保守運用、IT活用・サポート、SESでの体制構築から、Webサイト制作・企画運用まで、IT/Webに関わるトータルソリューションサービスを提供しております。',
  ogType: 'website',
  ogUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/OGP.png`,
  ogSiteName: 'Default ogSiteName',
  // twitterCard: 'summary_large_image',
  // twitterSite: '@yumelab1214',
}
