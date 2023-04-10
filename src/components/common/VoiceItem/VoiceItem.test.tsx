import { render } from '~tests/libs/utils'
import { VoiceItem } from '.'

const DummyImage = {
  src: '/',
  width: 100,
  height: 100,
}

describe('components/common/VoiceItem', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <VoiceItem
        title="title"
        position="position"
        description="description"
        image={{
          src: DummyImage,
          width: 100,
          height: 100,
        }}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
