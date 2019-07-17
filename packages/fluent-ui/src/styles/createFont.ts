import * as CSS from 'csstype'
import { deepMerge } from '../utils'

export interface Fonts {
  button?: CSS.FontFamilyProperty
  input?: CSS.FontFamilyProperty
}

function createFont(fonts: Fonts): Fonts {
  const defaultFont: Fonts = {
    button: '"Segoe UI", PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto',
    input: '"Segoe UI", PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto'
  }
  return deepMerge(fonts, defaultFont)
}

export default createFont
