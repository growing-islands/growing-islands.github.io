import { render } from '~tests/libs/utils'
import { Container } from '.'

describe('components/error/Container', () => {
  it('Snapshot on 404', () => {
    const { asFragment } = render(<Container statusCode={404} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Snapshot on 500', () => {
    const { asFragment } = render(<Container statusCode={500} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Snapshot on other', () => {
    const { asFragment } = render(<Container statusCode={505} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
