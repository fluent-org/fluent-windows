import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box flexbox', (): void => {
  test('returns flexbox styles', (): void => {
    const style = getStyle({
      alignItems: 'center',
      flex: '1 1 auto'
    })
    expect(style).toEqual({
      'align-items': 'center',
      flex: '1 1 auto'
    })
  })
})
