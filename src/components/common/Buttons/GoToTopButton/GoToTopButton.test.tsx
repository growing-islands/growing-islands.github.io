import { render } from '~tests/libs/utils'
import { GoToTopButton } from '.'

describe('components/common/Buttons/GoToTopButton', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<GoToTopButton />)

    expect(asFragment()).toMatchSnapshot()
  })
})
