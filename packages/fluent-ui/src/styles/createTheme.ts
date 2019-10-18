import { deepMerge } from '../utils'

import createColor, { Colors } from './createColor'
import createTransition, { Transitions } from './createTransition'
import createSize, { Sizes } from './createSize'
import shadows, { Shadows } from './createShadow'
import createSpace, { Space, defaultSpace } from './createSpace'
import createBreakpoint, { Breakpoints, defaultBreakpoints } from './createBreakpoint'
import createTypographies, { Typographies } from './createTypography'

export interface Theme {
  colors?: Colors
  sizes?: Sizes
  transitions?: Transitions
  shadows?: Shadows
  space?: Space
  breakpoints?: Breakpoints
  typographies?: Typographies
}

function createTheme(theme: Theme): Theme {
  const {
    colors: colorsInput = {},
    sizes: sizesInput = {},
    transitions: transitionsInput = {},
    shadows: shadowsInput,
    space: spaceInput = defaultSpace,
    breakpoints: breakpointsInput = defaultBreakpoints,
    typographies: typographiesInput = {}
  } = theme

  const colors = createColor(colorsInput)
  const transitions = createTransition(transitionsInput)
  const sizes = createSize(sizesInput)
  const space = createSpace(spaceInput)
  const breakpoints = createBreakpoint(breakpointsInput)
  const typographies = createTypographies(typographiesInput)

  return {
    shadows: shadowsInput || shadows,
    ...deepMerge<Theme>(theme, {
      colors,
      sizes,
      transitions,
      space,
      breakpoints,
      typographies
    })
  }
}

export default createTheme
