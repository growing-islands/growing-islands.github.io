import { render } from '~tests/libs/utils'
import { Contact } from '.'

describe('components/top/Contact', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Contact />)

    expect(asFragment()).toMatchSnapshot()
  })
})
