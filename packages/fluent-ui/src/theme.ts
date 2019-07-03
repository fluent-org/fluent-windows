import * as CSS from 'csstype'

// eslint-disable-next-line
export interface ThemeProps {}

interface BaseColors {
  secondary?: CSS.ColorProperty
  primary?: CSS.ColorProperty
  accent?: CSS.ColorProperty
  selected?: CSS.ColorProperty
  white?: CSS.ColorProperty
  black?: CSS.ColorProperty
  border?: CSS.ColorProperty
  gray100?: CSS.ColorProperty
  gray200?: CSS.ColorProperty
  gray300?: CSS.ColorProperty
}

// eslint-disable-next-line
interface Colors extends BaseColors {}

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

const colors: Colors = {
  secondary: 'rgba(0, 0, 0, 0.1)',
  primary: 'rgba(204, 204, 204, 1)',
  accent: 'rgba(0, 120, 215, 1)',
  selected: 'rgba(0, 120, 215, 0.4)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  border: 'rgba(122, 122, 122, 1)',
  gray100: 'rgba(230, 230, 230, 1)',
  gray200: 'rgba(215, 215, 215, 1)',
  gray300: 'rgba(185, 185, 185, 1)'
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

const defaultTheme: Theme = {
  colors,
  sizes,
  transitions,
  fonts
}

export default defaultTheme
