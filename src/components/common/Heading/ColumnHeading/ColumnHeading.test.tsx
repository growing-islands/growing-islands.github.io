import { render } from '~tests/libs/utils'
import { ColumnHeading } from '.'

describe('components/common/Heading/ColumnHeading', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <ColumnHeading texts={{ en: 'Text', ja: 'テスト' }} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
