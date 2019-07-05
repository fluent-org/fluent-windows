import * as CSS from 'csstype'
import { primary, accent } from '../colors'
import { deepMerge } from '../utils'

type ColorIntention = CSS.Color[]

export interface Colors {
  primary?: ColorIntention
  accent?: ColorIntention
  white?: CSS.Color
  black?: CSS.Color
}

function createColor(colors: Colors): Colors {
  const defaultColors = {
    primary: Object.values(primary),
    accent: Object.values(accent),
    white: '#fff',
    black: '#000'
  }
  return deepMerge(colors, defaultColors)
}

export default createColor
