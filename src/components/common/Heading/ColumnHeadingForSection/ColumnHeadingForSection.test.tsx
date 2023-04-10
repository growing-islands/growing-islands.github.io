import { render } from '~tests/libs/utils'
import { ColumnHeadingForSection } from '.'

describe('components/common/Heading/ColumnHeadingForSection', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <ColumnHeadingForSection texts={{ en: 'Test', ja: 'テスト' }} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
