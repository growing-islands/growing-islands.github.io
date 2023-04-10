import { GetEllipsisString } from '.'

describe('GetEllipsisString', () => {
  it('文字省略', () => {
    expect(GetEllipsisString('test', 3)).toBe('tes...')
  })
  it('省略なし', () => {
    expect(GetEllipsisString('test', 4)).toBe('test')
  })
})
