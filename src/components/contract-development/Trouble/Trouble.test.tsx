import { render } from '~tests/libs/utils'
import { Trouble } from '.'

describe('components/contract-development/Trouble', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Trouble />)

    expect(asFragment()).toMatchSnapshot()
  })
})
