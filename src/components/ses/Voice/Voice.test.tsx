import { render } from '~tests/libs/utils'
import { Voice } from '.'

describe('components/ses/Voice', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Voice />)

    expect(asFragment()).toMatchSnapshot()
  })
})
