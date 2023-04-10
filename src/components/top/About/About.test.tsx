import { render } from '~tests/libs/utils'
import { About } from '.'

describe('components/top/About', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<About />)

    expect(asFragment()).toMatchSnapshot()
  })
})
