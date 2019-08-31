import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box color', (): void => {
  test('return color styles', (): void => {
    const style = getStyle({
      color: 'gold',
      bg: 'tomato'
    })
    expect(style).toEqual({
      color: 'gold',
      'background-color': 'tomato'
    })
  })
})
