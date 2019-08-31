import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box layout', (): void => {
  test('returns layout styles', (): void => {
    const style = getStyle({
      width: [1, 1 / 2, 1 / 4],
      minHeight: 32,
      maxWidth: 768
    })
    expect(style).toEqual({
      width: '100%',
      'max-width': '768px',
      'min-height': '32px',
      '@media screen and (min-width: 40em)': {
        width: '50%'
      },
      '@media screen and (min-width: 52em)': {
        width: '25%'
      }
    })
  })

  test('returns 0 from theme.sizes', (): void => {
    const style = getStyle({
      theme: {
        sizes: [24, 48, 96]
      },
      width: 0,
      height: 0
    })
    expect(style).toEqual({
      width: '24px',
      height: '24px'
    })
  })
})
