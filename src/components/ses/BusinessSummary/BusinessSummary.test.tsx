import { render } from '~tests/libs/utils'
import { BusinessSummary } from '.'

describe('components/ses/BusinessSummary', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<BusinessSummary />)

    expect(asFragment()).toMatchSnapshot()
  })
})
