import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box position', (): void => {
  test('returns position styles', (): void => {
    const style = getStyle({
      position: 'absolute',
      top: 0,
      right: 0
    })
    expect(style).toEqual({
      position: 'absolute',
      top: 0,
      right: 0
    })
  })

  test('returns theme values', (): void => {
    const style = getStyle({ top: 1, right: 2, bottom: 3, left: 4 })
    expect(style).toEqual({ top: '4px', right: '8px', bottom: '16px', left: '32px' })
  })

  test('returns pixel values', (): void => {
    const style = getStyle({
      top: '1px',
      right: '2px',
      bottom: '3px',
      left: '4px'
    })
    expect(style).toEqual({
      top: '1px',
      right: '2px',
      bottom: '3px',
      left: '4px'
    })
  })
})
