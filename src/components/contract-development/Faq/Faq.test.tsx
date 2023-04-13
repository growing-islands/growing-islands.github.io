import { render } from '~tests/libs/utils'
import { Faq } from '.'

describe('components/contract-development/Faq', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<Faq />)

    expect(asFragment()).toMatchSnapshot()
  })
})
