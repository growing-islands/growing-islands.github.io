import { render } from '~tests/libs/utils'
import { Advantage } from '.'

describe('components/contract-development/Advantage', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Advantage />)

    expect(asFragment()).toMatchSnapshot()
  })
})
