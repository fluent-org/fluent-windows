import * as CSS from 'csstype'

interface BaseColors {
  primary?: CSS.ColorProperty
  accent?: CSS.ColorProperty
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

export interface Theme {
  colors?: Colors
  sizes?: Sizes
  transitions?: Transitions
}

const colors: Colors = {
  primary: 'rgba(0, 0, 0, 0.2)',
  accent: 'rgba(0, 120, 215, 1)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  border: 'rgba(0, 0, 0, 0.4)',
  modes: {
    dark: {
      primary: 'rgba(0, 0, 0, 0.2)',
      accent: 'rgba(0, 120, 215, 1)',
      white: 'rgba(255, 255, 255, 1)',
      black: 'rgba(0, 0, 0, 1)',
      border: 'rgba(0, 0, 0, 0.4)'
    }
  }
}

const sizes: Sizes = {
  small: {
    padding: '2px 6px'
  },
  medium: {
    padding: '4px 14px'
  },
  large: {
    padding: '6px 22px'
  }
}

const transitions: Transitions = {
  button: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
}

const defaultTheme: Theme = {
  colors,
  sizes,
  transitions
}

export default defaultTheme
