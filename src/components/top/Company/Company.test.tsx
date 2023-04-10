import { render } from '~tests/libs/utils'
import { Company } from '.'

describe('components/top/Company', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Company />)

    expect(asFragment()).toMatchSnapshot()
  })
})
