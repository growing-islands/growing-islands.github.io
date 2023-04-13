import { render } from '~tests/libs/utils'
import { default as Ses } from '~/pages/ses'

describe('page/Ses', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Ses />)
    // snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
