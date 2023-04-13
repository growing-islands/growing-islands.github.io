import { render } from '~tests/libs/utils'
import { Accordion } from '.'

describe('components/common/Accordion', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <Accordion
        data={{
          head: 'test',
          body: 'test',
        }}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
