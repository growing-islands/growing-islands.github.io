import { render } from '~tests/libs/utils'
import { BusinessSummary } from '.'

describe('components/contract-development/BusinessSummary', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<BusinessSummary />)

    expect(asFragment()).toMatchSnapshot()
  })
})
