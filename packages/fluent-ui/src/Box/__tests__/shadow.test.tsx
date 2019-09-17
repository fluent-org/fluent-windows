import { getStyle } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

describe('Box shadow', (): void => {
  test('returns shadow styles', (): void => {
    const style = getStyle({
      theme: {
        shadows: {
          small: '0 1px 4px rgba(0, 0, 0, .125)'
        }
      },
      textShadow: '0 -1px rgba(255, 255, 255, .25)',
      boxShadow: 'small'
    })
    expect(style).toEqual({
      'text-shadow': '0 -1px rgba(255, 255, 255, .25)',
      'box-shadow': '0 1px 4px rgba(0, 0, 0, .125)'
    })
  })
})
