import { render } from '~tests/libs/utils'
import { LineBreakText } from '.'

describe('components/common/LineBreakText', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<LineBreakText text="これはテストです。" />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Snapshot', () => {
    const { getByTestId } = render(<LineBreakText text="これはテストです。" />)

    expect(getByTestId('component').innerHTML).toBe('これはテストです。')
  })
})
