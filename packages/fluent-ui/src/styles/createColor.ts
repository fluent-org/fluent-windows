import { primary, accent, white, black, Color } from '../colors'
import { deepMerge } from '../utils'

export interface Colors {
  primary?: Color
  accent?: Color
  white?: Color
  black?: Color
}

function createColor(colors: Colors): Colors {
  const defaultColors = {
    primary,
    accent,
    white,
    black
  }
  return deepMerge(defaultColors, colors)
}

export default createColor
