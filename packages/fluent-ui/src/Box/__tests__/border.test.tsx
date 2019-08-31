import { getStyle } from './test_unit'
import '@testing-library/jest-dom/extend-expect'

describe('Box border', (): void => {
  test('returns border styles', (): void => {
    const style = getStyle({ border: '1px solid gold' })
    expect(style).toEqual({ border: '1px solid gold' })
  })

  test('returns individual border styles', (): void => {
    const style = getStyle({
      theme: {
        borderWidths: { thin: 1 },
        colors: { primary: 'red' },
        borderStyles: { thick: 'solid' },
        radii: { small: 5 }
      },
      borderTopWidth: 'thin',
      borderTopColor: 'primary',
      borderTopStyle: 'thick',
      borderTopLeftRadius: 'small',
      borderTopRightRadius: 'small',
      borderBottomWidth: 'thin',
      borderBottomColor: 'primary',
      borderBottomStyle: 'thick',
      borderBottomLeftRadius: 'small',
      borderBottomRightRadius: 'small',
      borderRightWidth: 'thin',
      borderRightColor: 'primary',
      borderRightStyle: 'thick',
      borderLeftWidth: 'thin',
      borderLeftColor: 'primary',
      borderLeftStyle: 'thick'
    })
    expect(style).toEqual({
      'border-top-color': 'red',
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-left-radius': '5px',
      'border-top-right-radius': '5px',
      'border-bottom-color': 'red',
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-left-radius': '5px',
      'border-bottom-right-radius': '5px',
      'border-right-color': 'red',
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-left-color': 'red',
      'border-left-width': '1px',
      'border-left-style': 'solid'
    })
  })

  test('returns border top and bottom radii', (): void => {
    const style = getStyle({
      theme: {
        radii: { small: 5 }
      },
      borderTopLeftRadius: 'small',
      borderTopRightRadius: 'small',
      borderBottomLeftRadius: 'small',
      borderBottomRightRadius: 'small'
    })
    expect(style).toEqual({
      'border-top-left-radius': '5px',
      'border-top-right-radius': '5px',
      'border-bottom-left-radius': '5px',
      'border-bottom-right-radius': '5px'
    })
  })
})
