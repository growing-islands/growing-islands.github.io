import { render } from '~tests/libs/utils'
import { LeadContact } from '.'

describe('components/common/LeadContact', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<LeadContact text="test text" />)

    expect(asFragment()).toMatchSnapshot()
  })
})
