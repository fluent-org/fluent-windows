import { ObjectOrArray } from 'styled-system'
import * as CSS from 'csstype'

interface BaseColors {
  primary?: CSS.ColorProperty
  accent?: CSS.ColorProperty
  white?: CSS.ColorProperty
  black?: CSS.ColorProperty
}

interface Colors extends BaseColors {
  modes?: {
    dark: BaseColors
  }
}

export interface Theme {
  colors?: Colors
  fonts?: ObjectOrArray<CSS.FontFamilyProperty>
  fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>
  space?: ObjectOrArray<number | string>
}

const colors: Colors = {
  primary: 'rgba(0, 0, 0, 0.2)',
  accent: 'rgba(0, 120, 215, 1)',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  modes: {
    dark: {
      primary: 'rgba(0, 0, 0, 0.2)',
      accent: 'rgba(0, 120, 215, 1)',
      white: 'rgba(255, 255, 255, 1)',
      black: 'rgba(0, 0, 0, 1)'
    }
  }
}

const defaultTheme: Theme = {
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72]
}

export default defaultTheme
