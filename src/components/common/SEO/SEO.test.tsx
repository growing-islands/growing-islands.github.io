import { render } from '~tests/libs/utils'
import { screen } from '@testing-library/react'
import { SEO } from '.'
import type { Props } from '.'

const metaProps: Required<Props> = {
  title: 'test title',
  description: 'test description',
  url: 'https://test.com',
  image: 'https://crogic.jp/OGP.png',
  meta: {
    ogType: 'website',
    ogSiteName: 'test siteName',
    twitterCard: 'summary_large_image',
    twitterSite: '@test_account',
  },
}

describe('components/common/SEO', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<SEO title={metaProps.title} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('各種Props指定', () => {
    render(
      <SEO {...{ ...metaProps }}>
        <meta name="theme-color" content="#000" data-testid="themeColor" />
      </SEO>
    )

    // title
    expect(screen.getByTestId('title')).toHaveTextContent(metaProps.title)
    expect(screen.getByTestId('ogTitle').getAttribute('content')).toEqual(
      metaProps.title + '｜株式会社ユメラボ'
    )

    // description
    expect(screen.getByTestId('description').getAttribute('content')).toEqual(
      metaProps.description
    )
    expect(screen.getByTestId('ogDescription').getAttribute('content')).toEqual(
      metaProps.description
    )

    // URL
    expect(screen.getByTestId('ogUrl').getAttribute('content')).toEqual(
      metaProps.url
    )

    // 画像
    expect(screen.getByTestId('ogImage').getAttribute('content')).toEqual(
      metaProps.image
    )

    // その他meta
    expect(screen.getByTestId('ogType').getAttribute('content')).toEqual(
      metaProps.meta.ogType
    )
    expect(screen.getByTestId('ogSiteName').getAttribute('content')).toEqual(
      metaProps.meta.ogSiteName
    )
    expect(screen.getByTestId('twitterCard').getAttribute('content')).toEqual(
      metaProps.meta.twitterCard
    )
    expect(screen.getByTestId('twitterSite').getAttribute('content')).toEqual(
      metaProps.meta.twitterSite
    )

    // props以外のmetaタグ
    expect(screen.getByTestId('themeColor').getAttribute('content')).toEqual(
      '#000'
    )
    expect(screen.getByTestId('themeColor').getAttribute('name')).toEqual(
      'theme-color'
    )
  })
})
