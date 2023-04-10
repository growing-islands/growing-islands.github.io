import { render } from '~tests/libs/utils'
import { PageHeading } from '.'

const DummyImage: StaticImageData = {
  src: 'test',
  width: 100,
  height: 100,
}

describe('components/common/Heading/PageHeading', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <PageHeading
        title="Test"
        text="test text"
        image={{
          sp: {
            src: DummyImage,
            width: 100,
            height: 100,
          },
          pc: {
            src: DummyImage,
            width: 100,
            height: 100,
          },
        }}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
