import { default as Head } from 'next/head'

import { defaultMetaData } from './defaultMetaData'

type MetaType = Readonly<{
  ogType?: 'website' | 'article'
  obImage?: string
  ogSiteName?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: `@${string}`
}>

export type Props = {
  title: string
  description?: string
  url?: string
  image?: string
  meta?: MetaType
}

export const SEO: React.FCX<Props & React.child> = (props) => {
  const { title, description, url, image, meta, children } = props

  const titlePrefix = '｜株式会社グローイングアイランズ'

  const formattedTitle = title + titlePrefix

  return (
    <Head>
      <title data-testid="title">{formattedTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/android-chrome-192x192.png"
        sizes="192x192"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/android-chrome-512x512.png"
        sizes="512x512"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-150×150.png"
      />
      <meta name="theme-color" content="#1e2888" />
      <meta
        data-testid="description"
        name="description"
        content={description || defaultMetaData.description}
      />
      <meta
        data-testid="ogTitle"
        property="og:title"
        content={formattedTitle}
      />
      <meta
        data-testid="ogDescription"
        property="og:description"
        content={description || defaultMetaData.description}
      />
      <meta
        data-testid="ogType"
        property="og:type"
        content={meta?.ogType || defaultMetaData.ogType}
      />
      <meta
        data-testid="ogUrl"
        property="og:url"
        content={url || defaultMetaData.ogUrl}
      />
      <meta
        data-testid="ogImage"
        property="og:image"
        content={image || defaultMetaData.ogImage}
      />
      <meta
        data-testid="ogSiteName"
        property="og:site_name"
        content={meta?.ogSiteName || formattedTitle}
      />
      <meta
        data-testid="twitterCard"
        name="twitter:card"
        content={meta?.twitterCard || defaultMetaData.twitterCard}
      />
      <meta
        data-testid="twitterSite"
        name="twitter:site"
        content={meta?.twitterSite || defaultMetaData.twitterSite}
      />
      {children}
    </Head>
  )
}
