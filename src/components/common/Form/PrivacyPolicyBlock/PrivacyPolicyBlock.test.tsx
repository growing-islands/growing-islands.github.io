import { render } from '~tests/libs/utils'
import { PrivacyPolicyBlock } from '.'

describe('components/common/Form/PrivacyPolicyBlock', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<PrivacyPolicyBlock />)

    expect(asFragment()).toMatchSnapshot()
  })
})
