import * as CSS from 'csstype'
import { deepMerge } from '../utils'
import createColor, { Colors } from './createColor'

// eslint-disable-next-line
export interface ThemeProps {}

interface Sizes {
  small?: any
  medium?: any
  large?: any
}

interface Transitions {
  button: CSS.TransitionProperty
  navigation: CSS.TransitionProperty
}

interface Fonts {
  button: CSS.FontFamilyProperty
}

export interface Theme {
  colors?: Colors
  sizes?: Sizes
  transitions?: Transitions
  fonts?: Fonts
}

const sizes: Sizes = {
  small: {
    padding: '2px 18px'
  },
  medium: {
    padding: '4px 26px'
  },
  large: {
    padding: '6px 38px'
  }
}

const baseTransition = 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

const transitions: Transitions = {
  button: baseTransition,
  navigation: baseTransition
}

const fonts: Fonts = {
  button: 'PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto'
}

function createTheme(theme: Theme): Theme {
  const {
    colors: colorsInput = {},
    sizes: sizesInput = {},
    transitions: transitionsInput = {},
    fonts: fontsInput = {}
  } = theme
  const colors = createColor(colorsInput)

  return deepMerge<Theme>(
    theme,
    {
      colors,
      sizes,
      transitions,
      fonts
    },
    {
      sizes: sizesInput,
      transitions: transitionsInput,
      fonts: fontsInput
    }
  )
}

export default createTheme
