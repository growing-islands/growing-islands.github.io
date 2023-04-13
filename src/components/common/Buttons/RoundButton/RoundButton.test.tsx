import { render } from '~tests/libs/utils'
import { default as UserEvent } from '@testing-library/user-event'
import { RoundButton, RoundButtonLink } from '.'

describe('components/common/Buttons/RoundButton', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<RoundButton>button</RoundButton>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Click events', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <RoundButton onClick={handleClick}></RoundButton>
    )

    const element = getByTestId('button')

    UserEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

describe('components/common/Buttons/RoundButtonLink', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <RoundButtonLink href="/">button</RoundButtonLink>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
