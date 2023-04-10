import { render } from '~tests/libs/utils'
import { Mission } from '.'

describe('components/top/Mission', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Mission />)

    expect(asFragment()).toMatchSnapshot()
  })
})
