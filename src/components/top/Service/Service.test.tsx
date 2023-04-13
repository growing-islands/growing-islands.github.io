import { render } from '~tests/libs/utils'
import { Service } from '.'

describe('components/top/Service', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Service />)

    expect(asFragment()).toMatchSnapshot()
  })
})
