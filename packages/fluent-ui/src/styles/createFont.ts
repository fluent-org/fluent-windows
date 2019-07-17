import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Fonts {
  default?: CSS.FontFamilyProperty
  button?: CSS.FontFamilyProperty
}

function createFont(fonts: Fonts): Fonts {
  const defaultFont: Fonts = {
    default: '"Segoe UI", PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto',
    button: '"Segoe UI", PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto'
  }
  return deepMerge(fonts, defaultFont)
}

export default createFont
