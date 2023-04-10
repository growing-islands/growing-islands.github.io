import { render } from '~tests/libs/utils'
import { WithSymbolHeading } from '.'

describe('components/common/Heading/WithSymbolHeading', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<WithSymbolHeading text={'test'} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
