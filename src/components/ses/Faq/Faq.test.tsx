import { render } from '~tests/libs/utils'
import { Faq } from '.'

describe('components/ses/Faq', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Faq />)

    expect(asFragment()).toMatchSnapshot()
  })
})
