import { deepMerge } from '../utils'

import createColor, { Colors } from './createColor'
import createTransition, { Transitions } from './createTransition'
import createSize, { Sizes } from './createSize'
import createFont, { Fonts } from './createFont'
import shadows, { Shadows } from './createShadow'

// eslint-disable-next-line
export interface ThemeProps {}

export interface Theme {
  colors?: Colors
  sizes?: Sizes
  transitions?: Transitions
  fonts?: Fonts
  shadows?: Shadows
}

function createTheme(theme: Theme): Theme {
  const {
    colors: colorsInput = {},
    sizes: sizesInput = {},
    transitions: transitionsInput = {},
    fonts: fontsInput = {},
    shadows: shadowsInput
  } = theme

  const colors = createColor(colorsInput)
  const transitions = createTransition(transitionsInput)
  const sizes = createSize(sizesInput)
  const fonts = createFont(fontsInput)

  return {
    shadows: shadowsInput || shadows,
    ...deepMerge<Theme>(theme, {
      colors,
      sizes,
      transitions,
      fonts
    })
  }
}

export default createTheme
