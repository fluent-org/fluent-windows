import { getStyle } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import { defaultBreakpoints } from '../../styles/createBreakpoint'

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
      [`@media screen and (min-width: ${defaultBreakpoints[0]})`]: {
        width: '50%'
      },
      [`@media screen and (min-width: ${defaultBreakpoints[1]})`]: {
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
