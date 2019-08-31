import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box typography', (): void => {
  test('returns typography styles', (): void => {
    const style = getStyle({
      fontSize: 32,
      fontWeight: 'bold'
    })
    expect(style).toEqual({
      'font-size': '32px',
      'font-weight': 'bold'
    })
  })
})
