import * as CSS from 'csstype'
import { primary, accent, Color } from '../colors'
import { deepMerge } from '../utils'

type ColorIntention = CSS.Color[]

export interface Colors {
  type?: 'light' | 'dark'
  primary?: ColorIntention
  accent?: ColorIntention
  error?: ColorIntention
}

function createColor(colors: Colors): Colors {
  const defaultColors = {
    primary: Object.values(primary),
    accent: Object.values(accent)
  }
  return deepMerge(colors, defaultColors)
}

export default createColor
