import { getStyle } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'
import { defaultBreakpoints } from '../../styles/createBreakpoint'

describe('Box space', (): void => {
  test('returns style objects', (): void => {
    const styles = getStyle({
      m: '4px'
    })
    expect(styles).toEqual({ margin: '4px' })
  })

  test('returns 0 values', (): void => {
    const styles = getStyle({ m: 0 })
    expect(styles).toEqual({ margin: 0 })
  })

  test('returns negative pixel values', (): void => {
    const styles = getStyle({ m: -2 })
    expect(styles).toEqual({ margin: '-8px' })
  })

  test('returns negative em values', (): void => {
    const styles = getStyle({ m: '-16em' })
    expect(styles).toEqual({ margin: '-16em' })
  })

  test('returns negative theme values', (): void => {
    const styles = getStyle({
      theme: {
        space: [0, 4, 8]
      },
      m: -2
    })
    expect(styles).toEqual({ margin: '-8px' })
  })

  test('returns positive theme values', (): void => {
    const styles = getStyle({
      theme: {
        space: [0, '1em', '2em']
      },
      m: 2
    })
    expect(styles).toEqual({ margin: '2em' })
  })

  test('returns responsive values', (): void => {
    const styles = getStyle({
      m: [0, 2, 3]
    })
    expect(styles).toEqual({
      margin: 0,
      [`@media screen and (min-width: ${defaultBreakpoints[0]})`]: { margin: '8px' },
      [`@media screen and (min-width: ${defaultBreakpoints[1]})`]: { margin: '16px' }
    })
  })

  test('returns aliased values', (): void => {
    const styles = getStyle({
      px: 2
    })
    expect(styles).toEqual({ 'padding-left': '8px', 'padding-right': '8px' })
  })

  test('returns string values from theme', (): void => {
    const styles = getStyle({
      theme: {
        space: [0, '1em']
      },
      padding: 1
    })
    expect(styles).toEqual({ padding: '1em' })
  })

  test('returns negative string values from theme', (): void => {
    const styles = getStyle({
      theme: {
        space: [0, '1em']
      },
      margin: -1
    })
    expect(styles).toEqual({ margin: '-1em' })
  })

  test('returns values from theme object', (): void => {
    const styles = getStyle({
      theme: {
        space: { sm: 1 }
      },
      margin: 'sm'
    })
    expect(styles).toEqual({ margin: '1px' })
  })

  test('pl prop sets paddingLeft', (): void => {
    const styles = getStyle({ pl: 2 })
    expect(styles).toEqual({ 'padding-left': '8px' })
  })

  test('pl prop sets paddingLeft 0', (): void => {
    const styles = getStyle({ pl: 0 })
    expect(styles).toEqual({ 'padding-left': 0 })
  })

  test('px prop overrides pl prop', (): void => {
    const styles = getStyle({
      pl: 1,
      px: 2
    })
    expect(styles).toEqual({ 'padding-left': '8px', 'padding-right': '8px' })
  })

  test('py prop overrides pb prop', (): void => {
    const styles = getStyle({
      pb: 1,
      py: 2
    })
    expect(styles).toEqual({ 'padding-top': '8px', 'padding-bottom': '8px' })
  })

  test('mx prop overrides mr prop', (): void => {
    const styles = getStyle({
      mr: 1,
      mx: 2
    })
    expect(styles).toEqual({ 'margin-left': '8px', 'margin-right': '8px' })
  })

  test('my prop overrides mt prop', (): void => {
    const styles = getStyle({
      mt: 1,
      my: 2
    })
    expect(styles).toEqual({ 'margin-top': '8px', 'margin-bottom': '8px' })
  })

  test('margin overrides m prop', (): void => {
    const styles = getStyle({
      m: 1,
      margin: 2
    })
    expect(styles).toEqual({ margin: '8px' })
  })

  test('handles margin with no theme', (): void => {
    const styles = getStyle({
      mt: 12
    })
    expect(styles).toEqual({
      'margin-top': '12px'
    })
  })

  test('handles overriding margin/padding shortcut props', (): void => {
    const styles = getStyle({
      m: 4,
      mx: 3,
      mr: 2,
      p: 4,
      py: 3,
      pt: 2
    })
    expect(styles).toEqual({
      margin: '32px',
      'margin-left': '16px',
      'margin-right': '8px',
      padding: '32px',
      'padding-bottom': '16px',
      'padding-top': '8px'
    })
  })

  test('single directions override axes', (): void => {
    const styles = getStyle({
      mx: 3,
      ml: 1,
      mr: 2,
      px: 3,
      pl: 1,
      pr: 2
    })
    expect(styles).toEqual({
      'margin-left': '4px',
      'margin-right': '8px',
      'padding-left': '4px',
      'padding-right': '8px'
    })
  })

  test('supports object values', (): void => {
    const styles = getStyle({
      m: {
        _: 0,
        0: 1,
        1: 2
      }
    })
    expect(styles).toEqual({
      margin: 0,
      [`@media screen and (min-width: ${defaultBreakpoints[0]})`]: {
        margin: '4px'
      },
      [`@media screen and (min-width: ${defaultBreakpoints[1]})`]: {
        margin: '8px'
      }
    })
  })

  test('supports non-array breakpoints', (): void => {
    const theme = {
      disableStyledSystemCache: true,
      breakpoints: {
        small: '40em',
        medium: '52em'
      }
    }
    const styles = getStyle({
      theme,
      p: {
        small: 2
      },
      m: {
        _: 0,
        small: 1,
        medium: 2
      }
    })
    expect(styles).toEqual({
      margin: 0,
      '@media screen and (min-width: 40em)': {
        margin: '4px',
        padding: '8px'
      },
      '@media screen and (min-width: 52em)': {
        margin: '8px'
      }
    })
  })
})
