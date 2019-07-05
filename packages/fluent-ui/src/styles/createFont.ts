import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Fonts {
  button?: CSS.FontFamilyProperty
}

function createFont(fonts: Fonts): Fonts {
  const defaultFont: Fonts = {
    button: 'PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto'
  }
  return deepMerge(fonts, defaultFont)
}

export default createFont
