export { default as primary } from './primary'
export { default as accent } from './accent'

import * as CSS from 'csstype'
export interface Color {
  light3: CSS.Color
  light2: CSS.Color
  light1: CSS.Color
  default: CSS.Color
  dark1: CSS.Color
  dark2: CSS.Color
  dark3: CSS.Color
  [key: string]: CSS.Color
}
