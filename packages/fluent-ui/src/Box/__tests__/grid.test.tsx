import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box grid', (): void => {
  test('returns grid styles', (): void => {
    const style = getStyle({
      gridGap: 32
    })
    expect(style).toEqual({
      'grid-gap': '32px'
    })
  })
})
