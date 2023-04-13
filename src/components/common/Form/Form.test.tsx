import { render } from '~tests/libs/utils'
import { Form } from '.'

describe('components/common/Form', () => {
  it('Snapshot', () => {
    const { asFragment } = render(
      <Form
        id="test"
        items={[
          {
            name: 'test',
            label: 'test',
            type: 'text',
          },
        ]}
        privacyPolicy={{
          type: 'block',
        }}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
