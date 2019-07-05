export { default as primary } from './primary'
export { default as accent } from './accent'
export { default as black } from './black'
export { default as white } from './white'

import * as CSS from 'csstype'
export interface Color {
  light3?: CSS.Color
  light2?: CSS.Color
  light1?: CSS.Color
  default?: CSS.Color
  dark1?: CSS.Color
  dark2?: CSS.Color
  dark3?: CSS.Color
  transparent1?: CSS.Color
  transparent2?: CSS.Color
  transparent3?: CSS.Color
}
