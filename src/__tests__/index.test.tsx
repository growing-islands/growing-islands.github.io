import { render } from '~tests/libs/utils'
import { default as Top } from '~/pages'

describe('page/Top', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Top />)
    // snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
