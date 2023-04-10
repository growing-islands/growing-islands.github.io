import { render } from '~tests/libs/utils'
import { default as ContractDevelopment } from '~/pages/contract-development'

describe('page/ContractDevelopment', () => {
  it('Snapshot', () => {
    const { asFragment } = render(<ContractDevelopment />)
    // snapshot
    expect(asFragment()).toMatchSnapshot()
  })
})
