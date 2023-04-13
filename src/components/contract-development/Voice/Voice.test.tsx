import { render } from '~tests/libs/utils'
import { Voice } from '.'

describe('components/contract-development/Voice', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Voice />)

    expect(asFragment()).toMatchSnapshot()
  })
})
