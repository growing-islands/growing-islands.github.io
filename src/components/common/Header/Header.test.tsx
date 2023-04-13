import { render } from '~tests/libs/utils'
import { Header } from '.'

describe('components/common/Header', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
