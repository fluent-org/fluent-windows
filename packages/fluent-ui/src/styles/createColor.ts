import * as CSS from 'csstype'
import { primary, accent, white, black } from '../colors'
import { deepMerge } from '../utils'

type ColorIntention = CSS.Color[]

export interface Colors {
  primary?: ColorIntention
  accent?: ColorIntention
  white?: ColorIntention
  black?: ColorIntention
}

function createColor(colors: Colors): Colors {
  const defaultColors = {
    primary: Object.values(primary),
    accent: Object.values(accent),
    white: Object.values(white),
    black: Object.values(black)
  }
  return deepMerge(colors, defaultColors)
}

export default createColor
