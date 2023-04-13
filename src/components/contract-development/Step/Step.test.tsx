import { render } from '~tests/libs/utils'
import { Step } from '.'

describe('components/contract-development/Step', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Step />)

    expect(asFragment()).toMatchSnapshot()
  })
})
