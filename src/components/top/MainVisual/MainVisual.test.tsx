import { render } from '~tests/libs/utils'
import { MainVisual } from '.'

describe('components/top/MainVisual', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<MainVisual />)

    expect(asFragment()).toMatchSnapshot()
  })
})
