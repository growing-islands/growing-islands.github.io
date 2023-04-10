import { render } from '~tests/libs/utils'
import { ToTopButton } from '.'

describe('components/common/Buttons/FixedToTopButton/ToTopButton', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<ToTopButton />)

    expect(asFragment()).toMatchSnapshot()
  })
})
