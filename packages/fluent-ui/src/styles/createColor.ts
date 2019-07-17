import { standard, primary, white, black, Color } from '../colors'
import { deepMerge } from '../utils'

export interface Colors {
  standard?: Color
  primary?: Color
  white?: Color
  black?: Color
}

function createColor(colors: Colors): Colors {
  const defaultColors = {
    standard,
    primary,
    white,
    black
  }
  return deepMerge(defaultColors, colors)
}

export default createColor
