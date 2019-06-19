import * as CSS from 'csstype'

interface BaseColors {
  secondary?: CSS.ColorProperty
  primary?: CSS.ColorProperty
  accent?: CSS.ColorProperty
  selected?: CSS.ColorProperty
  white?: CSS.ColorProperty
  black?: CSS.ColorProperty
  border?: CSS.ColorProperty
}

interface Colors extends BaseColors {
  modes?: {
    dark: BaseColors
  }
}

interface Sizes {
  small?: any
  medium?: any
  large?: any
}

interface Transitions {
  button: CSS.TransitionProperty
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

const colors: Colors = {
  secondary: 'rgba(0, 0, 0, 0.1)',
  primary: 'rgba(0, 0, 0, 0.2)',
  accent: 'rgba(0, 120, 215, 1)',
  selected: 'rgba(0, 120, 215, 0.4)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  border: 'rgba(0, 0, 0, 0.4)',
  modes: {
    dark: {
      secondary: 'rgba(0, 0, 0, 0.1)',
      primary: 'rgba(0, 0, 0, 0.2)',
      accent: 'rgba(0, 120, 215, 1)',
      selected: 'rgba(0, 120, 215, 0.4)',
      white: 'rgba(255, 255, 255, 1)',
      black: 'rgba(0, 0, 0, 1)',
      border: 'rgba(0, 0, 0, 0.4)'
    }
  }
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

const transitions: Transitions = {
  button: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
}

const fonts: Fonts = {
  button: 'PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto'
}

const defaultTheme: Theme = {
  colors,
  sizes,
  transitions,
  fonts
}

export default defaultTheme
