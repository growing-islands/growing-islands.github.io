import { render } from '~tests/libs/utils'
import { Footer } from '.'

describe('components/common/Footer', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Footer />)

    expect(asFragment()).toMatchSnapshot()
  })
})
